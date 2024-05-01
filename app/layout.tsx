import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeRegistry from "../lib/ThemeRegistry";

export const metadata: Metadata = {
  title: "Jostein Hauge",
  description: "Fullstack developer from Oslo, Norway",
};

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en">
     <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}

export default RootLayout;