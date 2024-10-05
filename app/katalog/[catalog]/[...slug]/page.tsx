"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Card, RadioGroup, Radio, Input } from "@nextui-org/react";

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
  }

  const params = useParams();
  const category = params.catalog as string;
  const slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;

  const [product, setProduct] = useState<Catalog | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");

  console.log("Category:", category);
  console.log("Slug:", slug);

  useEffect(() => {
    if (category && slug) {
      const fetchProductDetail = async () => {
        try {
          const response = await axios.get<Catalog>(
            `http://localhost:5000/catalog/${category}/${slug}`
          );
          setProduct(response.data);
          if (response.data.sizes.length > 0) {
            setSelectedSize(response.data.sizes[0].size);
          }
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };

      fetchProductDetail();
    } else {
      console.error("Category or slug is undefined");
    }
  }, [slug, category]);

  const handleSizeChange = (value: string) => {
    setSelectedSize(value);
  };

  return (
    <div className="product-detail flex flex-col lg:flex-row">
      {product ? (
        <>
          {/* Image Section */}
          <div className="flex basis-full lg:basis-4/6 p-4">
            <Image
              src={`http://localhost:5000/catalog/images/${product.image?.split("/").pop()}`}
              alt={product.name}
              width={256}
              height={270}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* Product Details Section */}
          <form className="flex flex-col basis-full lg:basis-2/6 p-4">
            <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
              <h1 className="mb-2 text-5xl font-medium border-b pb-6 dark:border-neutral-700">
                {product.name}
              </h1>
              <dl className="mb-8">
                <dd className="flex flex-wrap gap-3">
                  <RadioGroup
                    value={selectedSize}
                    onValueChange={handleSizeChange}
                    label="Select Size"
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
              <div className="mr-auto w-auto p-2 text-lg text-black font-bold ">
                <p className="ml-1 inline">
                  Price:{" "}
                  {selectedSize
                    ? product.sizes.find((size) => size.size === selectedSize)
                        ?.price
                    : "N/A"}
                </p>
              </div>

              <Input
                isReadOnly
                type="tulisan"
                label="tulisan"
                variant="bordered"
                defaultValue="Hbd kak sari"
                className="max-w-xs"
              />
            </div>

            <div className="prose mb-6 text-sm leading-tight dark:text-white/[60%]">
              Category: {product.category}
            </div>
            <div className="prose mb-6 text-sm leading-tight dark:text-white/[60%]">
              Quantity Available: {product.qty}
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
