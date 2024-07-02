import BreadCrumb from "@/components/BreadCrumb";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/data/queries";
import { LayoutGrid, LayoutList } from "lucide-react";

const ShopPage = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <BreadCrumb value="Shop" />

      <div className="container grid grid-cols-12 gap-6 pt-4 pb-16">
        <div className="md:col-span-3 col-span-full dark:bg-transparent pb-6 rounded ">
          <div className="divide-y divide-gray-200 space-y-5 p-4">
            <div className="">
              <h3 className="text-xl text-gray-800 dark:text-gray-300 mb-3 uppercase font-medium border-b border-gray-200">
                Categories
              </h3>
              <div className="space-y-2">
                <div className="flex items-center ">
                  <input
                    type="checkbox"
                    name="cat-1"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 dark:text-gray-300  ml-3 cusror-pointer"
                  >
                    Accessories
                  </label>
                  <div className="ml-auto text-gray-600 dark:text-gray-300 text-sm">
                    (15)
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="cat-2"
                    id="cat-2"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-2"
                    className="text-gray-600 dark:text-gray-300 ml-3 cusror-pointer"
                  >
                    T-shirt
                  </label>
                  <div className="ml-auto text-gray-600 dark:text-gray-300 text-sm">
                    (9)
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="cat-3"
                    id="cat-3"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-3"
                    className="text-gray-600 dark:text-gray-300 ml-3 cusror-pointer"
                  >
                    Shoe
                  </label>
                  <div className="ml-auto text-gray-600 dark:text-gray-300 text-sm">
                    (21)
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="cat-4"
                    id="cat-4"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-4"
                    className="text-gray-600 dark:text-gray-300 ml-3 cusror-pointer"
                  >
                    Slipers & Sandels
                  </label>
                  <div className="ml-auto text-gray-600 dark:text-gray-300 text-sm">
                    (10)
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 dark:text-gray-300 mb-3 uppercase font-medium">
                Price
              </h3>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  name="min"
                  id="min"
                  className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 dark:text-gray-300 shadow-sm"
                  placeholder="min"
                />
                <span className="mx-3 text-gray-500">-</span>
                <input
                  type="text"
                  name="max"
                  id="max"
                  className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 dark:text-gray-300 shadow-sm"
                  placeholder="max"
                />
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 dark:text-gray-300 mb-3 uppercase font-medium">
                size
              </h3>
              <div className="flex items-center gap-2">
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-xs"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-xs"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 dark:text-gray-300"
                  >
                    XS
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-sm"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-sm"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 dark:text-gray-300"
                  >
                    S
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-m"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-m"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 dark:text-gray-300"
                  >
                    M
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-l"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-l"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 dark:text-gray-300"
                  >
                    L
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-xl"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-xl"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 dark:text-gray-300"
                  >
                    XL
                  </label>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <h3 className="text-xl text-gray-800 dark:text-gray-300 mb-3 uppercase font-medium border-b border-gray-200">
                Reset Filter
              </h3>
              <button
                className="bg-black text-white rounded border border-black  px-8 py-3 font-medium 
                     hover:bg-transparent hover:text-black transition ease-linear duration-400"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-9 col-span-full ">
          <div className=" flex justify-between">
            <div className="space-x-2 mb-10 flex items-center cursor-pointer">
              <span className="border border-gray-300 p-1.5">
                <LayoutGrid className="text-gray-500 dark:text-gray-300" />
              </span>
              <span className="border border-gray-300 p-1.5">
                <LayoutList className="text-gray-500 dark:text-gray-300" />
              </span>

              <span className="text-gray-600 dark:text-gray-300 pl-4">
                Showing 1–12 of 37 results
              </span>
            </div>
            <div>
              <button
                className="bg-gray-100 text-black rounded border border-gray-300  px-8 py-1.5 font-medium 
                     hover:bg-transparent hover:text-black transition ease-linear duration-400"
              >
                Sorting
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 ">
            {allProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
