import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs } from "@/components/ui/tabs";
import { getAllProducts } from "@/data/queries";
import { File, ListFilter, PlusCircle, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Products = async () => {
  const products = await getAllProducts();
  return (
    <main className="grid flex-1 items-start gap-4 sm:px-6 sm:py-0 md:gap-8">
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <CardHeader className="px-0">
            <CardTitle>Products</CardTitle>
            <CardDescription>Manage your products and view.</CardDescription>
          </CardHeader>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Filter
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Active
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
              </span>
            </Button>
            <Link href="/admin/products/addproduct">
              <Button
                size="sm"
                className="bg-secondary/20 text-secondary px-6 hover:bg-secondary hover:text-white font-openSans transition ease-linear duration-300"
              >
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Product
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Card className="bg-white rounded">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                      <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Price
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Stock
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Status
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Created at
                    </TableHead>
                    <TableHead>
                      <span className="hidden md:table-cell">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products?.map((product) => (
                    <TableRow key={product?.id}>
                      <TableCell className="hidden sm:table-cell">
                        <Image
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src={product?.thumbnail}
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {product?.title}
                      </TableCell>
                      <TableCell>{product?.sku}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        TK. {product?.price}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {product?.stock}
                      </TableCell>
                      <TableCell className="hidden md:table-cell"></TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-10-18
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="icon"
                            className="bg-green-100 text-green-600 px-2.5 focus:right-0 hover:bg-green-500 hover:text-white transition-all duration-500"
                          >
                            <SquarePen size={16} />
                          </Button>
                          <Button
                            variant="icon"
                            className="bg-red-100 text-red-600 px-2.5 focus:right-0 hover:bg-red-500 hover:text-white transition-all duration-500"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-10</strong> of <strong>32</strong> products
              </div>
            </CardFooter>
          </Card>
        </div>
      </Tabs>
    </main>
  );
};

export default Products;
