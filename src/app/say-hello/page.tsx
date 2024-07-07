export default async function SayHello() {
  async function sendMessage(formData: FormData) {
    "use server";
  }

  return (
    <div className="mx-auto w-8/12 mt-20">
      <div className="text-center mb-20">
        <h1 className="text-4xl tracking-wide">
          Thanks for taking the time to reach out. How can I help you ?
        </h1>
      </div>

      <form action={sendMessage} className="">
        <div className="grid grid-cols-2 gap-8">
          <label htmlFor="name" className="text-xl text-gray-600 tracking-wide">
            Name
          </label>

          <label
            htmlFor="email"
            className="text-xl text-gray-600 tracking-wide"
          >
            Email
          </label>

          <input
            type="text"
            name="name"
            id="name"
            required
            className="p-4 rounded-sm outline-none"
          />

          <input
            type="text"
            name="email"
            id="email"
            required
            className="p-4 rounded-sm outline-none"
          />

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
          />
        </div>
        <div className="col-span-2 flex justify-center">
          <button className="btn px-10">Submit</button>
        </div>
      </form>
    </div>
  );
}
