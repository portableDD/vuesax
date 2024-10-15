const CartFormOptions = ({next}) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="border-b border-[#E4E4E4] py-3 w-full">
        <p className="font-semibold text-base">John Doe</p>
        <p className="flex flex-col text-[13px] pt-2 gap-1">
          <span>9447 Glen Eagles Drive </span>
          <span>Lewis Center, OH 43035</span>
        </p>
        <p className="text-[13px] py-3">
          <span>UTC-5: Eastern Standard Time (EST)</span>
        </p>
        <p className="text-[13px] pb-3">
          <span>202-555-0140</span>
        </p>
      </div>
      <div className="w-full">
        <button className="w-full py-3 bg-[#6F64F8] rounded-md mt-3 font-semibold uppercase" onClick={next}>
          Deliver to this address
        </button>
      </div>
    </div>
  );
};

export default CartFormOptions;
