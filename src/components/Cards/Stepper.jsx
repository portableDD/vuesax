// Stepper Component - Displays steps in a form wizard
const Stepper = ({ currentStep }) => {
    const steps = [
      { label: "Your details", description: "Name and email" },
      { label: "Choose a password", description: "Choose a secure password" },
      { label: "Invite your team", description: "Start collaborating" },
      { label: "Upload school's document", description: "For account verification" },
    ];
  
    return (
      <div className="flex items-center justify-between w-full max-w-4xl mx-auto mt-5">
        {steps.map((step, index) => (
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
        ))}
      </div>
    );
  };
  
  export default Stepper;