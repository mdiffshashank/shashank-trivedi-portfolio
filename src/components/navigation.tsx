"use client";

import useScreenSize from "@/hooks/useScreenSize";
import { navlist } from "@/navlist";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navigation = () => {
  const pathname = usePathname();
  const { isMobile } = useScreenSize();
  const [isVisible, setIsvisible] = useState<boolean>();

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center ">
      {navlist.map((nav, index) => {
        const lastIndex = navlist.length - 1;
        return (
          <Link
            key={nav.title}
            href={nav.route}
            className={`inline-block text-xl px-2 py-4 sm:py-8 sm:px-8 hover:text-violet-700 ${
              pathname === nav.route
                ? " text-violet-700 border-b-2 border-violet-700"
                : ""
            } ${nav.disabled ? "disabled" : ""}`}
          >
            {index !== lastIndex ? (
              <>{nav.title}</>
            ) : (
              <button className="btn">{nav.title}</button>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
