import { stripe } from "@/app/lib/stripe/server";
import { CheckoutItem } from "@/app/types/Stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { items }: { items: CheckoutItem[] } = await req.json();

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Geçersiz veri." }, { status: 400 });
    }

    const line_items = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // bilinmeyen hata tipi
    return NextResponse.json(
      { error: "Bilinmeyen bir hata oluştu." },
      { status: 500 }
    );
  }
}
