'use client'

import { Calendar, History, Home, Inbox, Search, Settings, SquarePen } from "lucide-react";
import Image from "next/image";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem } from "./ui/sidebar";
import AIHeader from "./ai-header";
import ChatHistory from "./chat-history";

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  console.log(props)
  const items = {
    chatItems: [
      {
        title: "History",
        url: "#",
        logo: History
      },
      {
        title: "New Chat",
        url: "#",
        logo: SquarePen
      }
    ]
  }
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AIHeader />
      </SidebarHeader>
      <SidebarContent>
        <ChatHistory />
      </SidebarContent>
    </Sidebar>
  );
}