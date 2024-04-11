"use client";
import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-between px-5 py-5 bg-gray-200">
      <Link href="/" className="text-2xl text-black font-bold">
        Home
      </Link>
      <div>
        <Link href="/users" className="text-black mr-5">
          Users
        </Link>
        <Link href="/admin" className="text-black mr-5">
          Admin
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
