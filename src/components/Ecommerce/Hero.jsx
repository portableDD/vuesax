import AreaChartComp from "../AreaChart";
import {
  FiShoppingBag,
  FiUsers,
  FiDollarSign,
  FiShoppingCart,
} from "react-icons/fi";

import { Subscribers, Order, revenue, quarterly } from "./ChartsArrays";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* first chart */}
        <div className="bg-contentBgColor rounded-md">
          <AreaChartComp
            id="colorUv"
            data={Subscribers}
            dataKey="Subscribers"
            Icon={FiUsers}
            bgColor="#D5D1FB"
            iconColor="#7E72F2"
            small="Subscribers Gained"
            bold="92.6k"
            stopColor2="#2B3253"
            stopColor1="#B7B1F7FF"
            stroke="#7E72F2"
          />
        </div>
        {/* second chart */}
        <div className="bg-contentBgColor rounded-md">
          <AreaChartComp
            id="colorReve"
            data={revenue}
            dataKey="revenue"
            Icon={FiDollarSign}
            bgColor="#E6F7EE"
            iconColor="#2DCD7A"
            small="Revenue Generated"
            bold="97.5k"
            stopColor1="#41E590"
            stopColor2="#2DCD7A1C"
            stroke="#2DCD7A"
          />
        </div>
        {/* third chat */}
        <div className="bg-contentBgColor rounded-md">
          <AreaChartComp
            id="colorQur"
            data={quarterly}
            dataKey="quarter"
            Icon={FiShoppingCart}
            bgColor="#FCEAEA"
            iconColor="#ED5F5F"
            small="Quarterly Sales"
            bold="36%"
            stopColor1="#FF7F7F"
            stopColor2="#EA545517"
            stroke="#EA5455"
          />
        </div>
        {/* fourth chart */}
        <div className="bg-contentBgColor rounded-md">
          <AreaChartComp
            id="colorOrder"
            data={Order}
            dataKey="order"
            Icon={FiShoppingBag}
            bgColor="#FFDFC2"
            iconColor="#FF9F43"
            small="Orders Received"
            bold="97.5K"
            stopColor1="#FFC089"
            stopColor2="#2B3253"
            stroke="#FF9F43"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
