"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Card, RadioGroup, Radio, Input, Button } from "@nextui-org/react";
import NumberInput from "@/components/NumberInput";
import { motion, useAnimation } from "framer-motion"; // Import necessary components
import { Icon } from '@iconify/react'; // Import Iconify for icons
import { ToastContainer, toast } from "react-toastify"; // Import Toastify

const ProductDetailPage = () => {
  interface Size {
    id: number;
    size: string;
    price: string;
  }

  interface Catalog {
    id: number;
    name: string;
    category: string;
    image: string | null;
    sizes: Size[];
    qty: string;
    slug: string;
    productSlug: string;
    categorySlug: string;
  }

  const params = useParams();
  const categorySlug = params.categorySlug as string;
  const productSlug = Array.isArray(params.productSlug)
    ? params.productSlug.join("/")
    : params.productSlug;

  const [product, setProduct] = useState<Catalog | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1); // Default quantity

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get<Catalog>(
          `http://localhost:5000/catalog/${categorySlug}/${productSlug}`
        );
        setProduct(response.data);

        if (response.data.sizes.length > 0) {
          setSelectedSize(response.data.sizes[0].size);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (categorySlug && productSlug) {
      fetchProductDetail();
    } else {
      console.error("CategorySlug or productSlug is undefined");
    }
  }, [categorySlug, productSlug]);

  const handleSizeChange = (value: string) => {
    setSelectedSize(value);
  };

  const handleQuantityChange = (newQty: number) => {
    setQuantity(newQty);
  };
  const controls = useAnimation(); // Create animation controls

  const [isAdded, setIsAdded] = useState(false); // State to track if the item is added to cart


  const handleAddToCart = () => {
    // Logic for adding to cart goes here
    setIsAdded(true); // Set added state to true

    // Show toast notification
    toast.success("Item added to cart!", {
      autoClose: 2000, // Automatically close after 2 seconds
      hideProgressBar: true, // Hide progress bar
      closeOnClick: true, // Allow closing on click
      pauseOnHover: false, // Don't pause on hover
    });
  };
  // Ensure return is correctly formatted
  return (
    <div className="product-detail flex flex-col lg:flex-row sm:flex-col md:flex-row">
      {product ? (
        <>
          {/* Breadcrumbs Section */}
          <div className="flex flex-col lg:basis-4/6 md:basis-3/5 sm:basis-full p-4">
            <nav className="flex mb-4">
              <ol className="flex space-x-2 text-gray-600">
                <li>
                  <a href="/" className="hover:text-blue-600">
                    Home
                  </a>
                </li>
                <li>/</li>
                <li>
                  <a
                    href={`/category/${categorySlug}`}
                    className="hover:text-blue-600"
                  >
                    {categorySlug}
                  </a>
                </li>
                <li>/</li>
                <li className="font-semibold text-gray-800">{product.name}</li>
              </ol>
            </nav>

            {/* Image Section */}
            <Image
              src={`http://localhost:5000/catalog/images/${product.image
                ?.split("/")
                .pop()}`}
              alt={product.name}
              width={256}
              height={270}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* Product Details Section */}
          <form className="flex flex-col basis-full lg:basis-2/6 md:basis-2/5 sm:basis-full p-4">
            <div className="mb-6 flex flex-col border-b pb-6 mt-8 dark:border-neutral-700">
              <h1 className="mb-2 text-3xl font-medium pb-6 dark:border-neutral-700">
                {product.name}
              </h1>
              <p className="border-b">Produk tersedia: {product.qty}</p>
              <dl className="mb-8">
                <dd className="flex flex-wrap gap-3">
                  <RadioGroup
                    value={selectedSize}
                    onValueChange={handleSizeChange}
                    label="Pilih Ukuran"
                    className="flex flex-col"
                  >
                    {product.sizes.map((size) => (
                      <Radio key={size.id} value={size.size}>
                        {size.size} - {size.price}
                      </Radio>
                    ))}
                  </RadioGroup>
                </dd>
              </dl>
              <Input
                type="text"
                label="Pesan Singkat"
                placeholder="Maks 25 karakter"
                className="pb-5"
              />
              <NumberInput
                initialQty={quantity}
                onQtyChange={handleQuantityChange}
              />
              {/* <div className="mr-auto w-auto p-2 text-lg text-black font-bold">
                <p className="ml-1 inline">
                  Price:{" "}
                  {selectedSize
                    ? product.sizes.find((size) => size.size === selectedSize)
                        ?.price
                    : "N/A"}
                </p>
              </div> */}
              {/* Number Input for Quantity */}
              <Button
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 
              ${isAdded ? "bg-green-500" : "bg-red-600"} 
              hover:bg-red-700 focus:outline-none`}
            onClick={handleAddToCart}
          >
            {isAdded ? (
              <Icon icon="ph:check-bold" className="text-white" /> // Check icon when added
            ) : (
              "Add" // Default text
            )}
          </Button>

          {/* Toast Container */}
          <ToastContainer />
            </div>
          </form>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetailPage;
