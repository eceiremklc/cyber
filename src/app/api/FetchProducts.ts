// fetchProducts.ts
import { ApiProduct } from "../types/ApiProduct";

export const fetchProducts = async (): Promise<ApiProduct[]> => {
  const res = await fetch("https://cyber-backend-lake.vercel.app/api/products");
  const data = await res.json();
  return data.products; // bu ApiProduct[]
};
