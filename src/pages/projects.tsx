import React from 'react';

import ProjectScreens from '../components/screens/ProjectScreens';
import { projects } from '../data/projects';

const Projects = (): React.ReactElement => {
  return (
    <ProjectScreens projects={projects} />
  );
};

export default Projects;
