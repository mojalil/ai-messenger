import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {
  const text = message.data().text;
  const isChatGpt = message.data().user.name === "ChatGpt";
  return (
    <div 
    className={`py-5 text-white text-sm ${isChatGpt && "bg-[#434654]"}`}>
    <div className="flex space-x-5 px-10 max-2xl mx-auto">
      <img src={message.data().user.avatar} alt="" className=" h-8 w-8"></img>
      <p className="text-sm pt-1">{text}</p>
    </div>
    </div>
  );
};

export default Message;
