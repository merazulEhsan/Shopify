import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
config.autoAddCss = false;

export const metadata = {
  title: "Shopify - Home",
  description: "Digital Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
