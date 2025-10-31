import { create } from "zustand";
import { Address } from "../hooks/UseAddress";

type AddressStore = {
  addresses: Address[];
  setAddresses: (list: Address[]) => void;
  addAddress: (item: Address) => void;
  deleteAddress: (id: number) => void;
  updateAddress: (item: Address) => void;
};

export const useAddressStore = create<AddressStore>((set, get) => ({
  addresses: [],

  setAddresses: (list) => set({ addresses: list }),

  addAddress: (item) => {
    set({ addresses: [...get().addresses, item] });
  },

  deleteAddress: (id) => {
    set({ addresses: get().addresses.filter((a) => a.id !== id) });
  },

  updateAddress: (item) => {
    set({
      addresses: get().addresses.map((a) => (a.id === item.id ? item : a)),
    });
  },
}));
