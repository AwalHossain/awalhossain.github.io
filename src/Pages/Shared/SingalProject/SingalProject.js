import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingalProject = ({ project }) => {
  const [isOpend, setIsOpened] = useState(false);

  const handelClick = () => {
    setIsOpened(!isOpend);
  };

  return (
    <div className="shadow-lg h-full border-2 border-gray-200  rounded-lg overflow-hidden">
      <a href={project.live_link} target="_blank" rel="noreferrer" className="">
        <img
          className="hover:scale-110 transition-all transform cursor-pointer shadow"
          src={project.img}
          alt="blog"
        />
      </a>
      <div className="p-4">
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col space-y-2 my-3">
            <h2 className="tracking-widest text-lg text-gray-900 font-semibold hover:text-red-500">
              <Link to={`/projectdetails/${project.id}`}>{project.name}</Link>
            </h2>
            <h1 className="text-xs  text-gray-900 ">{project.duration}</h1>
            <p className="leading-relaxed ">
              {project?.des?.slice(0, 60)}...{" "}
              <Link
                className="text-sm text-red-500 hover:underline"
                to={`/projectdetails/${project.id}`}
              >
                More Details
              </Link>{" "}
            </p>
          </div>
        </div>
        {/* card footer */}

        {/* tags */}
        <ul className="flex flex-row flex-wrap justify-center lg:justify-start xl:justify-start">
          {isOpend
            ? project?.technology.map((tech, index) => {
                return (
                  <li className="hero-tags-li" key={index}>
                    <span className="hero-tags">{tech}</span>
                  </li>
                );
              })
            : project?.technology.slice(0, 3).map((tech, index) => {
                return (
                  <li className="hero-tags-li" key={index}>
                    <span className="hero-tags">{tech}</span>
                  </li>
                );
              })}

          <p
            className="inline cursor-pointer text-xs my-auto"
            onClick={handelClick}
          >
            {isOpend ? "-less" : " +more"}
          </p>
        </ul>

        {/* Links of codes */}
        <div className="flex items-center flex-wrap lg:justify-start space-x-2  my-3  justify-center">
          <a
            href={project.live_link}
            target="_blank"
            rel="noreferrer"
            className="btn text-xs p-2 lg:my-0 "
          >
            <FaPlay className="inline" /> Demo
          </a>
          <a
            href={project.client_side_code}
            target="_blank"
            rel="noreferrer"
            className="btn text-xs p-2 lg:my-0 my-2"
          >
            <BsGithub className="inline " /> Client Side Code
          </a>
          <a
            href={project.server_side_code}
            target="_blank"
            rel="noreferrer"
            className="btn text-xs p-2 lg:mt-3"
          >
            <BsGithub className="inline " /> Server Side Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingalProject;
