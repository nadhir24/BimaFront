import React from "react";
import { useRouter } from "next/router";

type DetailKatalogPageProps = {
  params: {
    slug: string[];
  };
};

const DetailKatalogPage: React.FC<DetailKatalogPageProps> = ({ params }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>ini adalah {slug[0]}</h2>
      <h2>jenis nya {slug[1]}</h2>
    </div>
  );
};

export async function generateStaticParams() {
  // Fetch or define the list of paths to pre-render
  const paths = [
    { slug: ["example1", "type1"] },
    { slug: ["example2", "type2"] },
  ];

  return paths.map((path) => ({
    params: { slug: path.slug },
  }));
}

export default DetailKatalogPage;
