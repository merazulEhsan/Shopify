import ProductCard from "../ProductCard";

const FeaturedItems = () => {
  return (
    <div className="container m-auto pb-16">
      <h2 className="text-3xl font-bold text-gray-800 font-poppins mb-10 py-3 border-b  border-gray-300">
        Feature Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-8 lg:gap-x-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default FeaturedItems;
