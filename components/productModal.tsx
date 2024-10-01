import React, { useState } from "react";
import {
  Modal,
  Button,
  Image,
  ModalContent,
  ModalBody,
} from "@nextui-org/react";
import { Product } from "@/types/product";
interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <Modal isOpen={!!product} onClose={onClose} size="2xl">
      <ModalContent>
        <ModalBody>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pr-4">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full"
              />
            </div>
            <div className="md:w-1/2 pl-4">
              <h1 className="text-3xl font-bold mb-2 text-yellow-600">
                {product.name}
              </h1>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400">☆☆☆☆☆</span>
                <span className="ml-2">(0 review)</span>
              </div>
              <p className="text-2xl font-bold mb-4 text-yellow-600">
                Rp {product.price.toLocaleString()}
              </p>
              <div className="mb-4">
                <label className="block mb-2">SIZE</label>
                <select className="w-full bg-gray-800 p-2 rounded text-white">
                  <option>{product.size}</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">CAKE WORDING</label>
                <input
                  type="text"
                  placeholder="Max. 25 characters"
                  className="w-full bg-gray-800 p-2 rounded text-white"
                />
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-800 px-4 py-2 rounded"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-800 px-4 py-2 rounded"
                >
                  +
                </button>
                <Button color="warning">Add to cart</Button>
                <Button color="warning">Buy now</Button>
              </div>
              <button className="text-white mb-4">♡ Add to wishlist</button>
              <div>
                <button className="font-bold mr-4">MAIN</button>
                <button>SHARE</button>
              </div>
              <p className="mt-4">Cake Wording: Max. 25 characters</p>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductDetailModal;
