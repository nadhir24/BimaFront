"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/types/product";
import Image from "next/image";

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchProductDetail = async () => {
        try {
          const [productName, category] = slug as string[];

          const response = await axios.get(
            `http://localhost:5000/catalog/detail?name=${productName}&category=${category}`
          );
          setProduct(response.data);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };

      fetchProductDetail();
    }
  }, [slug]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <Image
        src={`http://localhost:5000/catalog/${product.image}`}
        alt={product.name}
      />
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetailPage;
