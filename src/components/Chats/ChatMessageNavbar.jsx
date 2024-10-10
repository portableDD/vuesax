import Chat1 from '../../assets/img/chatDp.svg'
import { FaRegStar } from "react-icons/fa";

const ChatMessageNavbar = () => {
  return (
    <div className="w-full  border-se-lg ">
      <div className="bg-[#F9F9F9] border-b border-[#DFE4EA] py-2.5 px-5 border-se-lg">
        <div className="w-full flex justify-between items-center">
          {/* profile pics and name */}
          <div className='flex gap-3 items-center'>
            {/* profile pics and active */}
            <div>
              <div
                className="w-10 h-10 rounded-full bg-center bg-auto bg-no-repeat"
                style={{ backgroundImage: `url(${Chat1})` }}
              ></div>
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full border border-white ml-auto -mt-3"></div>
            </div>
            {/* name */}
            <p className='text-[#2C2C2C] font-semibold'>Felecia Rower</p>
          </div>
          {/* favorite */}
          <FaRegStar className="text-[#FFA84C] text-xl" />
        </div>
      </div>
    </div>
  );
};

export default ChatMessageNavbar;
