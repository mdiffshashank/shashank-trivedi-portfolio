import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="">
      <Image
        src={"/shashank-trivedi.jpeg"}
        alt={"Avatar"}
        width={200}
        height={200}
        className="mt-8"
        priority
        style={{
          height: "200px",
          borderRadius: "50%",
          width: "200px",
        }}
      />
    </div>
  );
};

export default Avatar;
