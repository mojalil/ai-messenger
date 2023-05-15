"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />
          <div>{/* Model Selection */}</div>

          {/* Map throgh he Chart rows here */}
        </div>
      </div>
      {session && (
        // on hover change cursor to pointer
        
        <div className="flex flex-col text-slate-200/50 text-center hover:cursor-pointer hover:bg-slate-200/10 
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
