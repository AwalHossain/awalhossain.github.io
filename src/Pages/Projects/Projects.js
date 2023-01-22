import React from "react";
import useProjectContext from "../hooks/useProjectContext";
import SingalProject from "../Shared/SingalProject/SingalProject";
import Header from "./../Home/Header/Header";

const Projects = () => {
  const { allProjects } = useProjectContext();
  console.log(allProjects);
  return (
    <>
      <Header />
      {/* Project section here */}
      <section className="max-w-6xl mx-auto py-8">
        {/* projects header */}
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-3xl font-semibold relative">
            PROJECTS{" "}
            <span className="absolute text-xs font-semibold text-gray-800 ml-2 rounded px-1.5 bg-gray-300">
              {allProjects.length}
            </span>
          </h2>
          <h5 className="text-sm">Total Stars : 147k</h5>
        </div>
        {/* More projects */}
        <div className="grid lg:grid-cols-3 grid-col-1 gap-y-7 gap-x-5">
          {allProjects?.map((project) => {
            return <SingalProject project={project} key={project.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
