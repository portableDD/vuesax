import { FiSearch } from "react-icons/fi";
import DP from "../../assets/img/Oval.svg";

const ChatMenuNavbar = () => {
  return (
    <div className="w-full border-b border-[#ADADAD]">
      <div className="pt-3  px-3 flex gap-3 mb-3">
        {/* profile pics */}
        <div>
          <div
            className="w-10 h-10 rounded-full bg-center bg-auto bg-no-repeat"
            style={{ backgroundImage: `url(${DP})` }}
          ></div>
          <div className="w-2 h-2 bg-green-500 rounded-full border border-white ml-auto -mt-3.5"></div>
        </div>
        {/* input saerch */}
        <div className="relative w-full rounded-md shadow-sm">
          <div className=" absolute inset-y-0 left-0 flex items-center pl-3">
            <FiSearch />
          </div>
          <input
            type="text"
            name="text"
            id="text"
            className="bg-inherit w-full rounded-full border border-[#CECECE] outline-none py-1.5 pl-10 px-2  placeholder:text-xs  placeholder:text-[#999999]  sm:text-sm"
            placeholder="Search or start a new chat"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatMenuNavbar;
