import Card from "@/components/card";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="mx-auto w-10/12 mt-20">
      <div className="p-8 mx-auto  mt-20 grid grid-cols-1 gap-4 w-full place-items-center">
        <Card>
          Get the details of
          <Link
            href="https://dev.to/mdiffshashank/corscomplete-guide-4o59"
            className="text-lg text-blue-95 underline p-4"
          >
            CORS.
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;
