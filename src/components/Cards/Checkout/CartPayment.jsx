import usLogo from "../../../assets/img/US_Unlocked_logo.svg";
import { FaRegSquarePlus } from "react-icons/fa6";

const RadioLabel = [
  "Credit / Debit / ATM Card",
  "Net Banking",
  "EMI (Easy Installment)",
  "Cash on Delivary",
];

const CartPayment = () => {
  return (
    <div className="rounded-md shadow-navbar bg-contentBgColor pb-5 py-3 px-5 w-full mt-3">
      <div className="flex flex-col justify-between h-full">
        <div className="border-b border-[#E4E4E4] py-3 w-full">
          <p className="font-semibold">Payment Options</p>
          <p className="pt-3 text-xs">
            Be sure to click on correct payment option
          </p>
          <p className="flex gap-3 items-center text-[13px] pt-2">
            <span className="h-4 w-4 rounded-full bg-[#6F64F8]"></span>
            <img src={usLogo} alt="uslogo" />
            <span className="text-[13px]">
              US Unlocked Debit Card 12XX XXXX XXXX 0000
            </span>
          </p>
          <div className="flex gap-3 items-center text-[13px] pt-3">
            <p>Enter CVV :</p>
            <input
              type="text"
              id="text"
              className="bg-inherit block w-32 rounded-md border border-[#979797] py-1 px-3 focus:ring-[#979797] sm:text-sm sm:leading-6 "
            />
            <button className="px-3 py-2 bg-[#6F64F8] rounded-md font-semibold">
              CONTINUE
            </button>
          </div>
        </div>
        <div className="border-b border-[#E4E4E4] py-3 w-full">
          {RadioLabel.map((label, index) => (
            <div key={index} className="flex gap-3 items-center py-1">
              <input
                type="radio"
                name={label}
                id={label}
                className="bg-inherit"
              />
              <p className="text-[13px]">{label}</p>
            </div>
          ))}
        </div>
        <div className="w-full">
          <p className="flex gap-3 items-center text-[13px] pt-3 py-3 font-semibold">
            <FaRegSquarePlus className="text-base" />
            <span>Add Gift Card</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPayment;
