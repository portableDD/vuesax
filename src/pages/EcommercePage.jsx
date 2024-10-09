import Hero from "@/components/Ecommerce/Hero"
import ProductChatWeather from "@/components/Ecommerce/ProductChatWeather"
import RevenueGoal from "@/components/Ecommerce/RevenueGoal"
import StatisticClient from "@/components/Ecommerce/StatisticClient"


const EcommercePage = () => {
  return (
    <section className="flex flex-col gap-3">
      <Hero />
      <RevenueGoal />
      <StatisticClient />
      <ProductChatWeather />
    </section>
  )
}

export default EcommercePage