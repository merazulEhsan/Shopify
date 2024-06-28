import BreadCrumb from "@/components/BreadCrumb";
import CartCard from "@/components/CartCard";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
const CartPage = () => {
  return (
    <>
      <BreadCrumb value="Shopping Cart" />
      <div class="container grid grid-cols-12  items-start justify-between pb-16 pt-4 gap-6">
        <div class="col-span-9  rounded">
          <div class="space-y-4 ">
            <CartCard />
          </div>
        </div>
        <div class="col-span-3 p-4 rounded shadow-xl ">
          <div class="flex justify-between border-b border-gray-300 text-gray-800 font-semibold py-3 text-base ">
            <p>Subtotal</p>
            <p>$1280</p>
          </div>
          <div class="space-y-2 mt-2 border-b border-gray-300">
            <div class="flex justify-between font-semibold text-gray-800 py-2 text-sm">
              <p>Shipping</p>
            </div>
            <RadioGroup
              defaultValue="comfortable"
              className="pb-4 text-gray-600"
            >
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

          <div class="flex justify-between text-gray-800 font-medium py-3 uppercas">
            <p class="font-semibold">Total</p>
            <p>$1280</p>
          </div>

          <div class="flex items-center mb-4 mt-2">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              class="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
            />
            <label
              for="aggrement"
              class="text-gray-600 ml-3 cursor-pointer text-sm"
            >
              I agree to the{" "}
              <a href="#" class="text-primary">
                terms & conditions
              </a>
            </label>
          </div>

          <Link
            href="/checkout"
            class="block w-full py-3 px-4 text-center text-white bg-black  rounded-md   hover:bg-secondary  transition font-medium ease-linear duration-300"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartPage;
