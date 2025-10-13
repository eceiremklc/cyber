import { useProductStore } from "../store/UseProductStore";

export const useTotalPriceCount = () => {
  const { cart } = useProductStore();
  const total = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
  return total;
};
