"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import Link from "next/link";
import { SunCartIcon } from "@/components/icons"; // Adjust import path accordingly
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

interface HoverCartPopoverProps {
  label: string;
  href: string;
}

interface Size {
  size: string;
  price: string;
}

interface CartItem {
  id: number;
  name: string;
  image: string;
  sizes: Size[];
  qty: number;
  price: string;
}

export default function HoverCartPopover({ label, href }: HoverCartPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cart"); // Backend endpoint to fetch cart items
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="relative">
      <Popover isOpen={isOpen} onOpenChange={setIsOpen} placement="bottom" showArrow={true}>
        <PopoverTrigger>
          <div className="cursor-pointer" onMouseEnter={() => setIsOpen(true)}>
            <SunCartIcon />
          </div>
        </PopoverTrigger>
        <PopoverContent className="relative rounded-md w-[300px] h-[400px] overflow-y-auto">
          <ScrollShadow className="w-full h-full">
            <div className="px-4 py-2">
              <div className="text-small font-bold">{label} Content</div>
              {cartItems.map((item) => (
                <div key={item.id} className="text-tiny flex items-center mt-2">
                  <Image
                    src={`http://localhost:5000/catalog/images/${item.image}`}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-xl"
                  />
                  <div className="ml-2">
                    <div className="font-bold">{item.name}</div>
                    <div className="text-gray-800 mt-1">Quantity: {item.qty}</div>
                    <div className="text-gray-800">Price: {item.price}</div>
                  </div>
                </div>
              ))}
              <Link href={href} className="text-blue-400 mt-2 block">
                Go to {label}
              </Link>
            </div>
          </ScrollShadow>
        </PopoverContent>
      </Popover>
    </div>
  );
}
