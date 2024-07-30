import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch data based on the ID or Slug
  // Misal, menggunakan fungsi fetch atau axios
  const fetchData = async () => {
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();
    // Do something with the data
  };

  return (
    <div>
      <h1>Product: {id}</h1>
      {/* Render informasi produk di sini */}
    </div>
  );
};

export default ProductPage;
