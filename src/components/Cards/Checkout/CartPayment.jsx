import { useNavigate } from "react-router-dom";
import usLogo from "../../../assets/img/US_Unlocked_logo.svg";
import { FaRegSquarePlus } from "react-icons/fa6";
import { useState } from "react";

const RadioLabel = [
  "Credit / Debit / ATM Card",
  "Net Banking",
  "EMI (Easy Installment)",
  "Cash on Delivary",
];

const CartPayment = () => {
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState("");
  const [error, setError] = useState("");
  const onChange = (e) => {
    setCardDetails(e.target.value);
    setError("");
  };

  const RadioChange = (e) => {
    console.log(e.target.vaule);
  };

  const validate = () => {
    let newError = "";
    if (!cardDetails) {
      newError = "CVV is required";
    }
    return newError;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validated = validate();
    if (validated) {
      setError(validated);
    } else {
      navigate("/electronics");
    }
  };
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
          <form
            onSubmit={onSubmit}
            className="flex gap-3 items-center text-[13px] pt-3"
          >
            <p>Enter CVV :</p>
            <div>
              <input
                type="text"
                id="text"
                value={cardDetails}
                onChange={onChange}
                className="bg-inherit block w-32 rounded-md border border-[#979797] py-1 px-3 focus:ring-[#979797] sm:text-sm sm:leading-6 "
              />
              {error && (
                <p className="text-red-500 text-sm font-semibold mt-2">
                  {error}
                </p> // Error message
              )}
            </div>
            <button
              type="submit"
              className="px-3 py-2 bg-[#6F64F8] rounded-md font-semibold"
            >
              CONTINUE
            </button>
          </form>
        </div>
        <div className="border-b border-[#E4E4E4] py-3 w-full">
          {RadioLabel.map((label, index) => (
            <div key={index} className="flex gap-3 items-center py-1">
              <input
                type="radio"
                name={label}
                id={label}
                className="bg-inherit"
                onChange={RadioChange}
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
