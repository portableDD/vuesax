import StackedBar from "./StackedBar";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";


const StatisticClient = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className=" w-full lg:w-96 xl:w-[30%]">
          <div className="bg-neutral-100 dark:bg-contentBgColor rounded-md py-3 px-3">
            <p className="font-semibold">Browser Statistics</p>
            <div className="w-full py-3 mt-3">
              <div className="flex flex-col justify-between gap-6 w-full">
                {/* Google Chrome */}
                <div>
                  <div className="flex justify-between items-center font-semibold">
                    <p className="flex flex-col gap-1">
                      <span className="text-xs">Google Chrome</span>
                      <span className="">73%</span>
                    </p>
                    <p className="flex flex-col justify-end items-end gap-1">
                      <span>800 <FaArrowUp className="inline text-xs text-[#28C76F] align-middle" /></span>
                      <span className="text-xs">13:16</span>
                    </p>
                  </div>
                  <div className="bg-white rounded-full mt-1.5">
                    <div className="bg-[#7467F0] w-[73%] rounded-full py-0.5"></div>
                  </div>
                </div>
                {/* opera */}
                <div>
                  <div className="flex justify-between items-center font-semibold">
                    <p className="flex flex-col gap-1">
                      <span className="text-xs">Opera</span>
                      <span className="">8%</span>
                    </p>
                    <p className="flex flex-col justify-end items-end gap-1">
                      <span>-200 <FaArrowDown className="inline text-xs text-[#EA5455] align-middle" /></span>
                      <span className="text-xs">13:16</span>
                    </p>
                  </div>
                  <div className="bg-white rounded-full mt-1.5">
                    <div className="bg-[#7467F0] w-[8%] rounded-full py-0.5"></div>
                  </div>
                </div>
                {/* firefox */}
                <div>
                  <div className="flex justify-between items-center font-semibold">
                    <p className="flex flex-col gap-1">
                      <span className="text-xs">Firefox</span>
                      <span className="">19%</span>
                    </p>
                    <p className="flex flex-col justify-end items-end gap-1">
                      <span>100 <FaArrowUp className="inline text-xs text-[#28C76F] align-middle" /></span>
                      <span className="text-xs">13:16</span>
                    </p>
                  </div>
                  <div className="bg-white rounded-full mt-1.5">
                    <div className="bg-[#7467F0] w-[19%] rounded-full py-0.5"></div>
                  </div>
                </div>
                {/* Internet Explorer */}
                <div>
                  <div className="flex justify-between items-center font-semibold">
                    <p className="flex flex-col gap-1">
                      <span className="text-xs">Internet Explorer</span>
                      <span className="">27%</span>
                    </p>
                    <p className="flex flex-col justify-end items-end gap-1">
                      <span>-450 <FaArrowDown className="inline text-xs text-[#EA5455] align-middle" /></span>
                      <span className="text-xs">13:16</span>
                    </p>
                  </div>
                  <div className="bg-white rounded-full mt-1.5">
                    <div className="bg-[#7467F0] w-[27%] rounded-full py-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/5 xl:w-[70%]">
          <div className="bg-neutral-100 dark:bg-contentBgColor rounded-md py-3 px-3">
            <p className="font-semibold">Client Retention</p>
            <StackedBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticClient;
