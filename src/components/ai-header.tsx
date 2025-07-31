import Image from "next/image";
import { SidebarMenu, SidebarMenuItem } from "./ui/sidebar";

export default function AIHeader() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center gap-2 mt-2">
          <Image src="/logo.jpg" alt="Logo" width={32} height={32} className="rounded-full" />
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}