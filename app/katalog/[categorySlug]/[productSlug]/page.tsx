"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { RadioGroup, Radio, Input, Button, Spinner } from "@nextui-org/react";
import { toast } from "react-toastify";

interface Size {
  id: number;
  size: string;
  price: string;
}

interface Catalog {
  id: number;
  name: string;
  image: string | null;
  sizes: Size[];
  qty: string;
  description: string;
}

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Catalog | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null); // Store the whole size object, not just the size string
  const params = useParams();
  const categorySlug = params.categorySlug as string;
  const productSlug = Array.isArray(params.productSlug)
    ? params.productSlug.join("/")
    : params.productSlug;

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get<Catalog>(
          `http://localhost:5000/catalog/${categorySlug}/${productSlug}`
        );
        setProduct(response.data);
        // Default selected size
        if (response.data.sizes.length > 0) {
          setSelectedSize(response.data.sizes[0]);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (categorySlug && productSlug) {
      fetchProductDetail();
    }
  }, [categorySlug, productSlug]);

  const handleSizeChange = (sizeId: string) => {
    const selected = product?.sizes.find((size) => size.id === parseInt(sizeId));
    setSelectedSize(selected || null);
  };

  const handleAddToCart = async () => {
    if (!selectedSize) {
      toast.error("Please select a size.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/cart/add", {
        userId: 1, // Replace with actual logged-in user ID
        catalogId: product?.id, // Product ID
        sizeId: selectedSize.id, // Selected size ID
        quantity: 1, // You can get this value from user input if needed
      });

      toast.success("Item added to cart!", {
        autoClose: 2000,
        hideProgressBar: true,
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
      toast.error("Failed to add item to cart.");
    }
  };

  return (
    <div className="product-detail flex flex-col lg:flex-row sm:flex-col md:flex-row">
      {product ? (
        <>
          {/* Left Side - Image Section */}
          <div className="flex flex-col lg:basis-4/6 md:basis-3/5 sm:basis-full p-4">
            <nav className="flex mb-4">
              <ol className="flex space-x-2 text-gray-600">
                <li>
                  <a href="/" className="hover:text-blue-600">Home</a>
                </li>
                <li>/</li>
                <li>
                  <a href={`/category/${categorySlug}`} className="hover:text-blue-600">
                    {categorySlug}
                  </a>
                </li>
                <li>/</li>
                <li className="font-semibold text-gray-800">{product.name}</li>
              </ol>
            </nav>

            {/* Product Image */}
            <Image
              src={`http://localhost:5000/catalog/images/${product.image?.split("/").pop()}`}
              alt={product.name}
              width={256}
              height={270}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* Right Side - Product Details */}
          <form className="flex flex-col lg:basis-2/6 md:basis-2/5 sm:basis-full p-4">
            <div className="mb-6 border-b pb-6 mt-8">
              <h1 className="text-3xl font-medium">{product.name}</h1>
              <p className="mt-2 text-gray-700">{product.description}</p>
              <p className="mt-4">Produk tersedia: {product.qty}</p>

              {/* Size Selection */}
              <RadioGroup
                value={selectedSize?.id.toString() || ""}
                onValueChange={handleSizeChange}
                label="Pilih Ukuran"
                className="mt-4"
              >
                {product.sizes.map((size) => (
                  <Radio key={size.id} value={size.id.toString()}>
                    {size.size} - {size.price}
                  </Radio>
                ))}
              </RadioGroup>

              {/* Short Message Input */}
              <Input type="text" label="Pesan Singkat" placeholder="Maks 25 karakter" className="mt-4" />

              {/* Add to Cart Button */}
              <Button onClick={handleAddToCart} className="mt-6">
                Tambah ke Keranjang
              </Button>
            </div>
          </form>
        </>
      ) : (
        <Spinner color="primary" />
      )}
    </div>
  );
};

export default ProductDetailPage;
