import type { Metadata } from "next";


import "./globals.css";
import Header from "../components/Header";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Weather App",
  description: "see the weather",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers> {/* Wrap with Providers to ensure global context access */}
          <Header />
          <main>
           
            {children}</main>
        </Providers>
      </body>
    </html>
  );
}
