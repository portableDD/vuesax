import { useContext, useEffect, useState } from "react";
import AppState from "@/Context/AllContext";
const CartOptions = ({next}) => {
  const { state } = useContext(AppState);
  const { cart } = state;

  const [discount] = useState(25);
  const [tax] = useState(1.3);

  const totalProductPrice = cart.reduce((acc, item) => {
    return acc += item.price *item.count
  }, 0)

  const total = totalProductPrice - discount + tax

  useEffect(() => {
    // Recalculate total on count change
    
  }, [totalProductPrice, total]);
  
  
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="border-b border-[#E4E4E4] py-3 w-full">
        <p className="font-semibold">Options</p>
        <p className="flex justify-between text-[13px] pt-0.5">
          <span>Coupons</span>
          <span className="text-[#6F64F8]">Apply</span>
        </p>
      </div>
      <div className="border-b border-[#E4E4E4] py-3 w-full">
        <p className="font-semibold">Price Detials</p>
        <p className="flex justify-between text-[13px] pt-0.5">
          <span>Total MRP</span>
          <span>${totalProductPrice}</span>
        </p>
        <p className="flex justify-between text-[13px] pt-0.5">
          <span>Bag Discount</span>
          <span className="text-[#2DCD7A]">- ${discount}</span>
        </p>
        <p className="flex justify-between text-[13px] pt-0.5">
          <span>Estimated Tax</span>
          <span>${tax}</span>
        </p>
        <p className="flex justify-between text-[13px] pt-0.5">
          <span>EMI Eligibility</span>
          <span className="text-[#6F64F8]">Details</span>
        </p>
        <p className="flex justify-between text-[13px] pt-0.5">
          <span>Delivery Charges</span>
          <span className="text-[#2DCD7A]">Free</span>
        </p>
      </div>
      <div className="w-full">
        <p className="flex justify-between text-[13px] text-[#665e5e] pt-0.5 font-semibold">
          <span>Total</span>
          <span>${total}</span>
        </p>
        <button className="w-full py-2 bg-[#6F64F8] rounded-md mt-3 font-semibold" onClick={next}>
            Place Order
        </button>
      </div>
    </div>
  );
};

export default CartOptions;
