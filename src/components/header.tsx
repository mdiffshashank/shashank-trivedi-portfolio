import { navlist } from "@/navlist";
import Link from "next/link";
import React from "react";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="w-full sm:h-20 px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center ">
        <div>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>

        <nav className="flex flex-col sm:flex-row justify-between items-center ">
          {navlist.map((nav, index) => {
            const lastIndex = navlist.length - 1;
            return (
              <Link
                key={nav.title}
                href={nav.route}
                className="p-2 sm:p-8 hover:text-violet-700"
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
      </div>
    </header>
  );
};

export default Header;
