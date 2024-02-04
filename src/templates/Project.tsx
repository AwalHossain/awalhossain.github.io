import { PageProps } from 'gatsby';
import * as React from 'react';
import ProjectScreen from '../components/screens/ProjectScreen';
import { projects } from '../data/projects';
import { ProjectID, Project as ProjectType } from '../types/Project';

interface ProjectProps extends PageProps {
    pageContext: {
        projectID: ProjectID,
    },
}

const Project = (props: ProjectProps): React.ReactElement => {
  const { pageContext } = props;
  const { projectID = null } = pageContext;

  const project: ProjectType | null = projectID && (projectID in projects)
  // @ts-ignore
    ? projects[projectID]
    : null;

  return (
    <ProjectScreen project={project} />
  );
};

export default Project;
