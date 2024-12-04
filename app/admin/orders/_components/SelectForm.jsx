"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { updateStatus } from "../../action";

const FormSchema = z.object({
  status: z.string({
    required_error: "Please select a status.",
  }),
});

export function SelectForm({ status, id }) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data) {
    try {
      await updateStatus(id, data);
      toast.success("Order Updated.");
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-auto flex gap-4"
      >
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-28 text-xs font-openSans font-medium focus:ring-white">
                    <SelectValue placeholder={status} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className=" bg-white ">
                  <SelectGroup>
                    <SelectItem value="Processing">Processing</SelectItem>
                    <SelectItem value="Denied">Denied</SelectItem>
                    <SelectItem value="Delivered">Delivered</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-secondary/20 text-secondary px-6 hover:bg-secondary hover:text-white font-openSans transition ease-linear duration-300"
        >
          save
        </Button>
      </form>
    </Form>
  );
}
