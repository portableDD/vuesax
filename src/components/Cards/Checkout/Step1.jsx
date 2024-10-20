import Cart from "./Cart"
import CartOptions from "./CartOptions"

const Step1 = ({nextStep}) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 mt-5">
        <div className="xl:max-w-[70%] w-full">
          <Cart />
        </div>
        <div className="rounded-md shadow-navbar bg-neutral-100 dark:bg-contentBgColor py-3 px-3 w-full xl:max-w-[30%] h-80 mt-3">
          <CartOptions next={nextStep} />
        </div>
      </div>
  )
}

export default Step1