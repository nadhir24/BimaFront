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
}

export default function FilterableCatalog() {
  const [filter, setFilter] = useState("");
  const [catalogs, setCatalogs] = useState<Catalog[]>([]);
  const [filteredCatalogs, setFilteredCatalogs] = useState<Catalog[]>(catalogs);

  // Mengambil data katalog dari API
  useEffect(() => {
    const fetchCatalogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/catalog/findall"
        );
        setCatalogs(response.data);
        setFilteredCatalogs(response.data); // Tampilkan semua katalog pada awal
      } catch (error) {
        console.error("Error fetching catalog data:", error);
      }
    };

    fetchCatalogs();
  }, []);

  // Mengatur perubahan filter
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setFilter(searchValue);

    const filtered = catalogs.filter((catalog) =>
      catalog.name.toLowerCase().includes(searchValue)
    );
    setFilteredCatalogs(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Input pencarian */}
      <Input
        placeholder="Search..."
        value={filter}
        onChange={handleFilterChange}
      />
      <Spacer y={2} />

      {/* Grid Katalog */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCatalogs.map((catalog, index) => (
          <Card key={index} className="shadow-lg">
            <CardBody>
              {/* Pastikan untuk memanggil gambar dengan URL yang benar */}
              <Image
                src={`http://localhost:5000/catalog/images/${catalog.image
                  ?.split("/")
                  .pop()}`} // Mendapatkan nama file gambar
                alt={catalog.name}
                width={256}
                height={270}
                quality={75}
                className="rounded-xl"
              />

              <div className="mt-4 justify-between align-middle">
                <div>
                  <h4 className="font-bold text-lg">{catalog.name}</h4>
                  <p className="text-gray-600">{catalog.category}</p>
                </div>
                <p className="mt-4 justify-between align-middle">mulai dari</p>
                <h1 className="font-semibold text-xl text-indigo-600">
                  {catalog.sizes[0]?.price || "N/A"}
                </h1>
              </div>
              <h1>hello</h1>
            </CardBody>
            <CardFooter>
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );``
}
