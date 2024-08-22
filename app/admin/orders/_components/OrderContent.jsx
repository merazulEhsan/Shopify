"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import OrderRow from "./OrderRow";

const OrderContent = ({ allOrders }) => {
  const [status, setStatus] = useState("All");

  const orders = allOrders?.filter((item) =>
    status === "All" ? item : status === item.status
  );

  return (
    <div>
      <div className="flex justify-between mb-4 items-center ">
        <span className="text-sm font-medium font-openSans text-slate-500">
          Showing {orders.length} items of {allOrders.length}
        </span>
        <div className="flex justify-start items-center gap-2">
          <span className="text-sm font-medium font-openSans text-slate-500">
            Status:
          </span>
          <Select onValueChange={setStatus} defaultValue="All">
            <SelectTrigger className="w-28 text-xs font-openSans font-medium focus:ring-white">
              <SelectValue />
            </SelectTrigger>

            <SelectContent className=" bg-white ">
              <SelectGroup>
                <SelectItem value="All">All</SelectItem>

                <SelectItem value="Processing">Processing</SelectItem>
                <SelectItem value="Denied">Denied</SelectItem>
                <SelectItem value="Delivered">Delivered</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-4 ">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-slate-400 uppercase bg-ghostWhite dark:bg-gray-800 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders
                ?.map((order) => <OrderRow key={order?.id} order={order} />)
                .reverse()}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination className="my-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default OrderContent;
