import { NextResponse } from "next/server";
import { stripe } from "@/app/lib/stripe/server";

export async function POST(req: Request) {
  const { amount } = await req.json();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency: "try",
    payment_method_types: ["card"],
  });

  return NextResponse.json({
    clientSecret: paymentIntent.client_secret,
  });
}
