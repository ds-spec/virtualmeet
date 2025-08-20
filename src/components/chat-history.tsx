'use client'

import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar";

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
      <SidebarMenu>
        {items?.map((item) => (
          <SidebarMenuItem key={item.title} className="">
            <SidebarMenuButton className={`cursor-pointer ${state === 'collapsed' ? 'hover:scale-110 transition-transform duration-100' : ''}`} tooltip={item.title} >
              {item.logo}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}