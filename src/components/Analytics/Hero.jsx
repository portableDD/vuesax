import DecoreLeft from "../../assets/img/decore-left.svg";
import DecoreRight from "../../assets/img/decore-right.svg";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import AreaChartComp from "./AreaChart";

const Subscribers = [
  {
    name: "Page A",
    Subscribers: 25,
  },
  {
    name: "Page B",
    Subscribers: 48,
  },
  {
    name: "Page C",
    Subscribers: 35,
  },
  {
    name: "Page D",
    Subscribers: 60,
  },
  {
    name: "Page E",
    Subscribers: 38,
  },
  {
    name: "Page F",
    Subscribers: 75,
  },
  {
    name: "Page G",
    Subscribers: 69,
  },
];

const Order = [
  {
    name: "Page A",
    order: 30,
  },
  {
    name: "Page B",
    order: 55,
  },
  {
    name: "Page C",
    order: 25,
  },
  {
    name: "Page D",
    order: 55,
  },
  {
    name: "Page E",
    order: 15,
  },
  {
    name: "Page F",
    order: 40,
  },
  {
    name: "Page G",
    order: 20,
  },
];

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* congratulation card */}
      <div className="col-span-1 sm:col-span-2 ">
        <div className="bg-gradient-to-tr from-logoColor to-[#A59BFF] shadow-navbar rounded-md">
          {/* celebration imgs */}
          <div className="flex justify-between items-center">
            <div className="">
              <img
                src={DecoreLeft}
                alt="celebration image 1"
                className="w-28 md:w-36"
              />
            </div>
            <div className="">
              <img
                src={DecoreRight}
                alt="celebration image 2"
                className="w-28 md:w-36"
              />
            </div>
          </div>
          {/* awards imgs and congratulation message */}
          <div className="flex flex-col justify-center items-center gap-3 md:-mt-5 font-semibold px-2">
            {/* award icons */}
            <div className=" w-16 h-16 md:w-20 md:h-20 rounded-full bg-logoColor shadow-congrat flex justify-center items-center">
              <FiAward className="text-3xl md:text-4xl " />
            </div>
            {/* congartions message */}
            <p className="text-xl">Congratulations John</p>
            <p className="text-[10px] mb-5">
              You have done 57.6% more sales today. Check your new badge in your
              profile.
            </p>
          </div>
        </div>
      </div>
      {/* subscriber card */}
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
      {/* order card */}
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
        {/* <div className="px-5 py-3 flex flex-col justify-start font-semibold gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FFDFC2] flex justify-center items-center">
            <FiShoppingBag className="text-[#FF9F43] text-xl" />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-xl">97.5K</p>
            <p className="text-[10px]">Orders Received</p>
          </div>
        </div>
        <div style={{ width: "100%", height: "45%" }}>
          <ResponsiveContainer>
            <AreaChart data={Order}>
              <defs>
                <linearGradient id="colorOrder" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFC089" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#2B3253" stopOpacity={1} />
                </linearGradient>
              </defs>
              <Tooltip />
              <Area
                type="monotone"
                dataKey="order"
                stroke="#FF9F43"
                fillOpacity={1}
                fill="url(#colorOrder)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
