import Link from "next/link";
import React from "react";
import Logo from "./logo";
import Navigation from "./navigation";
import dynamic from "next/dynamic";

const Header = () => {
  return (
    <header className="w-full sm:h-32 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center">
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
