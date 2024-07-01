import Link from "next/link";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const SubTotalCard = ({ calculateTotal }) => {
  return (
    <div className="md:col-span-3 col-span-12 p-4 rounded shadow-xl ">
      <div className="flex justify-between border-b border-gray-300 text-gray-800 font-semibold py-3 text-base ">
        <p>Subtotal</p>
        <p>${calculateTotal()}</p>
      </div>
      <div className="space-y-2 mt-2 border-b border-gray-300">
        <div className="flex justify-between font-semibold text-gray-800 py-2 text-sm">
          <p>Shipping</p>
        </div>
        <RadioGroup defaultValue="comfortable" className="pb-4 text-gray-600">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="default"
              id="r1"
              className="text-secondary border-secondary"
            />
            <Label htmlFor="r1">Inside Tangail</Label>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="compact"
              id="r3"
              className="text-secondary border-secondary"
            />
            <Label htmlFor="r3">Outside Tangail</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="free"
              id="r4"
              className="text-secondary border-secondary"
            />
            <Label htmlFor="r4">Free Shipping</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
        <p className="font-semibold">Total</p>
        <p>$1280</p>
      </div>

      <Link
        href="/checkout"
        className="block w-full py-3 px-4 text-center text-white bg-black  rounded-md   hover:bg-secondary  transition font-medium ease-linear duration-300"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default SubTotalCard;
