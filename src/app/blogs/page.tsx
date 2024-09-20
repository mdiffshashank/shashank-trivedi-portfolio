import Card from "@/components/card";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="mx-auto w-10/12 mt-20">
      <div className=" mx-auto  mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 w-full place-items-center">
        <Card>
          Get the details of
          <Link
            href="https://dev.to/mdiffshashank/corscomplete-guide-4o59"
            className="text-lg text-blue-95 underline p-4"
          >
            CORS.
          </Link>
        </Card>
        <Card>
          Get the details of
          <Link
            href="https://dev.to/mdiffshashank/webpack-5-series-part-1-18m2"
            className="text-lg text-blue-95 underline p-4"
          >
            Webpack series
          </Link>
        </Card>
        <Card>
          Get the details of
          <Link
            href="https://dev.to/mdiffshashank/abortcontroller-with-fetch-jf0"
            className="text-lg text-blue-95 underline p-4"
          >
            Abort controller
          </Link>
        </Card>
        <Card>
          Get the details of
          <Link
            href="https://dev.to/mdiffshashank/jenkins-cicd-implementation-in-react-node-application-3gjd"
            className="text-lg text-blue-95 underline p-4"
          >
            Jenkins Pipeline Node + React
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;
