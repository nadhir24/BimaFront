"use client";

import React, { useState, useEffect } from "react";
import { Card as NextUICard, Divider, Image } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import { Product } from "@/types/product";


 
const Placement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<{
    category: string;
    priceRange: [number, number];
  }>({
    category: "",
    priceRange: [0, 100],
  });

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/catalog/findall"
        );
        const catalogData = response.data.map((product: Product) => ({
          ...product,
          image: `http://localhost:5000/catalog/${product.image.split("/").pop()}`,
        }));
        setProducts(catalogData);
      } catch (error) {
        console.error("Error fetching catalog data:", error);
      }
    };

    fetchCatalog();
  }, []);

  const handleFilterChange = (
    filterName: string,
    value: string | [number, number]
  ) => {
    setFilters({ ...filters, [filterName]: value });
  };

  const filteredProducts = products.filter((product) => {
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    const [minPrice, maxPrice] = filters.priceRange;
    if (product.price < minPrice || product.price > maxPrice) {
      return false;
    }

    return true;
  });

  return (
    <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 pt-12">
      <div className="col-span-1">{/* Filter section */}</div>

      <div className="grid col-span-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-24">
        {filteredProducts.map((product) => (
          <Link
            href={`/katalog/${encodeURIComponent(product.name)}/${encodeURIComponent(product.category)}`}
            key={product.id}
          >
            <NextUICard
              className="w-auto m-4 flex flex-col cursor-pointer"
              style={{ borderRadius: "20px" }}
            >
              <div className="w-full h-full object-cover">
                <Image src={product.image} alt={product.name} />
              </div>
              <Divider />
              <div className="flex-grow flex flex-col justify-between p-4">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.qty} items sold</p>
              </div>
            </NextUICard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Placement;
