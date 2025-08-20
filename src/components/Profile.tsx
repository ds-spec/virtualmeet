'use client';

import { Grip } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function Profile() {
  const { data: session } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {session?.user ? (
          <Avatar className="cursor-pointer">
            <AvatarImage src="/profile.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ) : <Grip size={"1.2em"} className="cursor-pointer dark:text-white hover:scale-110 transition-transform duration-300" />}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {session?.user ? (
          <>
            <Link href="/history"><DropdownMenuItem className="cursor-pointer">History</DropdownMenuItem></Link>
            <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>Logout</DropdownMenuItem>
          </>
        ) :
          <DropdownMenuItem onClick={() => signIn('google')}>Sign In
          </DropdownMenuItem>
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}