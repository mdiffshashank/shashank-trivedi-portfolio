import Introduction from "@/components/Intro";
import WorkHistory from "@/components/companies";
import SkillSet from "@/components/skillset";
import React from "react";

const AboutPage = () => {
  return (
    <div className="mt-10 mx-auto text-center p-10 border-t-2">
      {/* <WorkHistory /> */}
      <Introduction />
      <SkillSet />
    </div>
  );
};

export default AboutPage;
