"use client";
import { useState, useEffect } from "react";
import { Card as NextUICard, Divider, Image, Modal, Button } from "@nextui-org/react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  category: string;
  size: string;
  qty: number;
  isEnabled: boolean;
  image: string;
  price: number;
}

const ProductDetailModal: React.FC<{ product: Product | null, onClose: () => void }> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <Modal isOpen={!!product} onClose={onClose} size="xl">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-4">
            <Image src={product.image} alt={product.name} className="w-full" />
          </div>
          <div className="md:w-1/2 pl-4">
            <h1 className="text-3xl font-bold mb-2 text-yellow-600">{product.name}</h1>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400">☆☆☆☆☆</span>
              <span className="ml-2">(0 review)</span>
            </div>
            <p className="text-2xl font-bold mb-4 text-yellow-600">Rp {product.price.toLocaleString()}</p>
            <div className="mb-4">
              <label className="block mb-2">SIZE</label>
              <select className="w-full bg-gray-800 p-2 rounded text-white">
                <option>{product.size}</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">CAKE WORDING</label>
              <input type="text" placeholder="Max. 25 characters" className="w-full bg-gray-800 p-2 rounded text-white" />
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="bg-gray-800 px-4 py-2 rounded">-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="bg-gray-800 px-4 py-2 rounded">+</button>
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
    </Modal>
  );
};

const Placement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filters, setFilters] = useState<{
    category: string;
    priceRange: [number, number];
  }>({
    category: "",
    priceRange: [0, 100],
  });

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const response = await axios.get("http://localhost:5000/catalog/findall");
        const catalogData = response.data.map((product: Product) => ({
          ...product,
          image: `http://localhost:5000/catalog/${product.image.split("/").pop()}`,
        }));
        setProducts(catalogData);
      } catch (error) {
        console.error("Error fetching catalog data:", error);
      }
    };

    fetchCatalog();
  }, []);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleFilterChange = (
    filterName: string,
    value: string | [number, number]
  ) => {
    setFilters({ ...filters, [filterName]: value });
  };

  const filteredProducts = products.filter((product) => {
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    const [minPrice, maxPrice] = filters.priceRange;
    if (product.price < minPrice || product.price > maxPrice) {
      return false;
    }

    return true;
  });

  return (
    <>
      <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 pt-12">
        <div className="col-span-1">{/* Filter section */}</div>

        <div className="grid col-span-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-24">
          {filteredProducts.map((product) => (
            <NextUICard
              key={product.id}
              className="w-auto m-4 flex flex-col cursor-pointer"
              style={{ borderRadius: "20px" }}
              onClick={() => handleCardClick(product)}
            >
              <div className="w-full h-full object-cover">
                <Image src={product.image} alt={product.name} />
              </div>
              <Divider />
              <div className="flex-grow flex flex-col justify-between p-4">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.qty} items sold</p>
              </div>
            </NextUICard>
          ))}
        </div>
      </div>
      <ProductDetailModal product={selectedProduct} onClose={handleCloseModal} />
    </>
  );
};

export default ProductDetailModal;