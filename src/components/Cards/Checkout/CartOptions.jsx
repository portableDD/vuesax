const CartOptions = () => {
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
          <span>$598</span>
        </p>
        <p className="flex justify-between text-[13px] pt-0.5">
          <span>Bag Discount</span>
          <span className="text-[#2DCD7A]">- $25</span>
        </p>
        <p className="flex justify-between text-[13px] pt-0.5">
          <span>Estimated Tax</span>
          <span>$1.3</span>
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
          <span>$574.3</span>
        </p>
        <button className="w-full py-2 bg-[#6F64F8] rounded-md mt-3 font-semibold">
            Place Order
        </button>
      </div>
    </div>
  );
};

export default CartOptions;
