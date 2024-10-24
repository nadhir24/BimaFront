"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
interface HoverPopoverProps {
  label: string;
  href: string;
}

export default function HoverPopover({ label, href }: HoverPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter}>
      <Popover
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        placement="bottom"
        showArrow={true}
      >
        <PopoverTrigger>
          <p className="cursor-pointer">{label}</p>
        </PopoverTrigger>
        <PopoverContent
          className="relative rounded-md"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          
            <div className="px-4 py-2">
              <Link href={href} className="text-blue-400 mt-2 block">
                <div className="text-small font-bold">{label} Content</div>
                <div className="text-tiny">kue tradisional.</div>
                <div className="text-tiny">kue tradisional.</div>
              </Link>
            </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
