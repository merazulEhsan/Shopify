"use client";

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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Enter valid name" }),
  email: z.string().min(2, { message: "Enter valid email" }),
  password: z.string().min(6, { message: "Enter minimum 6 charecters" }),
});

export default function ReviewForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="mb-5 text-gray-600 dark:text-gray-400 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col justify-center my-5 w-full space-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Textarea
                    className="dark:bg-transparent dark:border-gray-500 "
                    placeholder="Type your review here."
                    id="message"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-primary font-normal" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="John doe"
                    {...field}
                    className="dark:bg-transparent dark:border-gray-500 "
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="dark:bg-transparent dark:border-gray-500 "
                    type="email"
                    placeholder="shopify@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-primary font-normal" />
              </FormItem>
            )}
          />

          <Button
            className="bg-secondary text-base text-white font-semibold hover:bg-black dark:hover:bg-gray-800"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
