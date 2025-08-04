import { History, LucideIcon, Search } from "lucide-react";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar";
import { Input } from "./ui/input";

interface ItemsProps {
  title: string;
  url: string;
  logo: React.ReactNode;
}

export default function ChatHistory({ items }: { items: ItemsProps[] }) {
  console.log(useSidebar())
  const { state } = useSidebar();
  return (
    <SidebarGroup>
      {/* <div className={`relative w-full mb-3 rounded-full ${state === "collapsed" ? ' bg-neutral-900' : 'bg-transparent'} `}>
        <div className="relative flex items-center justify-center shadow-sm bg-transparent">
          <span className="absolute left-3 flex items-center justify-center"><Search size={'1.1em'} /></span>
          <Input type="text" placeholder="Search your chat..." className={`text-left ${state === "collapsed" ? 'hidden' : 'block'} rounded-full text-white text-sm placeholder-gray-500 outline-none border  border-gray-600`} />
        </div>
      </div> */}
      <SidebarMenu>
        {items?.map((item) => (
          <SidebarMenuItem key={item.title} className="">
            <SidebarMenuButton className="cursor-pointer" tooltip={item.title}>
              {item.logo}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}