import Card from "@/components/card";

const Projects = () => {
  return (
    <div className="p-8 mx-auto  mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <Card>
        <div className={"text-xl text-center"}>
          <a href="https://todo-app-dun-phi.vercel.app/" target="_blank">
            Todo- APP with Data Persistence
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Projects;
