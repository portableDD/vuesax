import { useContext, useState } from "react";
import AppState from "@/Context/AllContext";

const CartPaymentOptions = () => {
  const { state } = useContext(AppState);
  const { cart} = state;

  const [discount] = useState(25);
  const [tax] = useState(1.3);

  const totalProductPrice = cart.reduce((acc, item) => {
    return acc += item.price *item.count
  }, 0)

  const total = totalProductPrice - discount + tax
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="border-b border-[#E4E4E4] py-3 w-full">
        <p className="font-semibold text-base">Price Details</p>
        <p className="flex justify-between text-[13px] pt-2 gap-1">
          <span>Price {cart.length} Item</span>
          <span>${total}</span>
        </p>
        <p className="flex justify-between text-[13px] pt-2 gap-1">
          <span>Delivery Charge</span>
          <span className="text-[#2DCD7A]">FREE</span>
        </p>
       
      </div>
      <div className="w-full">
      <p className="flex justify-between text-[13px] pt-2 gap-1">
          <span>Amount Payable</span>
          <span>${total}</span>
        </p>
      </div>
    </div>
  );
};

export default CartPaymentOptions;
