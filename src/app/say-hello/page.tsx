import { redirect } from "next/navigation";

export default async function SayHello() {
  async function sendMessage(formData: FormData) {
    "use server";
    redirect("/");
  }

  return (
    <div className="mx-auto w-full sm:8/12 mt-20 p-8">
      <div className="text-center mb-20">
        <h1 className="text-4xl tracking-wide">
          Thanks for taking the time to reach out. How can I help you ?
        </h1>
      </div>

      <form action={sendMessage}>
        <div className="grid gap-4 sm:gap-8 w-full sm:w-8/12 mx-auto">
          <label
            htmlFor="name"
            className=" text-xl text-gray-600 tracking-wide"
          >
            Name
          </label>

          <input
            type="text"
            name="name"
            id="name"
            required
            className="p-1 sm:p-4 rounded-sm outline-none peer"
          />

          <label
            htmlFor="email"
            className="text-xl  text-gray-600 tracking-wide"
          >
            Email
          </label>

          <input
            type="email"
            name="email"
            id="email"
            required
            className="p-1 sm:p-4 rounded-sm outline-none"
          />

          {/* <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p> */}

          <label
            htmlFor="message"
            className="text-xl text-gray-600 tracking-wide col-span-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="p-4 rounded-sm outline-none col-span-2 mb-12"
            rows={4}
          />
        </div>

        <div className="col-span-2 flex justify-center mb-10">
          <button type="submit" className="btn px-10">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
