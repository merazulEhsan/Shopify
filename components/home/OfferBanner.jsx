import Image from "next/image";

const OfferBanner = () => {
  return (
    <div className="flex container gap-x-5 my-6  ">
      <div className="flex-initial w-full rounded-lg overflow-clip">
        <Image
          src="/assets/banner1.jpg"
          className="transition duration-300 hover:scale-105"
          alt="Banner 1"
          width={500}
          height={500}
        />
      </div>
      <div className=" w-full rounded-lg  overflow-clip ">
        <Image
          src="/assets/banner2.jpg"
          className="transition duration-300 hover:scale-105"
          alt="Banner 1"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default OfferBanner;
