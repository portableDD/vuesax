import { FiHome, FiSettings } from "react-icons/fi";
import { TfiAngleDoubleRight } from "react-icons/tfi";

const CardsNavbar = ({ big, small }) => {
  return (
    <div className="w-full flex justify-between items-center">
      {/* left */}
      <div className="w-full flex items-center gap-1 md:gap-2 py-2 font-semibold text-xs">
        <p className="text-base md:text-xl pr-2 md:pr-4 border-r  border-[#979797]">
          {big}
        </p>
        <FiHome className="text-logoColor text-lg" />
        <TfiAngleDoubleRight className="hidden md:block" />
        <p className="hidden text-logoColor md:block">Card</p>
        <TfiAngleDoubleRight className="" />
        <p>{small}</p>
      </div>
      {/* right */}
      <div className="w-7 h-7 rounded-full flex justify-center items-center bg-logoColor">
        <FiSettings />
      </div>
    </div>
  );
};

export default CardsNavbar;
