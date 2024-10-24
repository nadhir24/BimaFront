import React from 'react';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, selectedSize, onSelectSize }) => {
  return (
    <div className="flex space-x-2 my-4">
      {sizes.map((size) => (
        <button
          key={size}
          className={`px-4 py-2 rounded-full ${selectedSize === size ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => onSelectSize(size)}>
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
