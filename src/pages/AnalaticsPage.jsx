import ProductSalesActivity from "@/components/Analytics/ProductSalesActivity";
import Hero from "../components/Analytics/Hero";
import MiddleSessionAndTicket from "../components/Analytics/MiddleSessionAndTicket";


const AnalaticsPage = () => {
  return (
    <section className="flex flex-col gap-3">
      <Hero />
      <MiddleSessionAndTicket />
      <ProductSalesActivity />
    </section>
  );
};

export default AnalaticsPage;
