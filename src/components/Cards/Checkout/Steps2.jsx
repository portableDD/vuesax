import CartForm from "./CartForm"
import CartFormOptions from "./CartFormOptions"

const Steps2 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 mt-5">
        <div className="xl:max-w-[70%] w-full">
          <CartForm />
        </div>
        <div className="rounded-md shadow-navbar bg-contentBgColor py-3 px-3 w-full xl:max-w-[30%] h-64 mt-3">
          <CartFormOptions />
        </div>
      </div>
  )
}

export default Steps2