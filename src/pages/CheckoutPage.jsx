import CardsNavbar from "@/components/Cards/CardsNavbar";
import Stepper from "@/components/Cards/Stepper";
import Steps3 from "@/components/Cards/Checkout/Steps3";
import Steps2 from "@/components/Cards/Checkout/Steps2";
import Step1 from "@/components/Cards/Checkout/Step1";

const CheckoutPage = () => {
  return (
    <div className="w-full">
      <CardsNavbar big={"Checkout"} small={"Checkout"} />
      <Stepper />
    </div>
  );
};

export default CheckoutPage;
