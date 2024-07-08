import Avatar from "@/components/avatar";
import WorkHistory from "@/components/companies";
import HighlightButton from "@/components/highlight-button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-8 pt-8 w-full ">
        <h1 className="capitalize mt-20 mb-10 font-bold text-4xl">
          Frontend Developer. Trainer & Mentor
        </h1>
        <p className="text-2xl">
          I love frontend and write beautiful code on javascript.
        </p>

        <Avatar />

        <Image
          src={"/devices.svg"}
          alt={"Devices"}
          width={800}
          height={120}
          className="mt-20"
        />
      </div>

      <div className="w-full bg-violet-700 text-white text-xl h-[520px] pt-20 px-12 ">
        <h1 className="text-4xl text-center mb-10">
          Hi, I’m Shashank Trivedi. Nice to meet you.
        </h1>
        <p className=" text-center text-md mx-auto w-7/12">
          I create web applications in React, Next & Node.
        </p>
      </div>

      <div className="mt-10 mx-auto text-center p-10">
        <h1 className="text-4xl mb-20">
          I &apos;m proud to have woked in some awesome companies.
        </h1>
        <WorkHistory />
      </div>

      <div className="bg-slate-900 text-white w-10/12 mx-auto grid grid-cols-3 place-items-center h-[12rem] rounded-md relative -bottom-20 ">
        <h1 className="text-xl ">Start a project </h1>
        <p className="">
          Interested in working together? We should queue up a time to chat.
        </p>
        <HighlightButton />
      </div>
    </div>
  );
}
