import { Product } from "../types/Product";

export const formatProducts = (products: any[]): Product[] => {
  return products.map((p) => {
    const price = parseFloat(p.variants[0]?.price || "0");
    const compareAt = parseFloat(p.variants[0]?.compare_at_price || "0");

    let discountPercentage = 0;
    if (compareAt > 0 && price > 0 && compareAt > price) {
      discountPercentage = Math.round(((compareAt - price) / compareAt) * 100);
    }

    return {
      id: p.id,
      title: p.title,
      description: p.body_html,
      price,
      compareAtPrice: compareAt,
      discountPercentage,
      image: p.images[0]?.src || "",
      category: p.product_type || "",
      quantity: p.variants[0]?.inventory_quantity || 0,
    };
  });
};
