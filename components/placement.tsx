"use client";

import { Card as NextUICard, Divider, Image, Slider } from "@nextui-org/react";
import { useState } from "react";
import duImage from "@/public/du.jpg";
import jaImage from "@/public/ja.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: {
    src: string;
    radius: "sm" | "md" | "lg" | "none" | "full";
  };
}

const products: Product[] = [
  {
    id: 1,
    name: "Produk 1",
    category: "kue ulangtahun",
    price: 4,
    image: { src: duImage.src, radius: "none" },
  },
  {
    id: 2,
    name: "Produk 2",
    category: "kue tradisional",
    price: 50,
    image: { src: jaImage.src, radius: "none" },
  },
  {
    id: 3,
    name: "Produk 3",
    category: "kue ulangtahun",
    price: 5,
    image: { src: duImage.src, radius: "none" },
  },
  {
    id: 4,
    name: "Produk 4",
    category: "kue tradisional",
    price: 50,
    image: { src: jaImage.src, radius: "none" },
  },
  {
    id: 5,
    name: "Produk 5",
    category: "kue ulangtahun",
    price: 5,
    image: { src: duImage.src, radius: "none" },
  },
  {
    id: 6,
    name: "Produk 6",
    category: "kue tradisional",
    price: 50,
    image: { src: jaImage.src, radius: "none" },
  },
  // Add more products if needed
];

const Placement: React.FC = () => {
  const [filters, setFilters] = useState<{
    category: string;
    priceRange: [number, number];
  }>({
    category: "",
    priceRange: [0, 10],
  });

  const handleFilterChange = (
    filterName: string,
    value: string | [number, number]
  ) => {
    setFilters({ ...filters, [filterName]: value });
  };

  const filteredProducts = products.filter((product) => {
    if (filters.category && product.category.toString() !== filters.category) {
      return false;
    }

    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange;
      if (product.price < minPrice || product.price > maxPrice) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6  pt-12 ">
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
              <option value="kue ulangtahun">kue ulang tahun</option>
              <option value="kue tradisional">Kue tradisional</option>
              {/* Add more options for categories */}
            </select>
          </div>
          <div>
            <label htmlFor="priceRange">Price Range:</label>
            <span className="pl-52">{`$${filters.priceRange[0]} - $${filters.priceRange[1]}`}</span>

            <Slider
              id="priceRange"
              onChange={(value) =>
                handleFilterChange("priceRange", value as [number, number])
              }
              value={filters.priceRange}
              defaultValue={filters.priceRange}
              minValue={0}
              maxValue={100}
            />
          </div>
        </NextUICard>
      </div>
      <div className="grid col-span-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <NextUICard
            key={product.id}
            className="w-auto m-4 flex flex-col" // Added flex-col to make card content stack vertically
            style={{ width: "204px", height: "373px", borderRadius: "20px" }}
          >
            <div className="h-1/2">
              <Image
                src={product.image.src}
                alt={product.name}
                width={142} // Sesuaikan lebar gambar sesuai dengan aspek rasio
                // Set height to full and removed h-1/2
              />
            </div>
            <Divider />
            <div className="flex-grow flex flex-col justify-between p-4">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>terjual barang</p>
            </div>
          </NextUICard>
        ))}
      </div>
    </div>
  );
};

export default Placement;
