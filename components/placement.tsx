"use client";

import { useState, useEffect } from "react";
import { Card as NextUICard, Divider, Image, Slider } from "@nextui-org/react";
import { useState } from "react";
import duImage from "@/public/du.jpg";
import jaImage from "@/public/ja.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  qty: number;
  isEnabled: boolean;
  image: string;
}

const Placement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 0,
      name: "",
      category: "",
      qty: 0,
      isEnabled: false,
      image: "",
    },
  ]);
  const [filters, setFilters] = useState<{
    category: string;
    priceRange: [number, number];
  }>({
    category: "",
    priceRange: [0, 10],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/catalog");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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

    // if (filters.priceRange) {
    //   const [minPrice, maxPrice] = filters.priceRange;
    //   if (product.price < minPrice || product.price > maxPrice) {
    //     return false;
    //   }
    // }

    return true;
  });
  console.log(products[0].image);
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
      <div className="grid col-span-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-24">
        {filteredProducts.map((product) => (
          <NextUICard
            key={product.id}
            className="w-auto m-4 flex flex-col" // Added flex-col to make card content stack vertically
            style={{ width: "204px", height: "373px", borderRadius: "20px" }}
          >
            <div className="h-full">
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

      {/* Add the standalone button at the bottom or a specific place in the grid */}
      <div className="w-full flex justify-center mt-4"></div>
    </div>
  );
};

export default Placement;
