import React from 'react';
import { Badge } from '@nextui-org/react';

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors, selectedColor, onSelectColor }) => {
  return (
    <div className="flex space-x-4 my-4">
      {colors.map((color) => (
        <Badge
          key={color}
          color={selectedColor === color ? 'primary' : 'default'}
          onClick={() => onSelectColor(color)}          
          className="cursor-pointer">
          {color}
        </Badge>
      ))}
    </div>
  );
};

export default ColorSelector;
