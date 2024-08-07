import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

const Success = async () => {
  const { session } = await useAuth();
  return (
    <div className="h-full w-full flex-1 flex flex-col items-center justify-center my-10">
      <div className="flex flex-col items-center gap-6 max-w-[600px] text-center">
        <>
          <CircleCheckBig className="w-24 h-24 text-green-500" />
          <h1 className="text-xl md:text-2xl lg:text-3xl">
            Thank You,{" "}
            <strong className="text-green-500">{session?.user?.name}! </strong>
            Your Order Have Been Recieved!
          </h1>
        </>

        <div className="flex items-center gap-3">
          <Button asChild className="black-button">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
          <Button asChild className="green-button">
            <Link href="/account/myorders">View Order</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
