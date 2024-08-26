"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
import { SunCartIcon } from "@/components/icons"; // Ensure this path is correct
import { ScrollShadow } from "@nextui-org/scroll-shadow";

interface HoverCartPopoverProps {
  label: string;
  href: string;
}

export default function HoverCartPopover({
  label,
  href,
}: HoverCartPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

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
          {/* Scrollable content inside PopoverContent */}
          <ScrollShadow className="w-full h-full">
            <div className="px-4 py-2">
              <div className="text-small font-bold">{label} Content</div>
              {[...Array(7)].map((_, i) => (
                <div key={i} className="text-tiny flex items-center mt-2">
                  {/* Example Image */}
                  <img
                    src="/path-to-your-image.jpg" // Replace with your image path
                    alt={`Example Item ${i + 1}`}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="ml-2">
                    <div className="font-bold">Item Name {i + 1}</div>
                    <div className="text-gray-600">Description of the item.</div>
                    <div className="text-gray-800 mt-1">
                      Quantity: <span className="font-semibold">1</span>
                    </div>
                    <div className="text-gray-800">
                      Price: <span className="font-semibold">Rp120.000</span>
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
