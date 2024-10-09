import { FiSettings } from "react-icons/fi";
import { MdOutlineInfo } from "react-icons/md";
import LineChartComp from "./LineChart";
import GoalPieChart from "./GoalPieChart";

const RevenueGoal = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-4/5 xl:w-[70%]">
          <div className="bg-contentBgColor rounded-md py-3 px-3">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Revenue</p>
              <FiSettings />
            </div>
            <LineChartComp />
          </div>
        </div>
        <div className="bg-contentBgColor rounded-md w-full lg:w-96 xl:w-[30%] py-3 px-3">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Goal Overview</p>
            <MdOutlineInfo />
          </div>
          <GoalPieChart />
          <div>
            {/* divider */}
            <div className="border-t border-[#E3E3E3] opacity-15"></div>
                {/* content */}
            <div className=" flex justify-evenly">
                {/* first content */}
              <div className="py-3">
                <p className="flex flex-col justify-start items-center font-semibold text-base">
                  <span >Completed</span>
                  <span >786,617</span>
                </p>
              </div>
              {/* divider */}
              <span className="border-l border-[#E3E3E3] opacity-15"></span>
              {/* second content */}
              <div className="py-3">
                <p className="flex flex-col justify-start items-center font-semibold text-base">
                  <span>In Progress</span>
                  <span>13,561</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueGoal;
