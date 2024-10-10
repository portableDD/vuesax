import ChatMenuNavbar from "./ChatMenuNavbar";
import { Chat } from "./ChatArrays";
import { Contact } from "./ChatArrays";
import SingleChat from "./SingleChat";
import SingleContact from "./SingleContact";

const ChatMenu = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-3">
        {/* search and Dp avtive */}
        <ChatMenuNavbar />
        {/* chat container */}
        <div className="w-full flex flex-col gap-2.5">
          <div className="">
            <p className="text-xl text-[#7E72F2] px-3">Chats</p>
            {Chat.map((text) => (
              <div key={text.messageNum} className="border-line">
                <SingleChat
                  name={text.name}
                  date={text.date}
                  img={text.img}
                  message={text.message}
                  messageNum={text.messageNum}
                />
              </div>
            ))}
          </div>
          <div>
            <p className="text-xl text-[#7E72F2] px-3">Contacts</p>
            {Contact.map((text) => (
              <div key={text.id} className="border-line">
                <SingleContact
                  name={text.name}
                  img={text.img}
                  message={text.message}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMenu;
