import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { dbConnect } from "@/services/dbConnection";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

import { getWishlist } from "@/data/queries";
import { useAuth } from "./hooks/useAuth";
import { ThemeProvider } from "./providers/ThemeProvider";
config.autoAddCss = false;

export const metadata = {
  title: "Shopify - Home",
  description: "Digital Shop",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  const { userId } = await useAuth();
  const wishlist = await getWishlist(userId);

  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header wishlist={wishlist} />

          <Navbar />
          {children}
          <Footer />
          <Toaster position="bottom-right" richColors expand={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
