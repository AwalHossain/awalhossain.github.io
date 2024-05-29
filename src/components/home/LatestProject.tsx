import { Link } from 'gatsby'
import React from 'react'
import { Project } from '../../types/Project'
import { routes } from '../constants/routes'
import FluidImage from '../shared/FluidImage'
import H, { hLevel } from '../shared/H'

type LatesProps = {
  project: Project
  key: string
  index: number
}

const LatestProject = (props: LatesProps) => {
  const { project, key, index } = props;

  const projectCover = project.cover ? (
    <div className='h-96'>
      <FluidImage image={project.featured.cover} />
    </div>
  ) : null;

  const projectSummaryLines = project.featured ? project.featured.summary!.map(
    (summaryLine: string | null, index: number) => (
      <p key={index}>
        {summaryLine}
      </p>
    ),
  ) : null;



  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-4 latest shadow-xl rounded-lg dark:bg-gray-900">
      <div className='order-1 md:order-2 text-center rounded-t-lg md:rounded-l-l overflow-hidden'>
        {projectCover}
      </div>
      <div className={`p-4 flex flex-col justify-center sm:pl-10 ${index % 2 === 0 ? 'order-2 md:order-2' : 'order-1 md:order-1'}`}>
        <H level={hLevel.h2} className="mb-1 uppercase font-extrabold tracking-tighter">
          {project.featured.title}
        </H>
        {projectSummaryLines}
        <Link
          to={`${routes.projects.path}/${project.featured.id}#details`}
          title={"caption"}
          className="block text-white tracking-wider w-[220px] h-[50px] py-4 px-8 text-sm lg:text-[12px] font-bold text-center leading-5 uppercase rounded-3xl border-0 mt-8 lg:mt-[32px] view-project-first"
        >
          <span>view project</span>
        </Link>
      </div>
    </div>
  )
}

export default LatestProject