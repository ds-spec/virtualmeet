'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Grid } from "lucide-react";
import Link from "next/link";

export default function Profile() {
  const { data: session } = useSession();
  console.log(session, "profiless")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {session?.user ? (
          <Avatar>
            <AvatarImage src="/profile.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ) : <Grid />}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {session?.user ? (
          <>
            <Link href="/history"><DropdownMenuItem>History</DropdownMenuItem></Link>
            <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
          </>
        ) :
          <DropdownMenuItem onClick={() => signIn('google')}>Sign In
          </DropdownMenuItem>
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}