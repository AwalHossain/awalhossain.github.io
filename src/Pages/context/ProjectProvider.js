import React, { createContext } from "react";
import useProjects from "./../hooks/useProjects";

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const allProjects = useProjects();
  return (
    <ProjectContext.Provider value={allProjects}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
