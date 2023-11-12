"use client";

import { FC } from "react";
import Link from "next/link";

const NavbarLinks: FC = () => {
  return (
    <>
      <li className="text-black text-xl">
        <Link href="/login">Login</Link>
      </li>
      <li className="text-black text-xl">
        <Link href="/register">Register</Link>
      </li>
    </>
  );
};

export default NavbarLinks;
