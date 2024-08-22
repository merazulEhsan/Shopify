import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";

const OrderSummary = ({
  cartItems,
  subtotal,
  shipping,
  calculateTotal,
  form,
}) => {
  return (
    <div className="bg-white dark:bg-cardBlack p-8 shadow rounded ">
      <h4 className="text-gray-800 dark:text-gray-300 text-lg mb-4 font-medium  border-b border-gray-200 pb-2">
        Order Summary
      </h4>
      <div className="space-y-2 text-sm">
        {cartItems?.length === 0 ? (
          <>
            <div className="flex items-center space-x-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </>
        ) : (
          cartItems?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between gap-5 border-b border-gray-200 pb-2"
            >
              <div>
                <p className="text-gray-800 dark:text-gray-300 font-medium">
                  {item?.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-500">
                  Size: {item?.size}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-500">
                x{item?.quantity}
              </p>
              <p className="text-gray-800 dark:text-gray-300 font-medium">
                Tk.{item?.discountPrice}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 dark:text-gray-300 font-medium py-3 uppercas text-sm">
        <p>Subtotal</p>
        <p>Tk.{calculateTotal()}</p>
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 dark:text-gray-300 font-medium py-3 uppercas text-sm">
        <p>Sipping Cost</p>
        <p>Tk.{shipping}</p>
      </div>

      <div className="flex justify-between text-gray-800 dark:text-gray-300 font-medium py-3 uppercas text-sm">
        <p className="font-semibold">Total</p>
        <p>Tk.{subtotal}</p>
      </div>

      <FormField
        control={form.control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem className="pb-4">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className=" text-gray-600"
              >
                <div className=" space-y-3 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="COD"
                      id="cash"
                      className="text-secondary border-secondary"
                    />
                    <Label htmlFor="cash">
                      <span> Cash on Delevery</span>
                    </Label>
                  </div>
                  <p
                    className={`${
                      field.value === "COD"
                        ? "block bg-nav  rounded-sm "
                        : "hidden"
                    } px-2 py-1`}
                  >
                    Pay with cash upon delivery.
                  </p>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="Payment"
                      id="payment"
                      className="text-secondary border-secondary"
                    />
                    <Label htmlFor="payment">
                      <span> Payment</span>
                    </Label>
                  </div>
                  <p
                    className={`${
                      field.value === "Payment"
                        ? "block bg-nav  rounded-sm "
                        : "hidden"
                    } px-2 py-1`}
                  >
                    Feature comming soon.
                  </p>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage className="text-primary font-normal" />
          </FormItem>
        )}
      />

      <button
        type="submit"
        className="px-10 py-3 text-center text-sm text-white bg-black border border-black rounded uppercase font-roboto font-medium hover:bg-white hover:text-black transition ease-linear duration-300 dark:bg-primary dark:hover:bg-white w-full"
      >
        Place order
      </button>
    </div>
  );
};

export default OrderSummary;
