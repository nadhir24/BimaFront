"use client";

import { useState, useEffect } from "react";
import { Card as NextUICard, Divider, Image, Slider } from "@nextui-org/react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  category: string;
  size: string;
  qty: number;
  isEnabled: boolean;
  image: string;
  price: number;
}

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
        const response = await axios.get("http://localhost:5000/catalog/findall");
        const catalogData = response.data.map((product: Product) => ({
          ...product,
          image: `http://localhost:5000/catalog/${product.image.split('/').pop()}`, // Update URL gambar
        }));

        setProducts(catalogData);
        console.log("Catalog data successfully fetched!");
      } catch (error) {
        console.error("Error fetching catalog data:", error);
      }
    };

    fetchCatalog();
  }, []);

  const handleFilterChange = (filterName: string, value: string | [number, number]) => {
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
      <div className="col-span-1">
        <NextUICard>
          <div>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              onChange={(e) => handleFilterChange("category", e.target.value)}
              value={filters.category}
            >
              <option value="">All</option>
              <option value="kue ulangtahun">Kue Ulang Tahun</option>
              <option value="kue tradisional">Kue Tradisional</option>
              {/* Tambahkan opsi kategori lain sesuai kebutuhan */}
            </select>
          </div>
          <div>
            <label htmlFor="priceRange">Price Range:</label>
            <span className="pl-52">{`$${filters.priceRange[0]} - $${filters.priceRange[1]}`}</span>
            <Slider
              id="priceRange"
              onChange={(value) => handleFilterChange("priceRange", value as [number, number])}
              value={filters.priceRange}
              defaultValue={filters.priceRange}
              minValue={0}
              maxValue={100}
            />
          </div>
        </NextUICard>
      </div>
      <div className="grid col-span-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-24">
        {filteredProducts.map((product) => (
          <NextUICard
            key={product.id}
            className="w-auto m-4 flex flex-col"
            style={{ width: "204px", height: "373px", borderRadius: "20px" }}
          >
            <div className="h-full">
              <Image
                src={product.image}
                alt={product.name}
                width={142}
                height={142}
              />
            </div>
            <Divider />
            <div className="flex-grow flex flex-col justify-between p-4">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.qty} items sold</p>
            </div>
          </NextUICard>
        ))}
      </div>
    </div>
  );
};

export default Placement;
