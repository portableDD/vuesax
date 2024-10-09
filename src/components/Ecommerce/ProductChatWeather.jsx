import Chat from "./Chat";
import ProductPieChart from "./ProductPieChart";
import Weather from "./Weather";

const ProductChatWeather = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* pie chart */}
        <div className="px-3 py-3 bg-contentBgColor shadow-navbar rounded-md">
          <p className="font-semibold">Product Orders</p>
          <ProductPieChart />
        </div>
        {/* chat messaging */}
        <div className="px-3 py-3 bg-contentBgColor shadow-navbar rounded-md">
          <p className="font-semibold">Chat</p>
          <Chat />
        </div>
        {/* map weather */}
        <div className="shadow-weather h-[400px] lg:h-auto">
          <Weather />
        </div>
      </div>
    </div>
  );
};

export default ProductChatWeather;
