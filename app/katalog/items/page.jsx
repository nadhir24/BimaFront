'use client'
import React, { useState, useEffect } from "react";
import Tombol from "@/components/button"; // Import Tombol component
import Image from "next/image";
import CustomChip from "@/components/chip";

export default function ItemsPage() {
  const [loading, setLoading] = useState(false);
  const [isSizeSelected, setIsSizeSelected] = useState(false); // State untuk menentukan apakah ukuran kue sudah dipilih
  const [buttonVariant, setButtonVariant] = useState("ghost"); // State untuk mengatur variant tombol

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleSizeSelect = () => {
    setIsSizeSelected(true); // Set state menjadi true saat tombol dipilih
  };

  useEffect(() => {
    // Gunakan useEffect untuk memperbarui variant tombol
    if (isSizeSelected) {
      setButtonVariant("solid");
    } else {
      setButtonVariant("ghost");
    }
  }, [isSizeSelected]);

  return (
    <div className="container mx-auto flex">
      <div className="flex-1">
        <div className="bg-blue-200 p-4 m-2">
          <Image
            src="https://img.freepik.com/free-photo/beautiful-view-sunset-sea_23-2148019892.jpg?t=st=1713613744~exp=1713617344~hmac=cd1da20771a867dcdba6fdc32a12293d7733f3fce1ed5b66edc2e8e9a1446a40&w=740"
            alt="sunset"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        <CustomChip setButtonVariant={setButtonVariant} /> {/* Tambahkan prop setButtonVariant */}
        <Tombol
          size="sm"
          label="Beli"
          variant={buttonVariant} // Gunakan buttonVariant sebagai variant tombol
          isLoading={loading}
          onClick={handleClick}
          disabled={!isSizeSelected}
        />
      </div>
    </div>
  );
}
