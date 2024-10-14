const CartPaymentOptions = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="border-b border-[#E4E4E4] py-3 w-full">
        <p className="font-semibold text-base">Price Details</p>
        <p className="flex justify-between text-[13px] pt-2 gap-1">
          <span>Price 3 Item</span>
          <span>$699.30</span>
        </p>
        <p className="flex justify-between text-[13px] pt-2 gap-1">
          <span>Delivery Charge</span>
          <span className="text-[#2DCD7A]">FREE</span>
        </p>
       
      </div>
      <div className="w-full">
      <p className="flex justify-between text-[13px] pt-2 gap-1">
          <span>Amount Payable</span>
          <span>$699.30</span>
        </p>
      </div>
    </div>
  );
};

export default CartPaymentOptions;
