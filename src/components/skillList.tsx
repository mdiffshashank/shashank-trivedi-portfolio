import React from "react";

const Skills = ({
  skillList,
  title,
}: {
  title: string;
  skillList: string[];
}) => {
  return (
    <div className="mb-4 text-white">
      <h1 className="text-lg ">{title}</h1>
      <ul className="flex flex-wrap *:rounded-full *:border-[4px] *:border-white *:bg-[#E6E6FA] *:px-3 *:py-0.5 *:m-1">
        {skillList.map((skill) => (
          <li key={skill} className="text-sm text-black">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
