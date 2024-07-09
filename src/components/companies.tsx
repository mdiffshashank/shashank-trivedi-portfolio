import React from "react";
import Image from "next/image";

const WorkHistory = ({ hideTitle = false }: { hideTitle?: boolean }) => {
  return (
    <>
      {!hideTitle && (
        <h1 className="text-4xl mb-20">
          I &apos;m proud to have woked in some awesome companies.
        </h1>
      )}

      <div className="flex flex-wrap flex-col  sm:flex-row gap-12 w-full justify-center items-center my-8">
        <Image
          src={"/tcs-logo.svg"}
          alt={"TCS Logo"}
          width={200}
          height={200}
          className="text-black"
        />
        <h1 className="text-4xl tracking-tighter">Infosys</h1>

        <Image
          src={"/nagarro-logo.svg"}
          alt={"Nagarro Logo"}
          width={200}
          height={200}
          className="text-black"
        />
        <Image
          src={"/epam_logo_light.svg"}
          alt={"EPAM Logo"}
          width={120}
          height={120}
          className="text-black"
        />
      </div>
    </>
  );
};

export default WorkHistory;
