import { useState } from "react";
import CardsNavbar from "@/components/Cards/CardsNavbar";
import Stepper from "@/components/Cards/Checkout/Stepper";
import Steps3 from "@/components/Cards/Checkout/Steps3";
import Steps2 from "@/components/Cards/Checkout/Steps2";
import Step1 from "@/components/Cards/Checkout/Step1";

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="w-full">
      <CardsNavbar big={"Checkout"} small={"Checkout"} />
      <Stepper currentStep={currentStep} goToStep={goToStep} />
      <div className="flex flex-col items-center">
        {/* Step Indicators */}
        {/* <div className="flex justify-between w-full my-5">
          <div
            className={`w-1/3 text-center py-2 rounded-lg ${
              currentStep >= 1 ? "bg-purple-500 text-white" : "bg-gray-300"
            }`}
          >
            1
          </div>
          <div
            className={`w-1/3 text-center py-2 rounded-lg ${
              currentStep >= 2 ? "bg-purple-500 text-white" : "bg-gray-300"
            }`}
          >
            2
          </div>
          <div
            className={`w-1/3 text-center py-2 rounded-lg ${
              currentStep === 3 ? "bg-purple-500 text-white" : "bg-gray-300"
            }`}
          >
            3
          </div>
        </div> */}

        {/* Conditional Rendering based on Step */}
        <div className="w-full ">
          {currentStep === 1 && (
            <div>
              {/* Cart Section */}
              <Step1 nextStep={nextStep} />
              {/* Add your Cart items here */}
            </div>
          )}

          {currentStep === 2 && (
            <div>
              {/* Address Section */}
              <Steps2 nextStep={nextStep} />
              {/* Add your Address form here */}
            </div>
          )}

          {currentStep === 3 && (
            <div className="py-5">
              {/* Payment Section */}
              <Steps3 />
              {/* Add your Payment options here */}
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
    </div>
  );
};

export default CheckoutPage;
