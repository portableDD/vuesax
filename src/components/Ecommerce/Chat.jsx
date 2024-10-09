import { FiSend } from "react-icons/fi";
import DPright from "../../assets/img/dp-right.svg";
import Dpleft from "../../assets/img/dp-left.svg";

const Chat = () => {
  return (
    <div className="w-full mt-3">
      {/* housing the chat and input */}
      <div className="flex flex-col gap-5">
        {/* chat messaging */}
        <div className="flex flex-col gap-4 font-semibold">
          {/* chat 1 right */}
          <div className="flex justify-end items-end">
            <div className="flex gap-2">
              {/* message */}
              <div className="pt-2 px-3 bg-gradient-to-tr from-[#ADA4FF] to-[#7E72F2] rounded shadow-message ">
                <p>Chocolate cake</p>
              </div>
              {/* profile pics */}
              <div
                className="w-10 h-10 rounded-full bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${DPright})` }}
              ></div>
            </div>
          </div>
          {/* chat 1 left */}
          <div className="flex justify-start items-start">
            <div className="flex gap-2">
              {/* profile pics */}
              <div
                className="w-10 h-10 rounded-full bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${Dpleft})` }}
              ></div>
              {/* message */}
              <div className="py-1 px-3 border border-white rounded shadow-message align-middle ">
                <p className="">Donut sweet pie oat cake dragée fruitcake</p>
              </div>
            </div>
          </div>
          {/* chat 2 right */}
          <div className="flex justify-end items-end">
            <div className="flex gap-2">
              {/* message */}
              <div className="pt-2 px-3 bg-gradient-to-tr from-[#ADA4FF] to-[#7E72F2] rounded shadow-message ">
                <p>Liquorice chocolate bar jelly beans icing</p>
              </div>
              {/* profile pics */}
              <div
                className="w-10 h-10 rounded-full bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${DPright})` }}
              ></div>
            </div>
          </div>
          {/* chat 2 left */}
          <div className="flex justify-start items-start">
            <div className="flex gap-2">
              {/* profile pics */}
              <div
                className="w-10 h-10 rounded-full bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${Dpleft})` }}
              ></div>
              {/* message */}
              <div className="py-1 px-3 border border-white rounded shadow-message align-middle ">
                <p className="">Powder toffee tootsie roll macaroon cupcake.</p>
              </div>
            </div>
          </div>
           {/* chat 3 right */}
           <div className="flex justify-end items-end">
            <div className="flex gap-2">
              {/* message */}
              <div className="pt-2 px-3 bg-gradient-to-tr from-[#ADA4FF] to-[#7E72F2] rounded shadow-message ">
                <p>Apple pie oat cake brownie</p>
              </div>
              {/* profile pics */}
              <div
                className="w-10 h-10 rounded-full bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${DPright})` }}
              ></div>
            </div>
          </div>
          {/* chat 3 left */}
          <div className="flex justify-start items-start">
            <div className="flex gap-2">
              {/* profile pics */}
              <div
                className="w-10 h-10 rounded-full bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${Dpleft})` }}
              ></div>
              {/* message */}
              <div className="py-1 px-3 border border-white rounded shadow-message align-middle ">
                <p className="">Biscuit cake jujubes carrot</p>
              </div>
            </div>
          </div>
        </div>
        {/* input div */}
        <div className="flex items-center gap-1">
          <input
            type="text"
            name="text"
            id="text"
            className="bg-inherit w-full rounded border border-[#CECECE] outline-none py-1.5 px-2 text-gray-900  placeholder:text-gray-400  sm:text-sm sm:leading-6"
            placeholder="Type your message"
          />
          <button className="px-2 py-2 bg-[#7961F9] rounded">
            <FiSend className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
