import Introduction from "@/components/Intro";
import WorkHistory from "@/components/companies";
import Skills from "@/components/skillList";
import SkillSet from "@/components/skillset";
import { Backend, DBUsed, basics, buildTools, frameworks } from "@/lib/skills";
import React from "react";

const AboutPage = () => {
  return (
    <div className="mx-auto flex flex-col sm:flex-row ">
      <aside className="bg-violet-700 w-full lg:w-3/12 max-w-[400px] p-4 sm:p-8  mb-4 sm:mb-0">
        <h1 className="text-xl text-center sm:hidden mb-4 text-white ">
          Skills, Acquired
        </h1>
        <Skills skillList={basics} title="Fundamentals" />
        <Skills skillList={frameworks} title="Library & Frameworks" />
        <Skills skillList={buildTools} title="Build-Tools" />
        <Skills skillList={Backend} title="Backend" />
        <Skills skillList={DBUsed} title="Databases" />
      </aside>
      <main className="text-md sm:text-lg px-6 py-4 sm:px-16">
        <Introduction />

        <h1 className="text-2xl mt-14 m-2 text-center border-b-2 p-4 text-zinc-700">
          Work History
        </h1>
        <WorkHistory hideTitle />
        <h1 className="text-2xl mt-14 m-2 text-center border-b-2 p-4 text-zinc-700">
          favorite tech stack
        </h1>
        <SkillSet />
      </main>
    </div>
  );
};

export default AboutPage;
