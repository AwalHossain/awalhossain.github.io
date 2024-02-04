import React from 'react';
import type { Link } from '../../types/Link';
import { routes } from '../constants/routes';
import HyperLink from './HyperLink';

const Greeting = (): React.ReactElement => {
  const projectsLink: Link = {
    url: `${routes.projects.path}/`,
  };

  const blogLink: Link = {
    url: `${routes.blog.path}/`,
  };

  const projectsLinkElement = (
    <span className="inline-block">
      <HyperLink link={projectsLink} className="underline font-semibold">projects</HyperLink>
    </span>
  );

  const blogLinkElement = (
    <span className="inline-block">
      <HyperLink link={blogLink} className="underline font-semibold">articles</HyperLink>
    </span>
  );

  return (
    <p className="font-light">
      Hi there!
      I&apos;m Awal Hossain, a seasoned Full Stack Web Developer with in-depth Proficiency in crafting exceptional web solutions.
      Most of my work & open-source {projectsLinkElement} are focused
      on one thing &ndash; <i>to learn in depth & help people learn</i>.
      I thrive in dynamic environments, readily embracing new challenges, and constantly expanding my knowledge. Staying ahead of industry trends is my commitment.
      I also write {blogLinkElement} about life, web-development
      and machine learning.
    </p>
  );
};

export default Greeting;
