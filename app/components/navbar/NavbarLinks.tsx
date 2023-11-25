"use client"


import { FC } from "react";
import Link from "next/link";
import { useAuth } from "@/app/hooks/useAuthContent";

const NavbarLinks: FC = () => {
  const { currentUser } = useAuth();

  return (
    <>
      {currentUser && currentUser.email ? (
        <>
          <span className="ml-4 font-bold">{currentUser.email}</span>
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