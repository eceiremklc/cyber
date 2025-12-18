import { CardNumberElement } from "@stripe/react-stripe-js";
import type { Stripe, StripeElements } from "@stripe/stripe-js";
import { Dispatch, SetStateAction } from "react";

export const handlePay = async (
  stripe: Stripe,
  elements: StripeElements,
  totalPrice: number,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  if (!stripe || !elements) return;

  setLoading(true);

  const res = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: totalPrice,
    }),
  });

  const { clientSecret } = await res.json();

  const cardNumberElement = elements.getElement(CardNumberElement);

  if (!cardNumberElement) {
    alert("Card number element yok");
    return;
  }

  const result = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: cardNumberElement,
    },
  });

  console.log("Stripe result:", result);

  if (result.error) {
    alert(result.error.message);
    return;
  } else {
    setLoading(false);
  }

  alert("Ödeme başarılı 🎉");
};
