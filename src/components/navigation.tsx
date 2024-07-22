"use client";

import { navlist } from "@/navlist";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

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
