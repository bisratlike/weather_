import type { Metadata } from "next";

import "./globals.css";
import Header from "../components/Header";


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
    <div>
      <Header/>
      {children}
    </div>
  );
}
