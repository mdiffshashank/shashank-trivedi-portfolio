import Introduction from "@/components/Intro";
import WorkHistory from "@/components/companies";
import Skills from "@/components/skillList";
import SkillSet from "@/components/skillset";
import { Backend, DBUsed, basics, buildTools, frameworks } from "@/lib/skills";
import React from "react";

const AboutPage = () => {
  return (
    <div className="mx-auto flex flex-col sm:flex-row">
      <aside className="bg-[#D8BFD8] w-full md:w-3/12 max-w-[400px] p-8 shadow-md  shadow-slate-700">
        <Skills skillList={basics} title="Fundamentals" />
        <Skills skillList={frameworks} title="Library & Frameworks" />
        <Skills skillList={buildTools} title="Build-Tools" />
        <Skills skillList={Backend} title="Backend" />
        <Skills skillList={DBUsed} title="Databases" />
      </aside>
      <main>
        <Introduction />
        {/* <WorkHistory /> */}
        {/* <SkillSet /> */}
      </main>
    </div>
  );
};

export default AboutPage;
