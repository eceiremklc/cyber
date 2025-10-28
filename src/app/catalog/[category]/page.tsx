"use client";
import React, { useEffect } from "react";
import "./Catalog.module.scss";
import { useProductStore } from "@/app/store/UseProductStore";
import { useParams } from "next/navigation";
import ProductsTable from "@/app/home/components/products/ProductsTable";

export default function Page() {
  const { category } = useParams();
  const { products, fetchProducts } = useProductStore();
  const filteredProducts = products?.filter(
    (p) => p.category.toLowerCase() === category
  );
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductsTable products={filteredProducts} />
    </div>
  );
}
