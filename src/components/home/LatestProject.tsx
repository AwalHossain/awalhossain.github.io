import { Link } from 'gatsby';
import React from 'react';
import book from '../../images/projects/bookish/book.png';
import blog from '../../images/projects/devblog/blog.png';
import mern from '../../images/projects/video-streaming/reely.png';
import { routes } from '../constants/routes';
import './Latest.css';

const LatestProjects = () => {
    // const projectCover = <FluidImage image={projec} />
    const mernID = ("Reely-A-MERN-Video-Streaming-App");

    return (

        <div className='mt-24 mx-0 -mb-24 space-y-20'>
            <div className='relative text-center'>
                <h1 className='text-4xl font-custom font-[600] text-center leading-4 tracking-wide'>Latest Works</h1>
                <span className="absolute w-10 h-0.5 bg-red-500 bottom-[-1.5rem] left-1/2 transform -translate-x-1/2"></span>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-4 latest shadow-xl rounded-lg">
                <div className='text-center rounded-t-lg md:rounded-l-l overflow-hidden'>
                    <img className='w-full md:min-h-[452px] h-auto object-cover' src={mern} alt="Album" />
                </div>
                <div className="p-4 flex flex-col justify-center items-center">
                    <h2 className="text-4xl pb-5 font-bold ">New album is released!</h2>
                    <p className='text-sm lg:text-[18px] font-medium text-gray-400'>Click the button to listen on Spotiwhy app.</p>
                    <Link
                        to={`${routes.projects.path}/${mernID}#details`}
                        title={"caption"}
                        className="block font-custom2 text-white tracking-wider w-[220px] h-[50px] py-4 px-8 text-sm lg:text-[12px] font-bold text-center leading-5 uppercase rounded-3xl border-0 mt-8 lg:mt-[32px] view-project-first"
                    >
                        <span>view project</span>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 latest  md:grid-cols-2 gap-4  shadow-xl rounded-lg">
                <div className='text-center rounded-t-lg md:rounded-l-l overflow-hidden'>
                    <img className='w-full md:min-h-[452px] h-auto object-cover' src={book} alt="Album" />
                </div>
                <div className="p-4 flex flex-col justify-center items-center">
                    <h2 className="text-4xl pb-5 font-bold">New album is released!</h2>
                    <p className='text-sm lg:text-[18px] font-medium text-gray-400'>Click the button to listen on Spotiwhy app.</p>
                    <Link
                        to={`${routes.projects.path}/${mernID}#details`}
                        title={"caption"}
                        className="block font-custom2 text-white tracking-wider w-[220px] h-[50px] py-4 px-8 text-sm lg:text-[12px] font-bold text-center leading-5 uppercase rounded-3xl border-0 mt-8 lg:mt-[32px] view-project-first"
                    >
                        <span>view project</span>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 latest  md:grid-cols-2 gap-4 shadow-xl rounded-lg">
                <div className='text-center rounded-t-lg md:rounded-l-lg overflow-hidden'>
                    <img className='w-full md:min-h-[452px] h-auto object-cover' src={blog} alt="Album" />
                </div>
                <div className="p-4 flex flex-col justify-center items-center">
                    <h2 className="text-4xl pb-5 font-bold">DEVeloper Blog!</h2>
                    <p className='text-sm lg:text-[18px] font-medium text-gray-400'>Click the button to listen on Spotiwhy app.</p>
                    <div >
                        <Link
                            to={`${routes.projects.path}/${mernID}#details`}
                            title={"caption"}
                            className="block font-custom2 text-white tracking-wider w-[220px] h-[50px] py-4 px-8 text-sm lg:text-[12px] font-bold text-center leading-5 uppercase rounded-3xl border-0 mt-8 lg:mt-[32px] view-project-first"
                        >
                            <span>view project</span>
                        </Link>
                    </div>
                </div>
            </div>
            <Link
                to={`${routes.projects.path}/${mernID}#details`}
                title={"caption"}
                className="block font-custom2 w-[220px] text-red-600 h-[50px] py-4 px-8 text-sm lg:text-[14px] font-semibold text-center leading-5 uppercase rounded-3xl border-0 mt-8 lg:mt-[32px] outer"
            >
                <span>see more</span>
            </Link>
        </div>
    )
}

export default LatestProjects;