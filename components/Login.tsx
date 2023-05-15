"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div
      className="bg-[#11A37F] h-screen
        flex flex-col items-center text-center justify-center"
    >
      <Image
        src="https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png"
        alt="logo"
        width={100}
        height={100}
        className="mb-10"
      ></Image>
      <button 
      onClick={() => signIn("google", { callbackUrl: "http://localhost:3000" }) }
      className=" text-white font-bold text-3xl animate-pulse">
        Sign In To Use ChatGpt
      </button>
    </div>
  );
};

export default Login;
