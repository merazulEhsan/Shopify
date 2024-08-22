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
    <tr className="bg-white border-b dark:bg-cardBlack dark:border-gray-700 font-openSans text-black">
      <td className="px-6 py-4">{order?.orderId}</td>
      <td className="px-6 py-4">{order?.billingAddress?.fullName}</td>
      <td className="px-6 py-4 text-sky-500">qtn</td>
      <td className="px-6 py-4">BDT.{order?.orderSummary?.total}</td>
      <td className="px-6 py-4">{order?.status}</td>

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
