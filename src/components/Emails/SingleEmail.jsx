import { FaCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const SingleEmail = ({ name, subject, img, color, message, date }) => {
  return (
    <div className="flex flex-col gap-0.5 ">
      {/* top */}
      <div className="w-full flex justify-between items-center  py-2 px-3">
        <div className="w-full flex gap-3 items-center">
          <div
            className="w-10 h-10 rounded-full bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className="w-full py-1 px-1 ">
            {/* name and date */}
            <div className="w-full flex justify-between">
              <p className="font-semibold">{name}</p>
              <p className="text-xs flex gap-1.5 items-center">
                <FaCircle className={`text-[${color}]`} />
                {date}
              </p>
            </div>
            {/* subject */}
            <div className="mt-0.5">
              <p className=" text-xs">{subject}</p>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="w-full py-2 px-4 -mt-3">
        <div className="flex gap-3 items-center">
          <div className="flex gap-2 items-center">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              className="h-4 w-4  rounded border-white"
            />
            <FaRegStar className="text-[#FFA84C]" />
          </div>
          <p className="text-[13px] max-w-[750px] w-full">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleEmail;
