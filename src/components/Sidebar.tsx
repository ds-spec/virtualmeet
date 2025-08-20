import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { History, SearchIcon, SquarePen } from "lucide-react";
import { getServerSession } from "next-auth";
import AIHeader from "./ai-header";
import ChatHistory from "./chat-history";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "./ui/sidebar";
import UserFooter from "./user-footer";

export async function AppSidebar() {
  const session = await getServerSession(authOptions);
  console.log(session, "session in sidebar");
  if (!session?.user) return null;
  const items = {
    chatItems: [
      {
        title: "New Chat",
        url: "#",
        logo: <SquarePen size={"1.6em"} />
      },
      {
        title: "Search",
        url: "#",
        logo: <SearchIcon size={"1.6em"} />
      },
      {
        title: "History",
        url: "#",
        logo: <History size={"1.6em"} />
      },
    ],
    user: {
      name: "deep",
      email: "deep@gmail.com",
      image: "https://avatars.githubusercontent.com/u/12345678?v=4"
    }
  }
  return (
    <Sidebar className="bg-transparent" collapsible="icon">
      <SidebarHeader>
        <AIHeader />
      </SidebarHeader>
      <SidebarContent>
        <ChatHistory items={items.chatItems} />
      </SidebarContent>
      <SidebarFooter>
        <UserFooter user={items.user} />
      </SidebarFooter>
    </Sidebar>
  );
}