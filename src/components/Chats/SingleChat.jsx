const SingleChat = ({ name, img, date, message, messageNum }) => {
  return (
    <div className="w-full px-2 py-3">
      <div className="w-full flex gap-2">
        {/* profile pics */}
        <div
          className="w-10 h-10 rounded-full bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        {/* message */}
        <div className="w-full py-1 px-1 ">
          {/* name and data */}
          <div className=" flex justify-between">
            <p className="font-semibold">{name}</p>
            <p className="text-xs">{date}</p>
          </div>
          {/* message and messageNum */}
          <div className="flex justify-between mt-1.5">
            <p className="font-semibold">{message}</p>
            <div className="w-5 h-5 bg-[#7E72F2] rounded-full text-xs flex justify-center items-center">
              {messageNum}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChat;
