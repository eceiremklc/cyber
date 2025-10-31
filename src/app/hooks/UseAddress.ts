import { createClient } from "../lib/supabase/supabaseClient";
import { useAddressStore } from "../store/useAddressStore";

export interface Address {
  id: number;
  title: string;
  body: string;
  badge: string;
}
const supabase = createClient();

export const useAddress = () => {
  const { setAddresses, addresses } = useAddressStore();
  const getAddress = async () => {
    const { data, error } = await supabase.from("addresses").select("*");
    if (error) {
      console.error(error);
    }
    setAddresses(data || []);
    return { data, error };
  };

  const createAddress = async (address: Address) => {
    const { data, error } = await supabase.from("addresses").insert([address]);
    if (error) {
      console.error(error);
    }
    setAddresses([...addresses, ...(data ?? [])]);

    return { data, error };
  };

  const deleteAddress = async (id: number) => {
    const { data, error } = await supabase
      .from("addresses")
      .delete()
      .eq("id", id)
      .select(); // data = deleted rows

    if (error) {
      console.error("Delete error:", error);
    }

    setAddresses(addresses.filter((a) => a.id !== id));

    return { data, error };
  };

  return { getAddress, createAddress, deleteAddress };
};
