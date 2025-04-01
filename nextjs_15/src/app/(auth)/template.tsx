"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css"

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
  ];
  
export default function ({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const pathname = usePathname();
    const [input, setInput] = useState("");
    return(
        <>
          {navLinks.map((link)=>{
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/")
            return(
              <Link className={isActive ? "font-bold mr-4" :"text-blue-500 mr-4"} href={link.href}>{link.name}</Link>
            )
          })}
          {children}
        </>
    )
  }