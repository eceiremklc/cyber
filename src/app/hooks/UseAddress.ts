import { useState } from "react";
import { createClient } from "../lib/supabase/supabaseClient";

export interface Address {
  title: string;
  body: string;
  badge: string;
}
export const useAddress = () => {
  const supabase = createClient();
  const [addresses, setAddresses] = useState<Address[]>([]);

  const fetchAddress = async () => {
    const { data, error } = await supabase.from("addresses").select("*");
    if (error) {
      console.error(error);
      return;
    }
    setAddresses((data as Address[]) ?? []);
    return addresses;
    console.log(data);
  };

  const createAddress = async (address: Address) => {
    const { data, error } = await supabase.from("addresses").insert([address]);
    if (error) {
      console.error(error);
    }
    return { data, error };
  };

  return { addresses, fetchAddress, createAddress };
};
