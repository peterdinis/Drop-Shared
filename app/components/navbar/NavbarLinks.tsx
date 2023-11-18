"use client"


import {FC} from "react";
import Link from "next/link";
import Cookies from "js-cookie";

const NavbarLinks: FC = () => {
  const userCredentialsString = Cookies.get("userCredentials");
  const currentUser = userCredentialsString ? JSON.parse(userCredentialsString) : null;

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