import BreadCrumb from "@/components/BreadCrumb";
import ProductDescription from "@/components/productDetails/ProductDescription";
import ProductDetails from "@/components/productDetails/ProductDetails";
import RelatedProduct from "@/components/productDetails/RelatedProduct";
import Review from "@/components/productDetails/Review";
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
        className="w-full bg-white container mx-auto text-center my-20 "
      >
        <TabsList className="border-b border-gray-300">
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
