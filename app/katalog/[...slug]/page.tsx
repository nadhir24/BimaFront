'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '@/types/product';
import Placement from '@/components/placement';
import ProductDetailModal from '@/components/productModal';

export default function KatalogPage() {
  const params = useParams();
  const slug = params.slug as string[];
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (slug && slug.length === 2) {
        const [name, category] = slug;
        try {
          const response = await axios.get(`http://localhost:5000/catalog/find/${name}/${category}`);
          setProduct(response.data);
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      }
    };

    fetchProduct();
  }, [slug]);

  if (slug && slug.length === 2 && product) {
    return <ProductDetailModal product={product} onClose={() => window.history.back()} />;
  }

  return <Placement />;
}