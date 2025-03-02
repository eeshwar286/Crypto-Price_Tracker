// utils/fetchCrypto.ts
import axios from "axios";

export async function fetchCryptoData() {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc", // Sorting by market cap in descending order (most valuable first)
        per_page: 100, // You can adjust this to get more or fewer cryptocurrencies
        page: 1, // You can paginate if needed
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching crypto data", error);
    throw new Error("Error fetching crypto data");
  }
}
