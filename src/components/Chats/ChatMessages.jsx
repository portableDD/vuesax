import ChatMessageFooter from "./ChatMessageFooter"
import ChatMessageNavbar from "./ChatMessageNavbar"
import Messages from "./Messages"


const ChatMessages = () => {
  return (
    <div className="flex flex-col justify-between gap-4 h-full">
        <ChatMessageNavbar />
        <Messages />
        <ChatMessageFooter/>
    </div>
  )
}

export default ChatMessages