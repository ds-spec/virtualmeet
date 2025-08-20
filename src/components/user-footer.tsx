import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, useSidebar } from "./ui/sidebar";

interface UserProps {
  name: string;
  email: string;
  image: string;
}
export default function UserFooter({ user }: { user: UserProps }) {
  const { isMobile } = useSidebar();
  const { data: session } = useSession()
  console.log(session, "profiles")
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer" asChild>
            <SidebarMenuButton color="red" size="lg">
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage src={session?.user?.image ?? '/profile.png'} alt={user.name} />
                <AvatarFallback className="rounded-lg">DE</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <div className="text-sm font-truncate font-semibold">{session?.user?.name}</div>
                <div className="text-xs font-truncate text-muted-foreground">{session?.user?.email}</div>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <SidebarTrigger className="cursor-pointer mt-2" />
          <DropdownMenuContent className="min-w-56 rounded-lg" align="start" sideOffset={4}>
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-1 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-4 w-4 rounded-full">
                  <AvatarImage src={session?.user?.image ?? ''} alt={session?.user?.name ?? ''} />
                  <AvatarFallback className="rounded-full">DE</AvatarFallback>
                </Avatar>
                <div className="text-left text-sm text-gray-400/50 text-clip">
                  {session?.user?.email}
                </div>
              </div>
              <DropdownMenuItem className="cursor-pointer">
                <LogOut />
                <span onClick={() => signOut()} className="ml-2">Logout</span>
              </DropdownMenuItem>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
