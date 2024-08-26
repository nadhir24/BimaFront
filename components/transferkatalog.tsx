"use client";
import React, { useEffect } from 'react';
import axios from 'axios';

const TransferCatalog = () => {
  useEffect(() => {
    const fetchAndTransferCatalog = async () => {
      try {
        // Fetch data from the first endpoint
        const response = await axios.get('http://localhost:5000/catalog');
        const catalogData = response.data;

        // Post the fetched data to the second endpoint
        await axios.post('http://localhost:3000/katalog', catalogData);

        console.log('Catalog data successfully transferred!');
      } catch (error) {
        console.error('Error fetching or posting data:', error);
      }
    };

    fetchAndTransferCatalog();
  }, []);

  return <p>Transferring catalog data...</p>;
};

export default TransferCatalog;
