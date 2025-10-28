"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/app/store/useUserStore";

type Props = {
  children: ReactNode;
};

export default function PrivateRoute({ children }: Props) {
  const router = useRouter();
  const { user, verified, initializeUser } = useUserStore();

  useEffect(() => {
    // Store'u başlat
    initializeUser();
  }, []);

  useEffect(() => {
    // user loaded olduktan sonra kontrol
    if (user === null) {
      router.push("/login");
    } else if (!verified) {
      router.push("/verify-email");
    }
  }, [user, verified, router]);

  // user yüklenene kadar veya redirect olmadan children göstermiyoruz
  if (!user || !verified) return null;

  return <>{children}</>;
}
