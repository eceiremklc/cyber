import { Product } from "../types/Product";
import { ApiProduct } from "../types/ApiProduct";

export const formatProducts = (products: ApiProduct[]): Product[] => {
  return products?.map((p) => {
    const firstVariant = p.variants?.[0] || {};
    const price = parseFloat(firstVariant.price || "0");
    const compareAt = parseFloat(firstVariant.compare_at_price || "0");

    let discountPercentage = 0;
    if (compareAt > 0 && price > 0 && compareAt > price) {
      discountPercentage = Math.round(((compareAt - price) / compareAt) * 100);
    }

    return {
      id: p.id,
      title: p.title,
      description: p.body_html || "",
      category: p.product_type || "Unknown",
      image: p.images?.[0]?.src || "",
      price,
      compareAtPrice: compareAt,
      discountPercentage,
      quantity: firstVariant.inventory_quantity || 0,
    };
  });
};
