import React from "react";
import Image from "next/image";

const SkillSet = () => {
  return (
    <div>
      <h1 className="capitalize mt-20 mb-20  text-4xl text-center">
        Skills achieved over the years
      </h1>
      <div className="grid grid-cols-5 gap-2 mx-auto w-7/12 text-center ">
        <Image src={"/js-logo.png"} alt={"JS Logo"} width={50} height={50} />

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
          className="border-2"
        />

        <Image
          src={"/ts-logo.svg"}
          alt={"TS Logo"}
          width={50}
          height={50}
          className="border-2"
        />
        <Image
          src={"/css-logo.svg"}
          alt={"CSS Logo"}
          width={50}
          height={50}
          className="border-2"
        />
      </div>
    </div>
  );
};

export default SkillSet;
