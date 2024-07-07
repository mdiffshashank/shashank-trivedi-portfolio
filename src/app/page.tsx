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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
          repellendus quo? Perspiciatis quia dignissimos suscipit vitae dolor
          nam provident et laboriosam molestiae dolorem quaerat maiores debitis,
          enim temporibus! Assumenda cumque temporibus asperiores sint ipsa
          quisquam, fugiat quam dolorum dolore, saepe ea consequatur amet
          pariatur rem incidunt iste quod voluptate unde!
        </p>
      </div>

      <div className="mt-10 mx-auto text-center p-10">
        <h1 className="text-4xl mb-20">
          I'm proud to have woked in some awesome companies
        </h1>

        <div className="flex gap-4 w-full justify-center items-center">
          <Image
            src={"/epam_logo_light.svg"}
            alt={"EPAM Logo"}
            width={100}
            height={100}
            className="text-black"
          />
        </div>
      </div>
    </div>
  );
}
