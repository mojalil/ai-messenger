import Sidebar from "@/components/SideBar";
import "./globals.css";
import { Inter } from "next/font/google";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/[...nextauth]";
import Login from "@/components/Login";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Messenger",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {
            !session ? (
              <Login/>
            ) : (
              <div className="flex">
              {/* Sidebar */}
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <Sidebar />
              </div>
              {/* Notifications */}
              <div className="bg-[#343541] flex-1"> {children} </div>
            </div>
            )
          }
        </SessionProvider>
      </body>
    </html>
  );
}
