import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ProductDetails from "../../app/details/_components/ProductDetails";

const CartModal = ({ product }) => {
  return (
    <DialogContent className="bg-white dark:bg-customBlack border-none overflow-auto min-w-3xl h-5/6 ">
      <DialogHeader>
        <DialogTitle />
        <DialogDescription>
          <ProductDetails product={product} />
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default CartModal;
