'use client'

import { Calendar, History, Home, Inbox, Search, Settings, SquarePen } from "lucide-react";
import Image from "next/image";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from "./ui/sidebar";
import AIHeader from "./ai-header";
import ChatHistory from "./chat-history";
import UserFooter from "./user-footer";

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  console.log(props)
  const items = {
    chatItems: [
      {
        title: "History",
        url: "#",
        logo: <History size={"1.4em"} />
      },
      {
        title: "New Chat",
        url: "#",
        logo: <SquarePen size={"1.4em"} />
      }
    ],
    user: {
      name: "deep",
      email: "deep@gmail.com",
      image: "https://avatars.githubusercontent.com/u/12345678?v=4"
    }
  }
  return (
    <Sidebar className="bg-transparent" collapsible="icon" {...props}>
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