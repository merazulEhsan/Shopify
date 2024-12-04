"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, CloudUpload, Upload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  title: z.string({ required_error: "Title is required!" }),
  description: z.string({ required_error: "Description is required!" }),
  sku: z.string({ required_error: "SKU is required!" }),
  stock: z.string({ required_error: "Stock is required!" }),
  price: z.string({ required_error: "price is required!" }),
  discount: z.string({ required_error: "Discount is required!" }),
  size: z.array(z.string({ required_error: "Size is required!" })),
  category: z.string({ required_error: "Category is required!" }),
  subcategory: z.string({ required_error: "Subcategory is required!" }),
  brand: z.string({ required_error: "Brand is required!" }),
  flag: z.string({ required_error: "Flag is required!" }),
  rating: z.string({ required_error: "Rating is required!" }),
});
const AddProdructPage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const [imgsSrc, setImgsSrc] = useState([]);
  const onChange = (e) => {
    for (const file of e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImgsSrc((imgs) => [...imgs, reader.result]);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  };

  async function onSubmit(data) {
    console.log(data);
  }
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 overflow-hidden">
      <Form {...form} className="mx-auto grid flex-1 auto-rows-max gap-4">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="h-7 w-7">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              <CardHeader className="px-0">
                <CardTitle>Products</CardTitle>
                <CardDescription>Add or Edit your product.</CardDescription>
              </CardHeader>
            </h1>

            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button
                type="submit"
                size="sm"
                className="bg-secondary/20 text-secondary px-6 hover:bg-secondary hover:text-white font-openSans transition ease-linear duration-300"
              >
                Save Product
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-0" className="bg-white">
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Product Title</FormLabel>
                            <FormControl>
                              <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage className="text-primary font-normal" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea
                                className="min-h-28"
                                type="text"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-primary font-normal" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-07-chunk-1" className="bg-white">
                <CardHeader>
                  <CardTitle>Stock</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">SKU</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Discount</TableHead>
                        <TableHead className="w-[100px]">Size</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">
                          <FormField
                            control={form.control}
                            name="sku"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="sr-only">SKU</FormLabel>
                                <FormControl>
                                  <Input type="text" {...field} />
                                </FormControl>
                                <FormMessage className="text-primary font-normal" />
                              </FormItem>
                            )}
                          />
                        </TableCell>
                        <TableCell>
                          <FormField
                            control={form.control}
                            name="stock"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="sr-only">Stock</FormLabel>
                                <FormControl>
                                  <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage className="text-primary font-normal" />
                              </FormItem>
                            )}
                          />
                        </TableCell>
                        <TableCell>
                          <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="sr-only">Price</FormLabel>
                                <FormControl>
                                  <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage className="text-primary font-normal" />
                              </FormItem>
                            )}
                          />
                        </TableCell>
                        <TableCell>
                          <FormField
                            control={form.control}
                            name="discount"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="sr-only">
                                  Discount
                                </FormLabel>
                                <FormControl>
                                  <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage className="text-primary font-normal" />
                              </FormItem>
                            )}
                          />
                        </TableCell>
                        <TableCell>
                          <FormField
                            control={form.control}
                            name="size"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="sr-only">Size</FormLabel>
                                <FormControl>
                                  <ToggleGroup
                                    type="multiple"
                                    onValueChange={field.onChange}
                                    variant="outline"
                                  >
                                    <ToggleGroupItem value="s">
                                      S
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="m">
                                      M
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="l">
                                      L
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="xl">
                                      XL
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="xxl">
                                      XXL
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="na">
                                      NA
                                    </ToggleGroupItem>
                                  </ToggleGroup>
                                </FormControl>
                                <FormMessage className="text-primary font-normal" />
                              </FormItem>
                            )}
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-07-chunk-2" className="bg-white">
                <CardHeader>
                  <CardTitle>Product Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                              <Select onValueChange={field.onChange}>
                                <SelectTrigger
                                  id="category"
                                  aria-label="Select category"
                                >
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent {...field} className="bg-white">
                                  <SelectItem value="clothing">
                                    Clothing
                                  </SelectItem>
                                  <SelectItem value="electronics">
                                    Electronics
                                  </SelectItem>
                                  <SelectItem value="accessories">
                                    Accessories
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage className="text-primary font-normal" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="subcategory"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subcategory (optional)</FormLabel>
                            <FormControl>
                              <Select onValueChange={field.onChange}>
                                <SelectTrigger
                                  id="subcategory"
                                  aria-label="Select subcategory"
                                >
                                  <SelectValue placeholder="Select subcategory" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="t-shirts">
                                    T-Shirts
                                  </SelectItem>
                                  <SelectItem value="hoodies">
                                    Hoodies
                                  </SelectItem>
                                  <SelectItem value="sweatshirts">
                                    Sweatshirts
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage className="text-primary font-normal" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid items-start gap-4 ">
              <Card x-chunk="dashboard-07-chunk-3" className="bg-white">
                <CardHeader>
                  <CardTitle>Product Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="brand"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Brand</FormLabel>
                            <FormControl>
                              <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage className="text-primary font-normal" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="flag"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Flag</FormLabel>
                            <FormControl>
                              <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage className="text-primary font-normal" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="rating"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ratings</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage className="text-primary font-normal" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="overflow-hidden bg-white"
                x-chunk="dashboard-07-chunk-4"
              >
                <CardHeader>
                  <CardTitle>Product Thumbnail</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {imgsSrc?.map((image, i) => (
                      <Image
                        key={i}
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-fill"
                        height="200"
                        src={image}
                        width="200"
                      />
                    ))}

                    <div className="grid gap-2">
                      <div className="flex w-full items-center justify-center rounded-md">
                        <input
                          onChange={onChange}
                          type="file"
                          name="file"
                          id="pro-img"
                          hidden
                        />

                        <div className="space-y-2">
                          <label
                            className="cursor-pointer inset-0 px-4 py-1.5 rounded bg-white  border border-gray-400 text-sm ml-6 dark:text-slate-300 dark:bg-cardBlack flex items-center gap-x-2"
                            htmlFor="pro-img"
                          >
                            <CloudUpload size="18" />
                            <span>Upload Thumbnail</span>
                          </label>
                          <p className="text-xs ml-6 text-slate-500">
                            Upload JPG or PNG image.
                          </p>
                        </div>
                        <span className="sr-only">Upload</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="overflow-hidden bg-white"
                x-chunk="dashboard-07-chunk-5"
              >
                <CardHeader>
                  <CardTitle>More Product Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <Image
                      alt="Product image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="300"
                      src="/placeholder.svg"
                      width="300"
                    />
                    <div className="grid grid-cols-3 gap-2">
                      <button>
                        <Image
                          alt="Product image"
                          className="aspect-square w-full rounded-md object-cover"
                          height="84"
                          src="/placeholder.svg"
                          width="84"
                        />
                      </button>
                      <button>
                        <Image
                          alt="Product image"
                          className="aspect-square w-full rounded-md object-cover"
                          height="84"
                          src="/placeholder.svg"
                          width="84"
                        />
                      </button>
                      <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                        <Upload className="h-4 w-4 text-muted-foreground" />
                        <span className="sr-only">Upload</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm">Save Product</Button>
          </div>
        </form>
      </Form>
    </main>
  );
};

export default AddProdructPage;
