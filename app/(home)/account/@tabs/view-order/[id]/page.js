import { useAuth } from "@/app/(home)/hooks/useAuth";
import { getOrder } from "@/queries/orders";

const OrderDetailsPage = async ({ params: { id } }) => {
  const { userId } = await useAuth();
  const myOrder = await getOrder(userId);

  const orderView = myOrder?.find((order) => order?._id.toString() === id);

  return (
    <div className="p-6 bg-white dark:bg-cardBlack mx-auto shadow min-h-72  rounded-md">
      <p className="dark:text-slate-200 text-gray-500 font-poppins">
        Order{" "}
        <strong className="text-black dark:text-sky-500">
          {orderView?.orderId}
        </strong>{" "}
        was placed on{" "}
        <strong className="text-black dark:text-sky-500">
          {orderView?.date?.slice(4, 15)}
        </strong>{" "}
        and is currently{" "}
        <strong className="text-black dark:text-sky-500">
          {orderView?.status}
        </strong>
        .
      </p>

      <h1 className="text-2xl font-poppins font-semibold mt-6 dark:text-slate-300">
        Order Details
      </h1>

      <div className=" p-4 font-poppins dark:text-slate-300">
        <div className="flex justify-between items-center border-b border-gray-200 py-3 font-semibold">
          <p>Product</p>
          <p>Total</p>
        </div>
        {orderView?.orderSummary?.cartItems.map((item) => (
          <div
            key={item?.id}
            className="flex justify-between items-center border-b border-gray-200 py-3 text-sm d"
          >
            <div>
              <p>
                {item?.title} x {item?.quantity}
              </p>
              {item?.size && <span>Size: {item?.size}</span>}
            </div>
            <p className="font-semibold text-green-500">
              TK.{item?.discountPrice}
            </p>
          </div>
        ))}
        <div className="flex justify-between items-center border-b border-gray-200 py-3 font-semibold text-sm">
          <p>SubTotal</p>
          <p className="text-green-500">
            TK.{orderView?.orderSummary?.subtotal}
          </p>
        </div>
        <div className="flex justify-between items-center border-b border-gray-200 py-3 font-semibold text-sm">
          <p>Shipping Fee</p>
          <p className="text-green-500">
            TK.{orderView?.orderSummary?.shippingFee}
          </p>
        </div>
        <div className="flex justify-between items-center border-b border-gray-200 py-3 font-semibold text-sm">
          <p>Payment Method</p>
          <p>{orderView?.orderSummary?.payMethod}</p>
        </div>
        <div className="flex justify-between items-center text-green-500  py-3 font-semibold text-lg">
          <p>Total</p>
          <p>TK.{orderView?.orderSummary?.total}</p>
        </div>
      </div>

      <div className="p-4">
        <div className=" text-slate-700 dark:bg-cardBlack dark:text-slate-300">
          <h1 className="text-lg font-medium mb-4 border-b border-gray-300 pb-2">
            Billing Address
          </h1>

          <div className="text-sm tracking-normal font-poppins space-y-2">
            <div className="grid grid-cols-12">
              <span className="text-gray-500 col-span-3">Full Name:</span>
              <span className="col-span-8">
                {orderView?.billingAddress?.fullName}
              </span>
            </div>
            <div className="grid grid-cols-12">
              <span className="text-gray-500 col-span-3">Email:</span>
              <span className="col-span-8">
                {" "}
                {orderView?.billingAddress?.email}
              </span>
            </div>

            <div className="grid grid-cols-12">
              <span className="text-gray-500 col-span-3">Phone Number:</span>
              <span className="col-span-8">
                (+880) {orderView?.billingAddress?.phone}
              </span>
            </div>
            <div className="grid grid-cols-12">
              <span className="text-gray-500 col-span-3">Address:</span>
              <span className="col-span-8">
                {orderView?.billingAddress?.detailAddress}
              </span>
            </div>
            <div className="grid grid-cols-12">
              <span className="text-gray-500 col-span-3">Area:</span>
              <span className="col-span-8">
                {orderView?.billingAddress?.area}
              </span>
            </div>
            <div className="grid grid-cols-12">
              <span className="text-gray-500 col-span-3">Thana/Upzila:</span>
              <span className="col-span-8">
                {" "}
                {orderView?.billingAddress?.thana}
              </span>
            </div>
            <div className="grid grid-cols-12">
              <span className="text-gray-500 col-span-3">City/District:</span>
              <span className="col-span-8">
                {" "}
                {orderView?.billingAddress?.district}
              </span>
            </div>
            <div className="grid grid-cols-12">
              <span className="text-gray-500 col-span-3">Division:</span>
              <span className="col-span-8">
                {" "}
                {orderView?.billingAddress?.division}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
