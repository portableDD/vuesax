import { useState } from "react";
import CardsNavbar from "@/components/Cards/CardsNavbar";
import Stepper from "@/components/Cards/Checkout/Stepper";
import Steps3 from "@/components/Cards/Checkout/Steps3";
import Steps2 from "@/components/Cards/Checkout/Steps2";
import Step1 from "@/components/Cards/Checkout/Step1";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppState from "@/Features/AllContext";

const CheckoutPage = () => {
  const { state } = useContext(AppState);
  const { cart } = state;
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  // const prevStep = () => {
  //   if (currentStep > 1) setCurrentStep(currentStep - 1);
  // };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="w-full">
      <CardsNavbar big={"Checkout"} small={"Checkout"} />
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-3  py-5">
          <MdAddShoppingCart className="text-9xl" />
          <h1 className="text-2xl font-semibold">Your Cart is Empty</h1>
          <p className="w-72 text-center">
            You have no items in your shopping cart. Let’s go buy something
          </p>
          <button className="w-72 py-3 px-3 bg-[#6F64F8] text-center rounded-md uppercase text-xs font-medium">
            <Link to={"/electronics"}>Continue Shopping</Link>
          </button>
        </div>
      ) : (
        <>
          <Stepper currentStep={currentStep} goToStep={goToStep} />
          <div className="flex flex-col items-center">
            {/* Conditional Rendering based on Step */}
            <div className="w-full ">
              {currentStep === 1 && (
                <div>
                  {/* Cart Section */}
                  <Step1 nextStep={nextStep} />
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  {/* Address Section */}
                  <Steps2 nextStep={nextStep} />
                </div>
              )}

              {currentStep === 3 && (
                <div className="py-5">
                  {/* Payment Section */}
                  <Steps3 />
                </div>
              )}

              {/* Navigation Buttons */}
              {/* <div className="flex justify-between mt-5">
            {currentStep > 1 && (
              <button
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 rounded-md"
              >
                Previous
              </button>
            )}
            {currentStep < 3 && (
              <button
                onClick={nextStep}
                className="px-4 py-2 bg-purple-500 text-white rounded-md"
              >
                Next
              </button>
            )}
          </div> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
