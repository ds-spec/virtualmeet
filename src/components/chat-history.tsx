import { History, Search } from "lucide-react";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { Input } from "./ui/input";

export default function ChatHistory() {
  return (
    <SidebarGroup>
      <div className="relative mb-3">
        <span className="absolute inset-y-0 left-3 flex items-center"><Search size={'1.1em'} /></span>
        <Input type="text" placeholder="Search your chat..." className="bg-transparent border border-gray-600 py-2 pl-9 rounded-full text-white text-sm placeholder-gray-500 outline-none" />
      </div>
      <SidebarMenu>
        <SidebarMenuItem className="">
          <SidebarMenuButton tooltip={"Chat History"}>
            <History size={"1.2em"} />
            <span>History</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}