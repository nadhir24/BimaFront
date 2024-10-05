"use client";
import { useEffect, useState } from "react";
import {
  Input,
  Card,
  Button,
  Spacer,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Size {
  size: string;
  price: string;
}

interface Catalog {
  id: number;
  name: string;
  category: string;
  image: string | null;
  sizes: Size[];
  qty: string;
  slug: string; // Ensure slug is included in the Catalog interface
}

export default function FilterableCatalog() {
  const [filter, setFilter] = useState("");
  const [catalogs, setCatalogs] = useState<Catalog[]>([]);
  const [filteredCatalogs, setFilteredCatalogs] = useState<Catalog[]>(catalogs);
  const router = useRouter(); // For navigation

  // Fetch the catalog data from the API
  useEffect(() => {
    const fetchCatalogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/catalog/findall"
        );
        setCatalogs(response.data);
        setFilteredCatalogs(response.data); // Show all catalogs initially
      } catch (error) {
        console.error("Error fetching catalog data:", error);
      }
    };

    fetchCatalogs();
  }, []);

  // Handle filter changes
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setFilter(searchValue);

    const filtered = catalogs.filter((catalog) =>
      catalog.name.toLowerCase().includes(searchValue)
    );
    setFilteredCatalogs(filtered);
  };

  // Function to navigate to the product detail page with category and slug
  const viewProductDetails = (category: string, slug: string) => {
    router.push(`/katalog/${category}/${slug}`); // Navigate to the product detail page
  };

  return (
    <div className="container mx-auto p-4">
      <Input
        placeholder="Search..."
        value={filter}
        onChange={handleFilterChange}
      />
      <Spacer y={2} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCatalogs.map((catalog, index) => (
          <Card key={index} className="shadow-lg">
            <CardBody>
              <Image
                src={`http://localhost:5000/catalog/images/${catalog.image?.split("/").pop()}`}
                alt={catalog.name}
                width={256}
                height={270}
                quality={75}
                className="rounded-xl"
              />

              <div className="mt-4">
                <h4 className="font-bold text-lg">{catalog.name}</h4>
                <p className="text-gray-600">{catalog.category}</p>
                <p>Starting from {catalog.sizes[0]?.price || "N/A"}</p>
              </div>
            </CardBody>

            <CardFooter>
              <Button
                className="w-full"
                onPress={() => viewProductDetails(catalog.category, catalog.slug)} // Pass category and slug to navigate
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
