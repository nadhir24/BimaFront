"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
interface CatalogItem {
  id: number;
  name: string;
  image?: string;
}
const Catalog = () => {
  const [catalog, setCatalog] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const response = await axios.get<CatalogItem[]>(
          "http://localhost:5000/uploads/catalog_images/6eb7946a-0cea-4550-8ceb-35e4b10f68eb.jpg"
        );
        setCatalog(response.data);
      } catch (err) {
        err;
      }
    };

    fetchCatalog();
  }, []);

  return (
    <div>
      {catalog.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          {item.image && (
            <img src={item.image} alt={item.name} style={{ width: "100px" }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Catalog;
