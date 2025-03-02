# Crypto Price Tracker

## Setup Instructions

### Running the Web App

To run the Next.js application:

1. Clone the repository.
2. Navigate to the `web-app` directory.
3. Run the following command:

```bash
cd web-app
npm install
npm run dev

Visit http://localhost:3000 to view the application in the browser.

API Integration
The application fetches live cryptocurrency prices from the CoinGecko API. Here’s how the data is fetched:

The application uses axios to send a GET request to https://api.coingecko.com/api/v3/coins/markets.
The vs_currency=usd parameter ensures the prices are fetched in USD.
The order=market_cap_desc sorts the cryptocurrencies by market capitalization.
State Management
We use React Query for state management. React Query helps us to manage the server state efficiently by caching and refetching the data as needed.

Benefits of React Query:
Data Caching: It stores fetched data in the cache, reducing the need for repeated API calls.
Automatic Refetching: It can automatically refetch data after a specified interval or when a user interacts with the app.
Error Handling: React Query simplifies handling API errors and retries.
Challenges & Solutions
Challenge: Handling CORS errors while fetching data in the browser.

Solution: Ensure the API server supports CORS or use a proxy to handle the requests.
Challenge: Refreshing the data on the frontend without overloading the server.

Solution: Use React Query’s refetch function to control when data is updated, and avoid over-fetching.

Conclusion
This project provides a simple yet effective way to track cryptocurrency prices in real-time. The state management with React Query and the API integration with CoinGecko ensures the app is both efficient and scalable.
