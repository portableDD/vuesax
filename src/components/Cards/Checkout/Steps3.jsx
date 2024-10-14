import CartPayment from "./CartPayment"
import CartPaymentOptions from "./CartPaymentOptions"

const Steps3 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 mt-5">
        <div className="xl:max-w-[70%] w-full">
          <CartPayment />
        </div>
        <div className="rounded-md shadow-navbar bg-contentBgColor py-3 px-3 w-full xl:max-w-[30%] h-40 mt-3">
          <CartPaymentOptions />
        </div>
      </div>
  )
}

export default Steps3