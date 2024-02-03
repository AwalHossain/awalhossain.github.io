import { BsFillInfoCircleFill } from '@react-icons/all-files/bs/BsFillInfoCircleFill';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { IoPlay } from '@react-icons/all-files/io5/IoPlay';
import React from 'react';
import { Link } from '../../types/Link';
import { Project as ProjectType } from '../../types/Project';
import { getProjectDetailsLink } from '../../utils/projects';
import Badge from '../shared/Badge';
import ButtonLink from '../shared/ButtonLink';
import Card from '../shared/Card';
import CardActions from '../shared/CardActions';
import CardContent from '../shared/CardContent';
import CardMedia from '../shared/CardMedia';
import CardTitle from '../shared/CardTitle';
import DateRange from '../shared/DateRange';
import FluidImage from '../shared/FluidImage';
import HyperLink from '../shared/HyperLink';
import Row from '../shared/Row';
import Tags from '../shared/Tags';

type ProjectPreviewProps = {
    project: ProjectType | null,
};

const tagsPerProject = 3;

const withAchievements = true;

const ProjectPreview = (props: ProjectPreviewProps): React.ReactElement | null => {
    const { project } = props;

    if (!project) {
        return null;
    }

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

    const defaultProjectUrl = project.archived ? undefined : getProjectDetailsLink(project.id);
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

    const archivedStamp = project?.archived ? (
        <CardActions>
            " Archived "
        </CardActions>
    ) : null;

    const actions = demoLink || sourceCodeClient || sourceCodeServer ? (
        <CardActions>
            {demoLink}
            <Row className="space-x-3">
                {sourceCodeClient}
                {sourceCodeServer}
            </Row>
        </CardActions>
    ) : null;

    const extraLinksList = project?.links && project?.links.length
        ? project?.links.map((extraLink: Link, linkIndex) => {
            return (
                <li key={linkIndex}>
                    <HyperLink
                        link={extraLink}
                        className="text-sm underline"
                        separatorClassName="w-1"
                        startEnhancer={(<BsFillInfoCircleFill size={14} />)}
                    >
                        {extraLink?.caption || 'Read more'}
                    </HyperLink>
                </li>
            );
        })
        : null;

    const achievementsLink = withAchievements
        && project?.details
        && project.details.length
        ? (
            <Row className="mt-3">
                <HyperLink
                    link={getProjectDetailsLink(project.id)}
                    className="text-sm underline"
                    separatorClassName="w-1"
                // startEnhancer={(<GiAchievement size={18} />)}
                >
                    Details
                </HyperLink>
                <Badge className="ml-2">
                    <small>{project.details.length}</small>
                </Badge>
            </Row>
        )
        : null;


    const externalLinks = extraLinksList ? (
        <ul className="mt-3">
            {extraLinksList}
        </ul>
    ) : null;


    return (
        <Card>
            <CardMedia link={defaultProjectUrl}>
                {projectCover}
            </CardMedia>
            <CardContent>
                <CardTitle link={defaultProjectUrl}>
                    {project.name}
                </CardTitle>
                <Row className="mb-3 justify-between">
                    <div>
                        {projectDates}
                    </div>
                </Row>
                {projectSummary}
                {projectTags}
                {externalLinks}
            </CardContent>
            {actions}
            {archivedStamp}
        </Card>
    );


}


export default ProjectPreview;