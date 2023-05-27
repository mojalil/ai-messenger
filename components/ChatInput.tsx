"use client";
import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {
  chatId: string;
};


const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

//   use SWR to get the model
    const model = "text-davinci-003";
  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
        text: input,
        createdAt: serverTimestamp(),
        user: {
            _id: session?.user?.email!,
            name: session?.user?.name!,
            avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name!}`
        }

    }

    await addDoc(collection(db, "users", session?.user?.email!, "chats", chatId, "messages"), message)  

    // Add toaster notification here
    const notification = toast.loading("AI is thinking...")

    await fetch('/api/askQuestion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: input, chatId,model, session
        })
    }).then(() => {
        // Add toaster notification here
        toast.success("AI has responded!", {id: notification})
    }) 



  };



  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form className="p-5 space-x-5 flex" onSubmit={sendMessage}>
        <input
          className="flex-1 bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          type="text"
          placeholder="Type your message here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          disabled={!prompt || !session}
          className="bg-[#1da1f2] text-white rounded-full p-2 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
        >
          <PaperAirplaneIcon className="h-4 w-4  -rotate-45" />
        </button>
      </form>
      <div>{/* Model Selection */}</div>
    </div>
  );
};

export default ChatInput;
