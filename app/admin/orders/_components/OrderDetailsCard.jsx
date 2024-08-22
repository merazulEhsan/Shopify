import moment from "moment";

const OrderDetailsCard = ({ order }) => {
  return (
    <div className="grid grid-cols-12 justify-between gap-4 mt-6 font-openSans">
      <div className="col-span-6 bg-white p-6 shadow-sm rounded">
        <h1 className="text-base font-medium my-2">Customer Details</h1>
        <div className="flex justify-between py-3 border-b border-slate-200 text-sm">
          <span className="text-slate-600">Name</span>
          <span className="font-semibold">
            {order?.billingAddress?.fullName}
          </span>
        </div>
        <div className="flex justify-between py-3 border-b border-slate-200 text-sm text-slate-600">
          <span>Email</span>
          <span>{order?.billingAddress?.email}</span>
        </div>
        <div className="flex justify-between pt-3 text-sm text-slate-600">
          <span>Phone</span>
          <span>(+880) {order?.billingAddress?.phone}</span>
        </div>
      </div>
      <div className="col-span-6 bg-white p-6 shadow-sm rounded">
        <h1 className="text-base font-medium my-2">Order Summary</h1>
        <div className="flex justify-between py-3 border-b border-slate-200 text-sm">
          <span className="text-slate-600">Order Date</span>
          <span>{moment(new Date(order?.date)).format("ll")}</span>
        </div>
        <div className="flex justify-between py-3 border-b border-slate-200 text-sm text-slate-600">
          <span>Payment Method</span>
          <span>{order?.orderSummary?.payMethod}</span>
        </div>
        <div className="flex justify-between pt-3 text-sm text-slate-600">
          <span>Shipping Method</span>
          <span>Locale Shipping Method</span>
        </div>
      </div>
      <div className="col-span-6 bg-white p-6 shadow-sm rounded">
        <h1 className="text-base font-medium my-2">Deliver To</h1>
        <div className="flex justify-between py-3 border-b border-slate-200 text-sm">
          <span className="text-slate-600">Address</span>
          <span>{order?.billingAddress?.detailAddress}</span>
        </div>
        <div className="flex justify-between py-3 border-b border-slate-200 text-sm text-slate-600">
          <span>Area</span>
          <span>{order?.billingAddress?.area}</span>
        </div>
        <div className="flex justify-between py-3 border-b border-slate-200 text-sm text-slate-600">
          <span>Thana/Upzilla</span>
          <span>{order?.billingAddress?.thana}</span>
        </div>
        <div className="flex justify-between py-3 border-b border-slate-200 text-sm text-slate-600">
          <span>District</span>
          <span>{order?.billingAddress?.district}</span>
        </div>
        <div className="flex justify-between pt-3 text-sm text-slate-600">
          <span>Division</span>
          <span>{order?.billingAddress?.division}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
