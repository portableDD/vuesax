import { FaRegStar } from "react-icons/fa";

const Rating = () => {
  return (
    <div className="mt-3 text-[13px]">
      {/* full rating */}
      <div className="w-full flex justify-between">
        <div className="flex gap-2 items-center">
          <FaRegStar className="text-[#FFA84C]" />
          <FaRegStar className="text-[#FFA84C]" />
          <FaRegStar className="text-[#FFA84C]" />
          <FaRegStar className="text-[#FFA84C]" />
          <FaRegStar className="text-[#FFA84C]" />
          <span>& Up</span>
        </div>
        <span>8500</span>
      </div>
      {/* four star rating */}
      <div className="w-full flex justify-between mt-1.5">
        <div className="flex gap-2 items-center">
          <FaRegStar className="text-[#FFA84C]" />
          <FaRegStar className="text-[#FFA84C]" />
          <FaRegStar className="text-[#FFA84C]" />
          <FaRegStar className="text-[#FFA84C]" />
          <FaRegStar />
          <span>& Up</span>
        </div>
        <span>3250</span>
      </div>
      {/* three star rating */}
      <div className="w-full flex justify-between mt-1.5">
        <div className="flex gap-2 items-center">
          <FaRegStar className="text-[#FFA84C]" />
          <FaRegStar className="text-[#FFA84C]" />
          <FaRegStar className="text-[#FFA84C]" />
          <FaRegStar />
          <FaRegStar />
          <span>& Up</span>
        </div>
        <span>1120</span>
      </div>
      {/* two star rating*/}
      <div className="w-full flex justify-between mt-1.5">
        <div className="flex gap-2 items-center">
          <FaRegStar className="text-[#FFA84C]" />
          <FaRegStar className="text-[#FFA84C]" />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <span>& Up</span>
        </div>
        <span>3320</span>
      </div>
      {/* one star rating */}
      <div className="w-full flex justify-between mt-1.5">
        <div className="flex gap-2 items-center">
          <FaRegStar className="text-[#FFA84C]" />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <span>& Up</span>
        </div>
        <span>5452</span>
      </div>
    </div>
  );
};

export default Rating;
