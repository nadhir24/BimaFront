"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import Link from "next/link";
import { SunCartIcon } from "@/components/icons"; // Ensure this path is correct
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { useState, useEffect } from "react";
import axios from "axios";
interface HoverCartPopoverProps {
  label: string;
  href: string;
}

export default function HoverCartPopover({
  label,
  href,
}: HoverCartPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // Fungsi untuk mengambil data keranjang dari backend
  const fetchCartItems = async () => {
    try {
      const response = await axios.get("/api/cart"); // Ganti dengan endpoint backend Anda
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  // Panggil fetchCartItems saat komponen dimuat
  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="relative">
      <Popover
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        placement="bottom"
        showArrow={true}
      >
        <PopoverTrigger>
          <div className="cursor-pointer" onMouseEnter={handleMouseEnter}>
            <SunCartIcon />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="relative rounded-md w-[300px] h-[400px] overflow-y-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ScrollShadow className="w-full h-full">
            <div className="px-4 py-2">
              <div className="text-small font-bold">{label} Content</div>
              {cartItems.map((item, i) => (
                <div key={i} className="text-tiny flex items-center mt-2">
                  <img
                    src={item.imageUrl} // Ganti dengan field gambar dari backend
                    alt={`Item ${i + 1}`}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="ml-2">
                    <div className="font-bold">{item.name}</div>
                    <div className="text-gray-600">{item.description}</div>
                    <div className="text-gray-800 mt-1">
                      Quantity: <span className="font-semibold">{item.quantity}</span>
                    </div>
                    <div className="text-gray-800">
                      Price: <span className="font-semibold">Rp{item.price}</span>
                    </div>
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
