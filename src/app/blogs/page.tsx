import Card from "@/components/card";

const Blogs = () => {
  return (
    <div className="mx-auto w-10/12 mt-20">
      <div className="p-8 mx-auto  mt-20 grid grid-cols-1 gap-4 w-full">
        <Card fullwidth>
          <div className={"text-xl text-center"}>CORS</div>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;
