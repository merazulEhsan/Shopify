import Image from "next/image";

const ProductDescription = ({ details, chart }) => {
  return (
    <>
      <div className="pb-16 mt-10">
        <div className="w-full flex justify-between gap-6 space-y-5">
          <div className="text-gray-600 dark:text-gray-300  text-left">
            {details}
          </div>
          {chart && <Image width={500} height={500} src={chart} alt="chart" />}
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
