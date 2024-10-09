import BgImage from "../../assets/img/Rectangle.svg";
import { FiCloudRain } from "react-icons/fi";
import { WiDegrees } from "react-icons/wi";

const Weather = () => {
  return (
    <div
      className="w-full bg-cover h-full bg-center bg-no-repeat  rounded-md "
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* overlay */}
      <div className="bg-[#0000009C] h-full  rounded-md ">
        <div className="flex flex-col justify-between h-full py-3 px-3 ">
          {/* weather */}
          <div className="flex flex-col justify-center gap-4 w-64 mx-auto pt-5">
            <p className="flex flex-col gap-0.5 items-center">
              <span className="font-semibold text-xl">Snowy</span>
              <span className="text-xs">New York</span>
            </p>
            <div className="flex justify-between align-middle items-center font-semibold ">
              <FiCloudRain className="text-5xl" />
              <p>
                <span className="text-4xl -mr-7">-6 </span>
                <WiDegrees className="inline text-6xl" />
              </p>
            </div>
          </div>
          {/* description */}
          <div className="">
            {/* Precipitation */}
            <div className="flex justify-between item-center py-0.5">
              {/* left */}
              <span className="font-semibold">Precipitation</span>
              {/* right */}
              <span>48%</span>
            </div>
            {/* Humidity */}
            <div className="flex justify-between item-center py-0.5">
              {/* left */}
              <span className="font-semibold">Humidity</span>
              {/* right */}
              <span>60%</span>
            </div>
            {/* Wind */}
            <div className="flex justify-between item-center py-0.5">
              {/* left */}
              <span className="font-semibold">Wind</span>
              {/* right */}
              <span>23 km/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
