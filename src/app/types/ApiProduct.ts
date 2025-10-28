export interface ApiProduct {
  id: number | string;
  title: string;
  body_html: string;
  product_type: string;
  images?: { src: string }[];
  variants?: {
    price?: string;
    compare_at_price?: string;
    inventory_quantity?: number;
  }[];
}
