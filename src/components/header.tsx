import { navlist } from "@/navlist";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="w-full sm:h-20 px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center ">
        <div>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
