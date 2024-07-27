import Ads from "@/components/home/Ads";
import Bannar from "@/components/home/Bannar";
import BestSellerProducts from "@/components/home/BestSellerProducts";
import ExclusiveProducts from "@/components/home/ExclusiveProducts";
import Feature from "@/components/home/Feature";
import FeaturedItems from "@/components/home/FeaturedItems";
import OfferBanner from "@/components/home/OfferBanner";

const HomePage = () => {
  return (
    <div>
      <Bannar />
      <Feature />
      <ExclusiveProducts />
      <Ads />
      <FeaturedItems />
      <OfferBanner />
      <BestSellerProducts />
    </div>
  );
};

export default HomePage;
