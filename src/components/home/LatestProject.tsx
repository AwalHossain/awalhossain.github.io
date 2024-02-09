import React from 'react';
import pc from '../../images/projects/pcBuilder/cover.png';
import sweet from '../../images/projects/video-streaming/reely.png';
import './Latest.css';

const LatestProjects = () => {
    return (
        <div className='container max-w-6xl pb-5 my-10'>
            <div className='w-full max-w-5xl m-auto'>
                <div className='mt-24 mx-0 -mb-24 space-y-20'>

                    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end mb-5 bg-white-500 rounded-lg shadow-xl">
                        <div className='sm:col-span-12 md:col-span-6 text-center md:h-[472px] view-project-first'>
                            <img className='w-full h-auto md:h-full' src={sweet} alt="Album" />
                        </div>
                        <div className="sm:col-span-12 md:col-span-6 pt-20 lg:pt-[90px] px-5 lg:px-[80px] pb-14 lg:pb-[56px] border-0 h-auto lg:h-[472px] flex flex-col justify-center items-center">
                            <h2 className="text-4xl pb-5">New album is released!</h2>
                            <p className='text-sm lg:text-[14px] font-medium text-gray-400'>Click the button to listen on Spotiwhy app.</p>
                            <div className="w-[220px] h-[50px] py-4 px-8 text-sm lg:text-[14px] font-bold text-center leading-4 uppercase rounded-3xl border-0 mt-8 lg:mt-[32px] view-project-first">
                                <span>view project</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end mb-5 bg-white-500 rounded-lg shadow-xl">
                        <div className='sm:col-span-12 md:col-span-6 text-center md:h-[472px] view-project-first'>
                            <img className='w-full h-auto md:h-full' src={pc} alt="Album" />
                        </div>
                        <div className="sm:col-span-12 md:col-span-6 pt-20 lg:pt-[90px] px-5 lg:px-[80px] pb-14 lg:pb-[56px] border-0 h-auto lg:h-[472px] flex flex-col justify-center items-center">
                            <h2 className="text-4xl pb-5">New album is released!</h2>
                            <p className='text-sm lg:text-[14px] font-medium text-gray-400'>Click the button to listen on Spotiwhy app.</p>
                            <div className="w-[220px] h-[50px] py-4 px-8 text-sm lg:text-[14px] font-bold text-center leading-4 uppercase rounded-3xl border-0 mt-8 lg:mt-[32px] view-project-first">
                                <span>view project</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end mb-5 bg-white-500 rounded-lg shadow-xl">
                        <div className='sm:col-span-12 md:col-span-6 text-center md:h-[472px] view-project-first'>
                            <img className='w-full h-auto md:h-full' src={sweet} alt="Album" />
                        </div>
                        <div className="sm:col-span-12 md:col-span-6 pt-20 lg:pt-[90px] px-5 lg:px-[80px] pb-14 lg:pb-[56px] border-0 h-auto lg:h-[472px] flex flex-col justify-center items-center">
                            <h2 className="text-4xl pb-5">New album is released!</h2>
                            <p className='text-sm lg:text-[14px] font-medium text-gray-400'>Click the button to listen on Spotiwhy app.</p>
                            <div className="w-[220px] h-[50px] py-4 px-8 text-sm lg:text-[14px] font-bold text-center leading-4 uppercase rounded-3xl border-0 mt-8 lg:mt-[32px] view-project-first">
                                <span>view project</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProjects;