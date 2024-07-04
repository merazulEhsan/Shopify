import ProductDescription from "@/app/details/_components/ProductDescription";
import ProductDetails from "@/app/details/_components/ProductDetails";
import RelatedProduct from "@/app/details/_components/RelatedProduct";
import Review from "@/app/details/_components/Review";
import BreadCrumb from "@/components/BreadCrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductById } from "@/data/queries";

const ProductDetailsPage = async ({ params: { id } }) => {
  const product = await getProductById(id);

  return (
    <>
      <BreadCrumb value="Product Details" />

      <ProductDetails product={product} />

      <Tabs
        defaultValue="description"
        className="w-full bg-white dark:bg-customBlack container mx-auto text-center my-20 "
      >
        <TabsList className="border-b border-gray-300 dark:border-gray-500">
          <TabsTrigger value="description"> Product Details</TabsTrigger>
          <TabsTrigger value="reviews">Reviews (1)</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <ProductDescription
            details={product?.description}
            chart={product.chart}
          />
        </TabsContent>
        <TabsContent value="reviews">
          <Review />
        </TabsContent>
      </Tabs>
      <RelatedProduct />
    </>
  );
};

export default ProductDetailsPage;
