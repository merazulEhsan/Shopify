import moment from "moment";
import Link from "next/link";

const OrderRow = ({ item }) => {
  return (
    <tr className="bg-white border-b dark:bg-cardBlack dark:border-gray-700   ">
      <td className="px-6 py-4">{item?.orderId}</td>
      <td className="px-6 py-4">{moment(new Date(item?.date)).format("ll")}</td>
      <td className="px-6 py-4 text-sky-500">{item?.status}</td>
      <td className="px-6 py-4">
        TK.
        {item?.orderSummary?.total}
      </td>

      <td className="px-6 py-4">
        <Link
          href={`/account/view-order/${item?._id.toString()}`}
          className="green-button px-4 py-1.5 rounded text-xs"
        >
          View
        </Link>
      </td>
    </tr>
  );
};

export default OrderRow;
