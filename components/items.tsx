"use client";
import React, { useState } from "react";
import { Image } from "@nextui-org/react"; // Import useClient

const Slideshow: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ position: "relative", width: "300px", height: "200px" }}>
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
        }}
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
        }}
      >
        Next
      </button>
      <Image
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        width={300}
        height={200}
      />
    </div>
  );
};

export default Slideshow;

/* <p>ada breadcrumbs</p>
<p>ada foto</p>
<p>ada slideshow</p>
<p>item name</p>
<p>item price</p>
<p>item price</p>
<p>item tulisan kalo cake</p>
<p>item quantity</p>
<p>itemtambahkeranjang /beli sekarang</p>
<div>
  <p>informasi</p>
  <p>details/panduan</p>
</div>
<div>
  <p>maybe you like</p>
  <p>slideshow</p>
</div>
<div>
  <p>footer deh</p>
</div> */
