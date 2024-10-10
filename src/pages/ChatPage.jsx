import AppFooter from "@/components/AppFooter";
import ChatBg from "../assets/img/chat-wallpaper.svg";
import ChatMenu from "@/components/Chats/ChatMenu";
import ChatMessages from "@/components/Chats/ChatMessages";

const ChatPage = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-3">
        <div className="flex border border-[#EBEBEBBA] rounded">
          <div className="hidden w-full lg:w-96 xl:w-[30%] lg:block ">
            <ChatMenu />
          </div>
          <div className="w-full lg:w-4/5 xl:w-[70%] ">
            <div
              className="w-full bg-cover h-full bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${ChatBg})` }}
            >
              <ChatMessages />
            </div>
          </div>
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default ChatPage;
