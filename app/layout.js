import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { dbConnect } from "@/services/dbConnection";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
config.autoAddCss = false;

export const metadata = {
  title: "Shopify - Home",
  description: "Digital Shop",
};

export default async function RootLayout({ children }) {
  await dbConnect();

  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />

        <Toaster position="top-right" richColors expand={false} />
      </body>
    </html>
  );
}
