"use client";
import BreadCrumb from "@/components/BreadCrumb";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Enter valid name." }),
  phone: z.string().min(11, { message: "Enter valid phone number." }),
  division: z.string().min(2, { message: "Enter valid division number." }),
  district: z.string().min(2, { message: "Enter valid district number." }),
  area: z.string().min(2, { message: "Enter valid area number." }),
  detailAddress: z.string().min(2, { message: "Enter details address ." }),
  thana: z.string().min(2, { message: "Enter valid thana number." }),
  email: z.string().min(2, { message: "Enter valid email number." }),
  paymentMethod: z.enum(["COD", "Payment"], {
    required_error: "You need to select a payment method type.",
  }),
  note: z.string(),
});

import { placeOrder } from "../../actions";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useCart } from "../../hooks/useCart";
import OrderSummary from "./OrderSummary";

const BillingInfo = ({ uid, oId, address }) => {
  const router = useRouter();
  const { cartItems, subtotal, shipping, calculateTotal, clearCart } =
    useCart();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: address?.name,
      phone: address?.mobile,
      email: address?.email,
      area: address?.area,
      district: address?.district,
      thana: address?.thana,
      division: address?.division,
      detailAddress: address?.address,
    },
  });

  async function onSubmit(data) {
    try {
      const orderSubInfo = {
        uid,
        date: new Date(),
        status: "Processing",
        orderId: `#00${oId + 1}`,
      };

      if (cartItems?.length > 0) {
        const orderDetails = {
          cartItems,
          shippingFee: shipping,
          subtotal: calculateTotal(),
          total: subtotal,
          payMethod: data?.paymentMethod,
        };
        await placeOrder(orderSubInfo, data, orderDetails);
        clearCart();
        router.push("/order-success");
      } else {
        toast.warning("Select your item first!");
      }
    } catch (error) {
      toast.error(`${error}`);
    }
  }
  return (
    <div className="bg-ghostWhite dark:bg-customBlack">
      <BreadCrumb value="Check Out" />
      <div className="container items-start pb-16 gap-6 ">
        <div className="text-sm tracking-normal ">
          <div className=" dark:bg-customBlack border-none overflow-auto ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-12 gap-x-5"
              >
                <div className="space-y-4 md:col-span-8 col-span-full bg-white dark:bg-cardBlack p-8 shadow rounded">
                  <h3 className="text-lg font-medium capitalize mb-4 border-b border-gray-300 pb-2">
                    Billing Details
                  </h3>
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Full Name <span className="text-red-600">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="dark:bg-transparent dark:border-slate-500 border-slate-300 rounded"
                            type="text"
                            placeholder="John Doe"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-primary font-normal" />
                      </FormItem>
                    )}
                  />
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Phone <span className="text-red-600">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="dark:bg-transparent dark:border-slate-500 border-slate-300 rounded"
                              type="text"
                              placeholder="01700 000000"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-primary font-normal" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            E-Mail <span className="text-red-600">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="dark:bg-transparent dark:border-slate-500 border-slate-300 rounded"
                              type="email"
                              placeholder="john@gmail.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-primary font-normal" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <FormField
                      control={form.control}
                      name="division"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Division <span className="text-red-600">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="dark:bg-transparent dark:border-slate-500 border-slate-300 rounded"
                              type="text"
                              placeholder="Division"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-primary font-normal" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="district"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            District <span className="text-red-600">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="dark:bg-transparent dark:border-slate-500 border-slate-300 rounded"
                              type="text"
                              placeholder="District"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-primary font-normal" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <FormField
                      control={form.control}
                      name="thana"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Thana <span className="text-red-600">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="dark:bg-transparent dark:border-slate-500 border-slate-300 rounded"
                              type="text"
                              placeholder="thana"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-primary font-normal" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="area"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Area <span className="text-red-600">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="dark:bg-transparent dark:border-slate-500 border-slate-300 rounded"
                              type="text"
                              placeholder="area"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-primary font-normal" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="detailAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Details Address{" "}
                          <span className="text-red-600">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            className="dark:bg-transparent dark:border-slate-500 border-slate-300 rounded"
                            type="text"
                            placeholder="Details Address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-primary font-normal" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                      <FormItem className="pt-5">
                        <FormLabel className="text-lg font-bold">
                          Additional Information
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            className="dark:bg-transparent dark:border-slate-500 border-slate-300 rounded"
                            type="text"
                            placeholder="Notes about your order, e.g. special notes for delivery"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-primary font-normal" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="md:col-span-4 col-span-full ">
                  <OrderSummary
                    form={form}
                    cartItems={cartItems}
                    subtotal={subtotal}
                    shipping={shipping}
                    calculateTotal={calculateTotal}
                  />
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;
