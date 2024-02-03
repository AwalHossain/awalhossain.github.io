import React, { useEffect, useState } from 'react';
import { Project as ProjectType, Projects as ProjectsType } from '../../types/Project';
import { projectMapToArray } from '../../utils/projects';
import { getStringSearchParam, setSearchParam } from '../../utils/url';
import ProjectFilters, { SortOption, sortByEndDateAsc, sortByEndDateDesc, supportedSortOptions } from '../elements/ProjectFilters';
import ProjectsList from '../elements/ProjectsList';
import PageLayout from '../layouts/PageLayout';
import Badge from '../shared/Badge';
import PageHeader from '../shared/PageHeader';
import Row from '../shared/Row';
import SEO from '../shared/SEO';


type ProjectsScreenProps = {
    projects: ProjectsType
}

type ProjectSorter = {
    // Returns -1, 0, +1.
    sort: (a: ProjectType, b: ProjectType) => number,
};

type ProjectSorters = Record<SortOption, ProjectSorter>;

const SORT_PARAM_NAME = 'sort';

// @ts-ignore
const projectSorters: ProjectSorters = {
    [sortByEndDateDesc]: {
        sort: (a: ProjectType, b: ProjectType): number => {
            if (!a?.endDate || !b.endDate || a.endDate === b.endDate) {
                return 0;
            }
            return a.endDate > b.endDate ? -1 : 1;
        },
    },
    [sortByEndDateAsc]: {
        sort: (a: ProjectType, b: ProjectType): number => {
            if (!a?.endDate || !b.endDate || a.endDate === b.endDate) {
                return 0;
            }
            return a.endDate < b.endDate ? -1 : 1;
        },
    },

};

const getDefaultSortOption = (): SortOption => {
    const defaultOption = sortByEndDateDesc;
    // @ts-ignore
    const sortFromURL: SortOption = getStringSearchParam(SORT_PARAM_NAME, defaultOption);
    if (supportedSortOptions.includes(sortFromURL)) {
        return sortFromURL;
    }
    return defaultOption;
};

console.log(getDefaultSortOption(), "defaultOption");


const ProjectScreens = (props: ProjectsScreenProps): React.ReactElement => {
    const { projects } = props;

    const [sortBy, setSortBy] = useState<SortOption>(getDefaultSortOption());
    const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(
        projectMapToArray(projects),
    );



    const onSort = (newSortOption: SortOption): void => {
        setSearchParam(SORT_PARAM_NAME, newSortOption);
        setSortBy(newSortOption);
    };

    useEffect(() => {
        const sortedProjects = [...filteredProjects].sort(projectSorters[sortBy].sort);
        setFilteredProjects(sortedProjects);
        console.log([...filteredProjects].sort(projectSorters[sortBy].sort), "filteredProjects new one");
    }, [sortBy]);


    const projectsNum = filteredProjects.length;
    return (
        <PageLayout>
            <SEO
                title="Projects"
                description="Projects and experiments that help people learn"
            />
            <Row>
                <PageHeader>Projects</PageHeader>
                <Badge className="ml-3 self-start">{projectsNum}</Badge>
            </Row>
            <Row className="mb-6 justify-between">
                <ProjectFilters onSort={onSort} sortBy={sortBy} />
                <Row className="ml-3">
                    <div className="text-sm text-gray-500 mr-1">
                        Total stars:
                    </div>

                </Row>
            </Row>
            <ProjectsList projects={filteredProjects} />
        </PageLayout>
    )
}

export default ProjectScreens