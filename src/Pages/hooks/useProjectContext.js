import { useContext } from "react";
import { ProjectContext } from "./../context/ProjectProvider";

const useProjectContext = () => {
  return useContext(ProjectContext);
};

export default useProjectContext;
