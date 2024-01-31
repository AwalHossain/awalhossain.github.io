import React from 'react'
import { Project as ProjectType } from '../../types/Project'
import Project from '../elements/Project'
import PageLayout from '../layouts/PageLayout'
import Alert, { ErrorAlert } from '../shared/Alert'
import Badge from '../shared/Badge'
import PageHeader from '../shared/PageHeader'
import Row from '../shared/Row'
import SEO from '../shared/SEO'

type ProjectProps = {
    project: ProjectType | null,
}

const ProjectScreen = (props: ProjectProps): React.ReactElement | null => {
    const { project } = props

    if (!project) {
        return (
            <Alert type={ErrorAlert}>
                Project not found
            </Alert>
        );
    }

    return (
        <PageLayout>
            <SEO
                title={project?.name || ''}
                description={project?.summary && project?.summary.length ? project.summary[0] : ''}
            />
            <Row
            >
                <PageHeader>{project.name}</PageHeader>
                <Badge className="ml-3 self-start">project</Badge>
            </Row>
            <Project project={project} />
        </PageLayout>
    )
}

export default ProjectScreen