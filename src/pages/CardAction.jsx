import AppFooter from "@/components/AppFooter"
import CardsNavbar from "@/components/Cards/CardsNavbar"

const CardAction = () => {
  return (
    <div className="h-[87.3vh] flex justify-between flex-col">
      <CardsNavbar big={'Card Actions'} small={'Card Actions'} />
      <AppFooter />
    </div>
    
  )
}

export default CardAction