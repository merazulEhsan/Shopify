"use client";
import { creatingAddress, updatebillingInfo } from "@/app/(home)/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Enter valid name." }),
  mobile: z.string().min(11, { message: "Enter valid phone number." }),
  email: z.string().min(2, { message: "Enter valid phone number." }),
  division: z.string().min(2, { message: "Enter valid phone number." }),
  district: z.string().min(2, { message: "Enter valid phone number." }),
  area: z.string().min(2, { message: "Enter valid phone number." }),
  address: z.string().min(2, { message: "Enter valid phone number." }),
  thana: z.string().min(2, { message: "Enter valid phone number." }),
});

const AddressForm = ({ mode, uId, address }) => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: address?.name,
      mobile: address?.mobile,
      email: address?.email,
      area: address?.area,
      district: address?.district,
      thana: address?.thana,
      division: address?.division,
      address: address?.address,
    },
  });

  async function onSubmit(data) {
    try {
      if (mode === "Add New") {
        await creatingAddress(uId, data);
        toast.success("Add Address Successfully!");
      }
      if (mode === "Edit") {
        console.log(uId);
        await updatebillingInfo(uId, data);
        toast.success("Address Update Successfully!");
        router.back();
      }
    } catch (error) {
      toast.error(`${error}`);
    }
  }
  return (
    <div className="p-6 bg-white dark:bg-cardBlack dark:text-slate-300 shadow">
      <h1 className="text-lg font-medium mb-4 border-b border-gray-300 pb-2">
        {mode} Address
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <FormField
              control={form.control}
              name="name"
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
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Phone Number <span className="text-red-600">*</span>
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
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  E-mail <span className="text-red-600">*</span>
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
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
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
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Details Address <span className="text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
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
          </div>

          {/*end grid*/}

          {/*end row*/}
          <div className="text-end">
            <Button type="submit" className="black-button mt-5">
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddressForm;
