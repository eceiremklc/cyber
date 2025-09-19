import { Product } from "../types/Product";

export const formatProducts = (products: any[]): Product[] => {
  return products.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.body_html,
    price: p.variants[0]?.price || "0.00",
    image: p.images[0]?.src || "",
    category: p.product_type || "",
    quantity: p.variants[0]?.inventory_quantity || 0,
  }));
};
