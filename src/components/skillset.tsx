import React from "react";
import Image from "next/image";

const SkillSet = () => {
  return (
    <div className="">
      {/* <h1 className="capitalize mt-20 mb-20  text-4xl text-center">
        Skills achieved over the years
      </h1> */}
      <div className="grid grid-cols-2 gap-8 mx-auto w-4/12 text-center font-semibold md:grid-cols-3">
        <Image
          src={"/html_logo.svg"}
          alt={"HTML Logo"}
          width={50}
          height={50}
        />
        <Image src={"/css-logo.svg"} alt={"CSS Logo"} width={50} height={50} />
        <Image src={"/js-logo.png"} alt={"JS Logo"} width={50} height={50} />
        <Image src={"/ts-logo.svg"} alt={"TS Logo"} width={50} height={50} />
        <Image
          src={"/react-logo.svg"}
          alt={"React Logo"}
          width={50}
          height={50}
        />

        <Image
          src={"/next-js-logo.svg"}
          alt={"next Logo"}
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default SkillSet;
