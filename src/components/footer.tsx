import React from "react";
import Logo from "./logo";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full sm:h-96 bg-violet-700 text-white p-5 sm:p-20 pt-40 mx-auto text-center flex flex-col justify-center items-center">
      <Logo />

      <h1 className="text-xl tracking-wider mt-4">
        Living, learning, & leveling up one day at a time.
      </h1>
      <p className="text-lg mt-10">
        Handcrafted by Shashank <span>&#169; 2024</span>
      </p>
      <Link
        href="https://www.linkedin.com/in/shashank-trivedi-b9937550/"
        target="_blank"
      >
        <div className="mt-10 border-2 border-white rounded-full p-4">
          <Image
            alt="linkedin"
            src="./linkedin-logo.svg"
            width={20}
            height={20}
            className=""
          />
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
