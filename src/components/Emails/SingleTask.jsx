import { FaCircle } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const SingleTask = ({ subject, isSpan, spanText, color, message, isChecked, deleteTask, id, handleCheckboxChange }) => {
  return (
    <div>
      <div className="w-full flex justify-between items-center py-2 px-3">
        <div className="flex gap-3 items-center">
          <input
            id={id}
            name="comments"
            type="checkbox"
            checked={isChecked}
            className="h-4 w-4  rounded border-white"
            onChange={() => handleCheckboxChange(id)}
          />
          <p id="comments-description" className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:items-center">
            <span className="font-semibold">{subject}</span>
            {isSpan && (
              <span className="bg-[#0F1642] rounded-xl flex gap-2 items-center py-1 px-4 text-xs">
                <FaCircle className={`text-[${color}] inline`} />
                {spanText}
              </span>
            )}
          </p>
        </div>
        <div className="flex gap-3 item-center text-lg">
            <MdOutlineInfo className="text-[#2DCD7A]" />
            <FaRegStar className="text-[#FFA84C]" />
            <FiTrash onClick={() => deleteTask(id)} />
        </div>
      </div>
      <div className="-mt-1 ml-10 mb-3 text-[13px] w-full max-w-[220px] sm:max-w-[680px]">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SingleTask;
