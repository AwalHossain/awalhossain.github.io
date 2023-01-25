import { useEffect, useState } from "react";

const useProjects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [isProjectLoaded, setIsProjectLoaded] = useState(true);

  useEffect(() => {
    setIsProjectLoaded(true);
    setTimeout(() => {
      setIsProjectLoaded(false);
    }, 3000);
  }, []);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/AwalHossain/Portfolio/main/src/Pages/project.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllProjects(data);
        // setIsProjectLoaded(false);
      });
  }, []);

  return {
    allProjects,
    isProjectLoaded,
  };
};

export default useProjects;
