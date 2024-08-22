import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getOrderById } from "@/queries/orders";
import moment from "moment/moment";

const page = async ({ params: { id } }) => {
  const singleOrder = await getOrderById(id);

  return (
    <div className="px-6">
      <div className="py-6 ">
        <h1 className="text-2xl font-openSans font-semibold">Order Details</h1>
      </div>

      <div className="grid grid-cols-12 bg-white p-6 shadow-sm rounded items-center">
        <div className="col-span-7">
          <h1 className="text-base">Order ID: {singleOrder?.orderId}</h1>
          <p className="text-xs font-openSans text-slate-500">
            Order Created At :{" "}
            {moment(new Date(singleOrder?.date)).format("lll")}
          </p>
        </div>
        <div className="col-span-3 flex justify-end items-center space-x-2 font-openSans">
          <span className="text-slate-500 text-xs font-openSans font-medium">
            Change Status:
          </span>
          <Select defaultValue={singleOrder?.status} className="text-xs">
            <SelectTrigger className="w-28 text-xs font-medium border-none focus:ring-white focus:border-none">
              <SelectValue placeholder={singleOrder?.status} />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="proccessing">Proccessing</SelectItem>
                <SelectItem value="denied">Denied</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2 text-center">
          <Button className="bg-secondary/20 text-secondary px-6 hover:bg-secondary hover:text-white font-openSans transition ease-linear duration-300">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
