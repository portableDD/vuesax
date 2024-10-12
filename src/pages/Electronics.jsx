import CardsNavbar from "@/components/Cards/CardsNavbar"
import PrdouctFooter from "@/components/Cards/PrdouctFooter"
import ProductNavbar from "@/components/Cards/ProductNavbar"
import ProductSidebar from "@/components/Cards/ProductSidebar"
import { Outlet } from "react-router-dom"


const Electronics = () => {
  return (
    <div className="w-full flex flex-col justify-between h-full">
      {/* navbar */}
      <CardsNavbar big={'Card Actions'} small={'Electronics'} />
      {/* product container */}
      <main className="flex gap-3 mt-5">
        <ProductSidebar />
        <div className=" flex flex-col gap-3 w-full lg:w-4/5 xl:w-[75%]">
          <ProductNavbar />
          <Outlet />
        </div>
      </main>
      {/* footer pagination */}
      <PrdouctFooter />
    </div>
  )
}

export default Electronics