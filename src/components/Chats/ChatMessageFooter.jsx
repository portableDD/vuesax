const ChatMessageFooter = () => {
  return (
    <div className="w-full rounded-s-lg">
      <div className="bg-[#FFFFFF] border-t border-[#DFE4EA] py-2.5 px-2 border-se-lg">
        <div className="w-full flex gap-1 items-center">
          {/* input */}
          <input
            type="text"
            name="text"
            id="text"
            className="bg-[#F9F9F9] w-full rounded border border-[#DFE4EA] placeholder:text-xs outline-none py-2 px-2 text-[#2C2C2C]  placeholder:text-[#2C2C2C]  sm:text-sm sm:leading-6"
            placeholder="Type your message"
          />
          {/* button */}
          <button className="px-5 py-2 bg-logoColor rounded font-semibold">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatMessageFooter;
