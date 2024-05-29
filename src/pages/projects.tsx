import { PageProps } from 'gatsby';
import React from 'react';
import ProjectScreens from '../components/screens/ProjectScreens';
import { projects } from '../data/projects';
import { BlogPageQuery } from './__generated__/BlogPageQuery';

interface BlogProps extends PageProps {
  data: BlogPageQuery;
}

const Projects = (props: any): React.ReactElement => {
  const { data } = props;
  console.log(data, "data checking from projects");



  return <ProjectScreens projects={projects} />;
};

export default Projects;