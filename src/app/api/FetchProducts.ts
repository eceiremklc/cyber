export const fetchProducts = async () => {
  const res = await fetch("https://cyber-backend-lake.vercel.app/api/products");
  if (!res.ok) throw new Error("Ürünler alınamadı");
  const data = await res.json();
  return data.products;
};
