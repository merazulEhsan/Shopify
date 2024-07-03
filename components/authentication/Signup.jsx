"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Enter valid name" }),
  email: z.string().min(2, { message: "Enter valid email" }),
  password: z.string().min(6, { message: "Enter minimum 6 charecters" }),
  checkbox: z
    .boolean()
    .refine(
      (value) => value === true,
      "You must agree to the terms & conditions"
    ),
});

export default function Signup() {
  const [error, setError] = useState("");
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data) {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
        }),
      });

      if (response?.status === 201) {
        router.push("/login");
        toast.success("Registration Successfull");
      }
      response?.status === 203 &&
        setError("User already exist with this email !!");
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div className="mb-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          autoComplete="off"
          className="container flex flex-col justify-center font-roboto shadow-md p-10 my-10 w-full min-w-max max-w-xl space-y-4 dark:bg-cardBlack rounded"
        >
          <div className="mb-5 text-center">
            <h1 className="text-3xl font-poppins font-semibold pb-4">
              SignUp to Shopify.
            </h1>
            <p className="text-gray-500 font-normal">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-secondary hover:underline transition ease-in-out duration-300"
              >
                Sign In
              </Link>
            </p>
            <button
              type="button"
              className="py-2.5 px-10 my-4 inline-flex justify-center items-center gap-x-2 text-sm font-normal rounded border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              <svg
                className="flex-shrink-0 size-4"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4132_5805adfqfqdq121)">
                  <path
                    d="M32.2566 16.36C32.2566 15.04 32.1567 14.08 31.9171 13.08H16.9166V19.02H25.7251C25.5454 20.5 24.5866 22.72 22.4494 24.22L22.4294 24.42L27.1633 28.1L27.4828 28.14C30.5189 25.34 32.2566 21.22 32.2566 16.36Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M16.9166 32C21.231 32 24.8463 30.58 27.5028 28.12L22.4694 24.2C21.1111 25.14 19.3135 25.8 16.9366 25.8C12.7021 25.8 9.12677 23 7.84844 19.16L7.66867 19.18L2.71513 23L2.65521 23.18C5.2718 28.4 10.6648 32 16.9166 32Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M7.82845 19.16C7.48889 18.16 7.28915 17.1 7.28915 16C7.28915 14.9 7.48889 13.84 7.80848 12.84V12.62L2.81499 8.73999L2.6552 8.81999C1.55663 10.98 0.937439 13.42 0.937439 16C0.937439 18.58 1.55663 21.02 2.63522 23.18L7.82845 19.16Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M16.9166 6.18C19.9127 6.18 21.9501 7.48 23.0886 8.56L27.6027 4.16C24.8263 1.58 21.231 0 16.9166 0C10.6648 0 5.27181 3.6 2.63525 8.82L7.80851 12.84C9.10681 8.98 12.6821 6.18 16.9166 6.18Z"
                    fill="#EB4335"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_4132_5805adfqfqdq121">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0.937439)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              Sign in with Google
            </button>
            <div className="flex items-center text-sm text-gray-600  before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600 font-roboto">
              Or Sign Up with Email
            </div>
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    className="dark:bg-transparent"
                    type="text"
                    placeholder="John doe"
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="dark:bg-transparent"
                    type="email"
                    placeholder="shopify@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-primary font-normal" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="dark:bg-transparent"
                    type="password"
                    placeholder="123456"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-primary font-normal" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="checkbox"
            render={({ field }) => (
              <FormItem className=" ">
                <div className="flex flex-row items-center space-x-2 ">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>
                    I accept the terms of the Service & Privacy Policy.
                  </FormLabel>
                </div>
                <FormMessage className=" text-primary font-normal" />
              </FormItem>
            )}
          />
          {/* <div className="py-1">
              <div className="flex items-center space-x-2">
                <Checkbox onClick={() => setIsCheck(!isCheck)} id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I accept the terms of the Service & Privacy Policy.
                </label>
              </div>
            </div> */}
          {error && <p className="text-sm text-primary">{error}</p>}
          <Button
            className="bg-black text-white hover:bg-white hover:text-black border border-black transition ease-in-out duration-300 uppercase"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  );
}
