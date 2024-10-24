// Komponen CountryList.js
import React from "react";

const CountryList = ({ onSelect }) => {
  const countries = [
    { name: "Indonesia", code: "+62" },
    { name: "Australia", code: "+61" },
    // Tambahkan negara lain di sini sesuai kebutuhan
  ];

  const handleSelectChange = (e) => {
    const selectedCountryCode = e.target.value;
    onSelect(selectedCountryCode); // Panggil fungsi onSelect dengan kode negara yang dipilih
  };

  return (
    <select onChange={handleSelectChange}>
      {countries.map((country, index) => (
        <option key={index} value={country.code}>
          {`${country.name} (${country.code})`}
        </option>
      ))}
    </select>
  );
};

export default CountryList;