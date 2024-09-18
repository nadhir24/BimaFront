import React from 'react';

interface ProductImageProps {
  images: string[];
  selectedImage: number;
  onSelectImage: (index: number) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({ images, selectedImage, onSelectImage }) => {
  return (
    <div className="relative">
      <img src={images[selectedImage]} alt="Product Image" className="w-full h-auto object-cover" />
      <div className="absolute bottom-0 left-0 flex space-x-2">
        {images.map((image, index) => (
          <button key={index} onClick={() => onSelectImage(index)} className={`w-12 h-12 ${selectedImage === index ? 'ring-2 ring-blue-500' : ''}`}>
            <img src={image} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
