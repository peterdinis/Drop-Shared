"use client";

import { FC } from "react";
import Link from "next/link";
import { useAuth } from "@/app/hooks/useAuthContent";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavbarLinks: FC = () => {
  const { currentUser } = useAuth();

  return (
    <>
      {currentUser && currentUser.email ? (
        <>
          <Avatar>
            <Link href="/dashboard">
              <AvatarImage src={currentUser?.photoURL as unknown as string} />
              <AvatarFallback>User</AvatarFallback>
            </Link>
          </Avatar>
        </>
      ) : (
        <>
          <li className="text-black text-xl">
            <Link href="/login">Login</Link>
          </li>
          <li className="text-black text-xl">
            <Link href="/register">Register</Link>
          </li>
        </>
      )}
    </>
  );
};

export default NavbarLinks;
