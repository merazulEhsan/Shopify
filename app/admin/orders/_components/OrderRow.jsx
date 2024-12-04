import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Link from "next/link";

const OrderRow = ({ order }) => {
  return (
    <tr className=" bg-white shadow-sm border-b dark:bg-cardBlack dark:border-gray-700 font-openSans text-black">
      <td className="px-6 py-4">{order?.orderId}</td>
      <td className="px-6 py-4">{order?.billingAddress?.fullName}</td>
      <td className="px-6 py-4 ">
        {order?.orderSummary?.cartItems?.reduce((total, item) => {
          return total + item.quantity;
        }, 0)}
      </td>
      <td className="px-6 py-4 flex items-center">
        Tk. {order?.orderSummary?.total}
      </td>
      <td className="px-6 py-4">
        <Badge
          className={`${
            order?.status === "Processing" &&
            "text-amber-600 bg-amber-100  rounded text-xs"
          } ${
            order?.status === "Delivered" &&
            "text-green-600 bg-green-100  rounded text-xs"
          } ${
            order?.status === "Denied" &&
            "text-red-600 bg-red-100 rounded text-xs"
          }`}
        >
          {order?.status}
        </Badge>
        {/* <span
          className={`${
            order?.status === "Processing" &&
            "text-amber-600 bg-amber-100 px-2 py-0.5 rounded text-xs"
          } ${
            order?.status === "Delivered" &&
            "text-green-600 bg-green-100 px-2 py-0.5 rounded text-xs"
          } ${
            order?.status === "Denied" &&
            "text-red-600 bg-red-100 px-2 rounded text-xs"
          }`}
        >
          {order?.status}
        </span> */}
      </td>

      <td className="px-6 py-4">
        {moment(new Date(order?.date)).format("ll")}
      </td>
      <td className="px-6 py-4">
        <Link href={`/admin/orders/orderDetails/${order?.id}`}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="w-8 h-8 rounded bg-gray-100 p-2 hover:bg-secondary/25 hover:text-secondary transition ease-linear duration-500">
                  <FontAwesomeIcon icon={faEye} />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-black text-white px-2 py-1">
                <p className="text-xs">View</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      </td>
    </tr>
  );
};

export default OrderRow;
