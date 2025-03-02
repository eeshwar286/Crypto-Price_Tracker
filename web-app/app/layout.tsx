import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider, RedirectToSignIn } from "@clerk/nextjs"; // Import ClerkProvider
import "./globals.css";
import Providers from "./providers";

// Load the Geist and Geist_Mono fonts
const geistSans = Geist({
  variable: "--font-geist-sans", // Define CSS custom property for font
  subsets: ["latin"], // Load Latin subset
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // Define CSS custom property for font
  subsets: ["latin"], // Load Latin subset
});

// Define the metadata for the application
export const metadata: Metadata = {
  title: "Crypto Price Tracker", // Title for the page
  description: "Track Live CryptoCurrency Prices", // Description for the page
};

// Root layout function
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Declare the type for children as React's node type
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} // Apply font styles and antialiased text
      >
        <ClerkProvider>
          {/* Render SignIn component to allow users to sign in or sign up */}
          <RedirectToSignIn />
          <Providers>{children}</Providers> {/* Wrap children with Providers for state management */}
        </ClerkProvider>
      </body>
    </html>
  );
}
