import { create } from "zustand";
import { Product } from "../types/Product";
import { persist } from "zustand/middleware";
import { fetchProducts } from "../api/FetchProducts";

type ProductStore = {
  products: Product[];
  allProducts: Product[];
  favProducts: Product[];
  cart: Product[];
  loading: boolean;
  error: string | null;
  fetchAll: () => Promise<void>;
  searchProduct: (query: string) => Promise<void>;
  filterProducts: (category: string) => void;
  sortProducts: (sortBy: string) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (product: Product) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  updateCartItemQuantity: (product: Product, quantity: number) => void;
};
export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: [],
      allProducts: [],
      favProducts: [],
      cart: [],
      loading: false,
      error: null,

      fetchAll: async () => {
        try {
          set({ loading: true, error: null }); // Yeni yüklemede hatayı sıfırla
          const data = await fetchProducts();
          set({ products: data, allProducts: data, loading: false });
        } catch (err: unknown) {
          // Hata tipini 'unknown' olarak değiştirdik
          // Hatanın bir Error objesi olup olmadığını kontrol et
          if (err instanceof Error) {
            set({
              error: err.message,
              loading: false,
            });
          } else {
            // Eğer Error objesi değilse, genel bir hata mesajı ver
            set({
              error: "Bilinmeyen bir hata oluştu.",
              loading: false,
            });
          }
        }
      },

      searchProduct: async (query: string) => {
        const { allProducts } = get();

        if (query.trim() === "") {
          set({ products: allProducts });
          return;
        }

        const filtered = allProducts.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        );

        set({ products: filtered });
      },

      filterProducts: (category: string) => {
        const { allProducts } = get();

        if (category === "all") {
          set({ products: allProducts });
          return;
        }

        const filtered = allProducts.filter(
          (p) =>
            p.category.trim().toLowerCase() === category.trim().toLowerCase()
        );
        set({ products: filtered });
      },

      sortProducts: (sortBy: string) => {
        const { products, allProducts } = get();
        // Orijinal diziyi değiştirmemek için kopyasını oluştur
        let sortedProducts = [...products];

        if (sortBy === "featured") {
          // 'featured' için, ilk yüklenen tüm ürünleri tekrar göster
          sortedProducts = [...allProducts];
        } else if (sortBy === "price-asc") {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-desc") {
          sortedProducts.sort((a, b) => b.price - a.price);
        } // Diğer sıralama seçenekleri buraya eklenebilir

        set({ products: sortedProducts });
      },

      addToWishlist: (product: Product) => {
        const { favProducts } = get();
        // Ürün zaten favorilerdeyse ekleme
        if (favProducts.some((p) => p.id === product.id)) {
          console.warn(`Ürün "${product.title}" zaten favorilerde.`);
          return;
        }

        set({ favProducts: [...favProducts, product] });
      },

      removeFromWishlist: (product: Product) => {
        const { favProducts } = get();
        const updatedFavs = favProducts.filter((p) => p.id !== product.id);
        set({ favProducts: updatedFavs });
      },

      addToCart: (product: Product) => {
        const { cart } = get();
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
          // Eğer ürün sepette varsa miktarını artır
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          );
          set({ cart: updatedCart });
          console.log(`"${product.title}" miktarı güncellendi.`);
        } else {
          // Ürün sepette yoksa, 1 miktar ile ekle
          set({ cart: [...cart, { ...product, quantity: 1 }] });
          console.log(`"${product.title}" sepete eklendi.`);
        }
      },

      removeFromCart: (product: Product) => {
        const { cart } = get();
        const updatedCart = cart.filter((item) => item.id !== product.id);
        set({ cart: updatedCart });
        console.log(`Ürün (ID: ${product.id}) sepetten kaldırıldı.`);
      },

      updateCartItemQuantity: (product: Product, quantity: number) => {
        const { cart } = get();
        const updatedCart = cart.map((item) =>
          item.id === product.id ? { ...item, quantity } : item
        );
        set({ cart: updatedCart });
        console.log(
          `Ürün (ID: ${product.id}) miktarı ${quantity} olarak güncellendi.`
        );
      },
    }),
    {
      name: "products-store",
      partialize: (state) => ({
        favProducts: state.favProducts,
        cart: state.cart,
      }),
    }
  )
);
