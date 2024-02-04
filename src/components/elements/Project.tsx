import { BiInfoCircle } from '@react-icons/all-files/bi/BiInfoCircle';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { IoPlay } from '@react-icons/all-files/io5/IoPlay';
import React from 'react';
import { Link } from '../../types/Link';
import { Project as ProjectType } from '../../types/Project';
import ButtonLink from '../shared/ButtonLink';
import Card from '../shared/Card';
import CardMedia from '../shared/CardMedia';
import DateRange from '../shared/DateRange';
import FluidImage from '../shared/FluidImage';
import HyperLink from '../shared/HyperLink';
import Row from '../shared/Row';
import Tags from '../shared/Tags';
import PhotoGrids from './PhotoGrids';

type ProjectProps = {
    project: ProjectType
}

const tagsPerProject = 5;

const Project = (props: ProjectProps): React.ReactElement | null => {
  const { project } = props;

  const projectTags = project?.tags ? (
    <div>
      <Tags tags={project.tags} numToShow={tagsPerProject} />
    </div>
  ) : null;
  const projectDates = (
    <DateRange
      startDate={project.startDate}
      endDate={project.endDate}
      className="text-xs text-gray-500"
    />
  );

  /* eslint-disable react/no-array-index-key */
  const projectSummaryLines = project.summary ? project.summary.map(
    (summaryLine: string | null, index: number) => (
      <p key={index}>
        {summaryLine}
      </p>
    ),
  ) : null;

  const projectSummary = projectSummaryLines ? (
    <div className="mb-3 font-light">
      {projectSummaryLines}
    </div>
  ) : null;

  const defaultProjectUrl = project.archived ? undefined : project.demoURL;
  const demoLink = project.demoURL && !project.archived ? (
    <ButtonLink
      link={project.demoURL}
      startEnhancer={<IoPlay />}
      className="mr-4"
    >
      Demo
    </ButtonLink>
  ) : null;

  const sourceCodeClient = project.client && !project.archived ? (
    <ButtonLink
      link={project.client}
      startEnhancer={<FaGithub />}
    >
      Client
    </ButtonLink>
  ) : null;

  const sourceCodeServer = project.server && !project.archived ? (
    <ButtonLink
      link={project.server}
      startEnhancer={<FaGithub />}
    >
      Server
    </ButtonLink>
  ) : null;

  const projectCover = project.cover ? (
    <FluidImage image={project.cover} />
  ) : null;

  const projectCoverCard = (
    <div className="mb-6">
      <Card>
        <CardMedia link={defaultProjectUrl} className="h-96">
          {projectCover}
        </CardMedia>
      </Card>
    </div>
  );

  const archivedStamp = project?.archived ? (
    <Row className="py-6">
      "Archived"
    </Row>
  ) : null;

  const actions = demoLink || sourceCodeClient ? (
    <Row className="py-6">
      {demoLink}
      <Row className="space-x-4">
        {sourceCodeClient}
        {sourceCodeServer}
      </Row>
    </Row>
  ) : null;

  const extraLinksList = project?.links && project?.links.length
    ? project?.links.map((extraLink: Link, linkIndex) => {
      return (
        <li key={linkIndex}>
          <HyperLink
            link={extraLink}
            className="text-sm underline"
            startEnhancer={(<BiInfoCircle size={14} />)}
          >
            {extraLink?.caption || 'Read more'}
          </HyperLink>
        </li>
      );
    })
    : null;

  const externalLinks = extraLinksList ? (
    <ul className="mt-3">
      {extraLinksList}
    </ul>
  ) : null;

  const projectDatesAndStars = (
    <Row className="mb-3 justify-between">
      <div>
        {projectDates}
      </div>
    </Row>
  );

  const projectAchievements = (
    <PhotoGrids
      details={project?.details}
    />
  );

  return (
    <>
      {projectCoverCard}
      {projectDatesAndStars}
      {projectSummary}
      {projectTags}
      {externalLinks}
      {actions}
      {archivedStamp}
      {projectAchievements}
    </>
  );
};

export default Project;
