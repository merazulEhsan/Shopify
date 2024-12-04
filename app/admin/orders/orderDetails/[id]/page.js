import { Button } from "@/components/ui/button";
import { getOrderById } from "@/queries/adminQueries/orders";
import moment from "moment/moment";
import OrderDetailsCard from "../../_components/OrderDetailsCard";
import OrderDetailsTable from "../../_components/OrderDetailsTable";
import { SelectForm } from "../../_components/SelectForm";

const page = async ({ params: { id } }) => {
  const singleOrder = await getOrderById(id);

  return (
    <div className="px-6">
      <div className="py-6 ">
        <h1 className="text-2xl font-openSans font-semibold">Order Details</h1>
      </div>

      <div className="grid grid-cols-12 bg-white p-6 shadow-sm rounded items-center">
        <div className="col-span-6">
          <h1 className="text-base">Order ID: {singleOrder?.orderId}</h1>
          <p className="text-xs font-openSans text-slate-500">
            Order Created At :{" "}
            {moment(new Date(singleOrder?.date)).format("lll")}
          </p>
        </div>
        <div className="col-span-6 flex justify-end items-center space-x-2 font-openSans">
          <span className="text-slate-500 text-xs font-openSans font-medium">
            Change Status:
          </span>
          <SelectForm status={singleOrder?.status} id={id} />
          <Button className="bg-green-100 text-green-500 px-6 hover:bg-green-500  hover:text-white font-openSans transition ease-linear duration-500">
            Invoice
          </Button>
        </div>
      </div>

      <OrderDetailsCard order={singleOrder} />
      <OrderDetailsTable orderSummary={singleOrder?.orderSummary} />

      <div className="justify-between gap-4 mt-6 font-openSans">
        <div className=" bg-white p-6 shadow-sm rounded">
          <h1 className="text-base font-medium my-2">Oeder Price</h1>
          <div className="flex justify-between py-3 border-b border-slate-200 text-sm">
            <span className="text-slate-600">SubTotal:</span>
            <span>Tk. {singleOrder?.orderSummary?.subtotal}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-slate-200 text-sm text-slate-600">
            <span>Shiping Cost:</span>
            <span>Tk. {singleOrder?.orderSummary?.shippingFee}</span>
          </div>
          <div className="flex justify-between pt-3 text-sm text-slate-600">
            <span>Grand Total:</span>

            <span>Tk. {singleOrder?.orderSummary?.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
