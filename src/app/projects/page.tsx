import Card from "@/components/card";

const Projects = () => {
  return (
    <div className="p-8 mx-auto  mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <Card>
        <div className={"text-xl text-center"}>Formik components</div>
      </Card>
      <Card>
        <div className={"text-xl text-center"}>React-form-hook</div>
      </Card>
      <Card>
        <div className={"text-xl text-center"}> @toolkit/Redux</div>
      </Card>
      <Card>
        <div className={"text-xl text-center"}>Next.JS</div>
      </Card>
      <Card>
        <div className={"text-xl text-center"}>Microfrontend</div>
      </Card>
      <Card>
        <div className={"text-xl text-center"}>Angular</div>
      </Card>
      <Card>
        <div className={"text-xl text-center"}> Material UI</div>
      </Card>
      <Card>
        <div className={"text-xl text-center"}>Ecom</div>
      </Card>
    </div>
  );
};

export default Projects;
