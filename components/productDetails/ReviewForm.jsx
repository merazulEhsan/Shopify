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
import { Label } from "@/components/ui/label";
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
    <div className="mb-5 text-gray-600">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col justify-center my-5 w-full space-y-4"
        >
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Your Review</Label>
            <Textarea placeholder="Type your review here." id="message" />
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="John doe" {...field} />
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
                    type="email"
                    placeholder="shopify@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-primary font-normal" />
              </FormItem>
            )}
          />

          <Button variant="login" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
