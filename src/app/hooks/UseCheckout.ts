"use client";

import { useState, useCallback } from "react";
import { CheckoutItem } from "../types/Stripe";

interface ApiResponse {
  url?: string;
  error?: string;
}

export function useCheckout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startPayment = useCallback(async (items: CheckoutItem[]) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      const data: ApiResponse = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Ödeme oturumu oluşturulamadı.");
      }

      // artık redirectToCheckout yok, direkt window.location.href kullan
      window.location.href = data.url;
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("Bilinmeyen bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  }, []);

  return { startPayment, loading, error };
}
