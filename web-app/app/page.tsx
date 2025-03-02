"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCryptoData } from "@/utils/fetchCrypto"; // Import the fetch function

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
}

export default function Home() {
  const [search, setSearch] = useState("");

  // React Query to fetch data from CoinGecko API
  const { data, error, isLoading, refetch } = useQuery<CryptoData[]>({
    queryKey: ["cryptoData"], // Query key
    queryFn: fetchCryptoData,  // Fetch function
    refetchOnWindowFocus: false, // Prevent refetch on window focus
  });

  const filteredData = data
    ? data.filter((crypto) =>
        crypto.name.toLowerCase().includes(search.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  // Function to trigger the refresh (refetch)
  const handleRefresh = () => {
    console.log("Refresh button clicked");
    refetch();  // Manually trigger refetch to get new data from the API
  };

  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Crypto Price Tracker</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search cryptocurrency"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full max-w-md"
      />

      {/* Refresh Button */}
      <button
        onClick={handleRefresh} // Trigger the refetch function on button click
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Refresh
      </button>

      {/* Loading and Error States */}
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error fetching data</p>}

      {/* Display Crypto Data */}
      <ul className="list-none w-full max-w-md">
        {filteredData.map((crypto) => (
          <li key={crypto.id} className="p-2 border-b">
            {crypto.name} ({crypto.symbol.toUpperCase()}):{" "}
            <strong>${crypto.current_price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </main>
  );
}
