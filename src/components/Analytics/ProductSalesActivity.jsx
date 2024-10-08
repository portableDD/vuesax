import CircularChart from "./MulitplePieChart";
import { MdOutlineMoreVert } from "react-icons/md";
import Raderchart from "./Raderchart";
import ProgressBar from "./ProgressBar";

const ProductSalesActivity = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className="px-3 pt-3 bg-contentBgColor shadow-navbar rounded-md">
        <p className="font-semibold">Product Orders</p>
        <CircularChart />
      </div>
      <div className="px-3 pt-3 bg-contentBgColor shadow-navbar rounded-md">
        <div className="flex justify-between">
          <p className="flex flex-col ">
            <span className="font-semibold">Sales Stats</span>
            <span className="text-xs">Last 6 Months</span>
          </p>
          <MdOutlineMoreVert className="text-[#606060] text-xl" />
        </div>
        <Raderchart />
      </div>
      <div className="px-3 py-3 bg-contentBgColor shadow-navbar rounded-md">
        <div className="flex flex-col gap-4">
          <p className="font-semibold">Activity Timeline</p>
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};

export default ProductSalesActivity;
