import Image from "next/image";

const Ads = () => {
  return (
    <div className="container pb-16">
      <a href="#">
        <Image
          src="/assets/products/product3.jpg"
          alt="ads"
          className="w-full h-96"
          width={100}
          height={300}
          quality={100}
        />
      </a>
    </div>
  );
};

export default Ads;
