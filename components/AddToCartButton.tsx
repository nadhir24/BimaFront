import React from 'react';
import { Button } from '@nextui-org/react';

interface AddToCartButtonProps {
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} color="primary" size="lg">
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
