import { Message } from "./ChatArrays";
import SingleMessage from "./SingleMessage";

const Messages = () => {
  return (
    <div className="w-full h-full px-3">
      <div className="flex flex-col gap-3">
        {Message.map((message) => (
          <SingleMessage
            key={message.id}
            left={message.left}
            right={message.right}
            text={message.text}
            img={message.img}
            hasImage={message.hasImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Messages;
