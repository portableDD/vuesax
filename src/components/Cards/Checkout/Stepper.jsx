// Stepper Component - Displays steps in a form wizard
const Stepper = ({ currentStep, goToStep }) => {
  return (
    <div className=" relative flex items-center justify-between w-full max-w-4xl mx-auto mt-5 font-semibold overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 h-1 bg-[#6F64F8] z-0"
      />
      <div
        onClick={() => goToStep(1)}
        className={`flex items-center justify-center w-10 h-10 rounded-full z-30 cursor-pointer ${
          currentStep >= 1
            ? "bg-[#6F64F8] text-white"
            : "border-2 border-white text-white "
        }`}
      >
        1
      </div>
      <div
        onClick={() => goToStep(2)}
        className={`flex items-center justify-center w-10 h-10 rounded-full z-30 cursor-pointer ${
          currentStep >= 2
            ? "bg-[#6F64F8] text-white"
            : "border-2 border-white text-white bg-neutral-content"
        }`}
      >
        2
      </div>
      <div
        onClick={() => goToStep(3)}
        className={`flex items-center justify-center w-10 h-10 rounded-full z-30 cursor-pointer ${
          currentStep === 3
            ? "bg-[#6F64F8] text-white"
            : "border-2 border-white text-white bg-neutral-content"
        }`}
      >
        3
      </div>
      {/* {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            <div className="relative flex items-center justify-center">
              {index > 0 && (
                <div className="absolute left-[-50%] top-[50%]  h-[2px] bg-green-300" />
              )}
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full text-white ${
                  currentStep > index + 1
                    ? "bg-blue-500"
                    : currentStep === index + 1
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }`}
              >
                {currentStep > index + 1 ? (
                  <span>&#10003;</span> // Tick mark for completed steps
                ) : (
                  <span>{index + 1}</span> // Step number for active and future steps
                )}
              </div>
            </div>
           
          </div>
        ))} */}
    </div>
  );
};

export default Stepper;
