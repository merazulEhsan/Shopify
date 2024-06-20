import BestSellerCard from "./BestSellerCard";

const BestSellerProducts = () => {
  return (
    <div className="container m-auto pb-16">
      <h2 className="text-3xl font-bold text-gray-800 font-poppins mb-10 py-3 border-b  border-gray-300">
        Best Seller Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8">
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
      </div>
    </div>
  );
};

export default BestSellerProducts;
