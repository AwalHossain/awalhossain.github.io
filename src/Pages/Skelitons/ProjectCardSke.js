import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProjectCardSke = () => {
  return (
    <div className="animate-pulse shadow-lg h-full border-2 border-gray-200  rounded-lg overflow-hidden">
      <a href="/" target="_blank" rel="noreferrer" className="">
        <Skeleton height={200} />
      </a>
      <div className="p-4">
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col space-y-2 my-3">
            <h2 className="tracking-widest text-lg text-gray-900 font-semibold">
              <Skeleton height={30} />
            </h2>
            <h1 className="text-xs  text-gray-900 ">
              {" "}
              <Skeleton height={25} />
            </h1>
            <p className="leading-relaxed ">
              <Skeleton height={30} />
            </p>
          </div>
        </div>
        {/* card footer */}

        {/* tags */}
        <ul className="flex flex-row flex-wrap justify-center lg:justify-start xl:justify-start">
          <li className="hero-tags-li">
            <span className="hero-tags w-20">
              <Skeleton />
            </span>
          </li>
          <li className="hero-tags-li">
            <span className="hero-tags w-20 ">
              <Skeleton />
            </span>
          </li>
          <li className="hero-tags-li">
            <span className="hero-tags w-20 ">
              <Skeleton />
            </span>
          </li>

          <>
            <li className="hero-tags-li">
              <span className="hero-tags w-20">
                <Skeleton />
              </span>
            </li>
            <li className="hero-tags-li">
              <span className="hero-tags w-20 ">
                <Skeleton />
              </span>
            </li>
          </>

          <p className="inline cursor-pointer text-xs my-auto">
            <Skeleton />
          </p>
        </ul>

        {/* Links of codes */}
        <div className="flex items-center flex-wrap lg:justify-start space-x-2  my-3  justify-center">
          <a href="/" target="_blank" rel="noreferrer" className="w-20 h-36">
            <Skeleton height={30} />
          </a>
          <a href="/" target="_blank" rel="noreferrer" className="w-20 h-36">
            <Skeleton height={30} />
          </a>
          <a href="/" target="_blank" rel="noreferrer" className="w-20 h-36">
            <Skeleton height={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSke;
