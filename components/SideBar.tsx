"use client";

import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "@/components/ChatRow";

const Sidebar = () => {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  console.log("chats", chats);
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />
          <div>{/* Model Selection */}</div>

          {/* Map throgh he Chart rows here */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        // on hover change cursor to pointer

        <div
          className="flex flex-col text-slate-200/50 text-center hover:cursor-pointer hover:bg-slate-200/10 
        p-2 rounded-md"
          onClick={() => signOut()}
        >
          {/* User Info */}
          Logged In: {session.user?.email}
          {/* Logout */}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
