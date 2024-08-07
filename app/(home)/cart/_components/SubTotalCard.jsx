import Link from "next/link";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";

const SubTotalCard = ({ calculateTotal, shipping, setShipping, subtotal }) => {
  return (
    <div className="md:col-span-3 col-span-12 p-4 rounded shadow-xl dark:bg-cardBlack">
      <div className="flex justify-between border-b border-gray-300 text-gray-800 font-semibold py-3 text-base dark:text-gray-400">
        <p>Subtotal</p>
        <p>${calculateTotal()}</p>
      </div>
      <div className="space-y-2 mt-2 border-b border-gray-300 ">
        <div className="flex justify-between font-semibold text-gray-800 py-2 text-sm dark:text-gray-400">
          <p>Shipping</p>
        </div>
        <RadioGroup defaultValue="60" className="pb-4 text-gray-600">
          <div className="flex items-center justify-between space-x-2 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="60"
                onClick={(e) => setShipping(e.target.value)}
                id="r1"
                className="text-secondary border-secondary"
              />
              <Label htmlFor="r1" className="flex">
                <span> Inside Tangail</span>
              </Label>
            </div>
            <span className="text-end text-sm">$60 </span>
          </div>

          <div className="flex items-center justify-between space-x-2 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="130"
                onClick={(e) => setShipping(e.target.value)}
                id="r2"
                className="text-secondary border-secondary"
              />
              <Label htmlFor="r2" className="flex">
                <span> Outside Tangail</span>
              </Label>
            </div>
            <span className="text-end text-sm">$130</span>
          </div>
        </RadioGroup>
      </div>

      <div className="flex justify-between text-gray-800 font-medium py-3 uppercas dark:text-gray-400">
        <p className="font-semibol">Total</p>
        <p>${subtotal}</p>
      </div>

      <Link
        href="/checkout"
        className="block w-full py-2 px-4 text-center text-black hover:text-white bg-amber-400  rounded hover:bg-black   transition font-medium ease-linear duration-300"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default SubTotalCard;
