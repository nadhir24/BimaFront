import React from "react";
import Placement from "../../components/placement"
import ProductDetailModal from "@/components/testing";
export default function KatalogPage() {
  return (
    <div>
      <h1>katalog page</h1>
      <ProductDetailModal product={null} onClose={function (): void {
        throw new Error("Function not implemented.");
      } }/>
    </div>
  );
}
