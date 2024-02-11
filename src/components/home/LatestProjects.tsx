import { Link } from 'gatsby';
import React from 'react';
import book from '../../images/projects/bookish/book.png';
import blog from '../../images/projects/devblog/blog.png';
import mern from '../../images/projects/video-streaming/reely.png';
import { routes } from '../constants/routes';
import './Latest.css';
import { projects } from '../../data/projects';
import { Project, Projects } from '../../types/Project';
import LatestProject from './LatestProject'
;
import { projectMapToArray } from '../../utils/projects';
import H, { hLevel } from '../shared/H';

type ProjectsScreenProps = {
    projects: Projects
}

const LatestProjects = (props:ProjectsScreenProps):React.ReactElement => {
    // const projectCover = <FluidImage image={projec} />
    const mernID = ("Reely-A-MERN-Video-Streaming-App");
    const { projects } = props;

    const projectsElements = projectMapToArray(projects).filter((project:Project) => project?.featured?.priority! <= 3);
    const projectsElement = projectsElements.map((project:Project, index:number) => {
        return <LatestProject project={project} key={project.id} index={index} />;
    });

    console.log(projectsElement,'projectsElements');
    
    return (

        <div className='mt-40 mx-0 -mb-24 space-y-20'>
            <div className='relative text-center'>
                {/* <h1 className=' text-black text-5xl font-semibold text-center leading-4 tracking-wide'>Latest Works</h1> */}
                <H level={hLevel.h1} className="mb-1 font-extrabold">
        Latest Works
      </H>
                <span className="absolute w-10 h-0.5 bg-red-500 bottom-[-1.5rem] left-1/2 transform -translate-x-1/2"></span>
            </div>
            <>
            {projectsElement}
            </>
            <Link
                to={`/projects/`}
                title={"caption"}
                className="block w-[220px] text-red-600 h-[50px] py-4 px-8 text-sm lg:text-[14px] font-semibold text-center leading-5 uppercase rounded-3xl border-0 mt-8 lg:mt-[32px] outer"
            >
                <span>see more</span>
            </Link>
        </div>
    )
}

export default LatestProjects;