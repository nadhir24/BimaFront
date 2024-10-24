import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import type { SVGProps } from "react";

interface NumberInputProps {
  initialQty: number;
  onQtyChange: (quantity: number) => void;
}

function NumberInput({ initialQty, onQtyChange }: NumberInputProps) {
  const [qty, setQty] = useState(initialQty);

  const increment = () => {
    const newQty = qty + 1;
    setQty(newQty);
    onQtyChange(newQty);
  };

  const decrement = () => {
    const newQty = qty > 0 ? qty - 1 : 0;
    setQty(newQty);
    onQtyChange(newQty);
  };

  return (
    <div className="flex items-center pb-2">
      <Button
        size="md"
        variant="ghost"
        onClick={decrement}
        disabled={qty === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
        >
          <path
            fill="#d41616"
            d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12"
          ></path>
        </svg>{" "}
      </Button>
      <Input
        type="number"
        value={qty.toString()} // Convert number to string
        onChange={(e) => {
          const value = Math.max(0, parseInt(e.target.value) || 0);
          setQty(value);
          onQtyChange(value);
        }}
        className="mx-2 w-16 text-center"
      />
      <Button size="md" variant="ghost" onClick={increment}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="0.88em"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path
            fill="#d41616"
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256z"
          ></path>
        </svg>
      </Button>
    </div>
  );
}

export default NumberInput;
