import { create } from "zustand";
import { Address } from "../hooks/UseAddress";
import { persist } from "zustand/middleware";
import { ShippingMethod } from "../types/shippingMethod";
import { Dayjs } from "dayjs";

type AddressStore = {
  addresses: Address[];
  selectedAddress?: Address;
  selectedShippingMethod?: ShippingMethod;
  setSelectedShippingMethod: (method: ShippingMethod) => void;
  deliveryDate?: Dayjs | null;
  setSelectedAddress: (address: Address) => void;
  setAddresses: (list: Address[]) => void;
  addAddress: (item: Address) => void;
  deleteAddress: (id: number) => void;
  updateAddress: (item: Address) => void;
};

export const useAddressStore = create<AddressStore>()(
  persist(
    (set, get) => ({
      addresses: [],

      setAddresses: (list) => set({ addresses: list }),
      setSelectedAddress(address) {
        set({ selectedAddress: address });
      },
      setSelectedShippingMethod(method) {
        set({
          selectedShippingMethod: method,
          deliveryDate: method.deliveryDate,
        });
      },
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
    }),
    {
      name: "address-store",
      partialize: (state) => ({
        selectedAddress: state.selectedAddress,
        selectedShippingMethod: state.selectedShippingMethod,
        deliveryDate: state.deliveryDate,
      }),
    }
  )
);
