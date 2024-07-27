"use client";
import { creatingAddress, updatebillingInfo } from "@/app/(home)/actions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Enter valid name." }),
  mobile: z.string().min(11, { message: "Enter valid phone number." }),
  division: z.string().min(2, { message: "Enter valid phone number." }),
  district: z.string().min(2, { message: "Enter valid phone number." }),
  area: z.string().min(2, { message: "Enter valid phone number." }),
  detailAddress: z.string().min(2, { message: "Enter valid phone number." }),
  thana: z.string().min(2, { message: "Enter valid phone number." }),
  addressType: z.boolean().default(false),
});

const BillingModal = ({ mode, userId, billingAddress, uId }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: billingAddress?.name,
      mobile: billingAddress?.mobile,
      area: billingAddress?.area,
      district: billingAddress?.district,
      thana: billingAddress?.thana,
      division: billingAddress?.division,
      detailAddress: billingAddress?.detailAddress,
      addressType: billingAddress?.addressType,
    },
  });
  console.log(billingAddress);

  async function onSubmit(data) {
    try {
      if (mode === "add") {
        await creatingAddress(userId, data);
      }
      if (mode === "edit") {
        await updatebillingInfo(uId, billingAddress?.id, data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <DialogContent className="bg-white dark:bg-customBlack border-none overflow-auto md:w-3/5">
      <DialogHeader>
        <DialogTitle className="py-3 border-b border-gray-300 mb-4 text-start">
          {mode === "add" ? "Add New Address" : "Edit Adress"}
        </DialogTitle>
        <DialogDescription>
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
                        Mobile Number <span className="text-red-600">*</span>
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
                  name="detailAddress"
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
              <FormField
                control={form.control}
                name="addressType"
                render={({ field }) => (
                  <FormItem className=" ">
                    <div className="flex flex-row items-center space-x-2 ">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Set Default</FormLabel>
                    </div>
                    <FormMessage className=" text-primary font-normal" />
                  </FormItem>
                )}
              />
              {/*end grid*/}

              {/*end row*/}
              <div className="text-end">
                <Button
                  type="submit"
                  className="mt-5 cursor-pointer text-white bg-black border border-black rounded hover:bg-white hover:text-black transition ease-linear duration-300 dark:bg-primary dark:hover:bg-white "
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </Form>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter></DialogFooter>
    </DialogContent>
  );
};

export default BillingModal;
