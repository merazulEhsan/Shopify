import Image from "next/image";

const ProductDescription = ({ details, chart }) => {
  return (
    <>
      <div className="pb-16 mt-10">
        {/* <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium text-xl">
          Product details
        </h3> */}
        <div className="w-full flex justify-between gap-6 space-y-5">
          <div className="text-gray-600 text-left">{details}</div>
          {chart && <Image width={500} height={500} src={chart} alt="chart" />}
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
