"use client";

import { FC } from "react";
import Link from "next/link";
import { useAuth } from "@/app/hooks/useAuthContent";

const NavbarLinks: FC = () => {
  const { currentUser } = useAuth();

  return (
    <>
      {!currentUser ? (
        <>
          <li className="text-black text-xl">
            <Link href="/login">Login</Link>
          </li>
          <li className="text-black text-xl">
            <Link href="/register">Register</Link>
          </li>
        </>
      ) : (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {currentUser?.email}
        </p>
      )}
    </>
  );
};

export default NavbarLinks;
