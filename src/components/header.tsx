import { navlist } from "@/navlist";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-20 px-8 py-8">
      <div className="flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <div className="flex  justify-center items-center size-12 bg-violet-800 rounded-sm text-white">
              S
            </div>
          </Link>
        </div>
        <nav>
          {navlist.map((nav, index) => {
            const lastIndex = navlist.length - 1;
            return (
              <Link
                key={nav.title}
                href={nav.route}
                className="p-8 hover:text-violet-700"
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
