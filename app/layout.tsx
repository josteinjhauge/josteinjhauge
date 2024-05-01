import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeRegistry from "../lib/ThemeRegistry";

export const metadata: Metadata = {
  title: "Jostein Hauge",
  description: "Fullstack developer from Oslo, Norway",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Navbar />
          {children}
          {/* <Analytics /> */}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
