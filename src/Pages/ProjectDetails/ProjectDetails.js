import React, { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { useParams } from "react-router-dom";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import BuyCoffe from "../BuyCoffe/BuyCoffe";
import Header from "../Home/Header/Header";
import useProjectContext from "./../hooks/useProjectContext";
import "./ProjectDetails.css";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const ProjectDetails = () => {
  const { allProjects } = useProjectContext();
  const { projectId } = useParams();
  const [singalProject, setSingalProject] = useState({});
  console.log(allProjects);
  useEffect(() => {
    const found = allProjects.find(
      (project) => project.id === Number(projectId)
    );
    setSingalProject(found);
  }, [allProjects]);

  return (
    //   Project details starts here
    <>
      <Header />
      <section className="py-5 h-full" style={{ background: "#F5F7FF" }}>
        {/* projects header */}
        <Fade right>
          <div className="lg:max-w-6xl lg:mx-auto mx-4 md:max-w-3xl ">
            <div className="">
              <h3 className="text-2xl font-bold lg:text-left text-center">
                {singalProject?.name}
              </h3>
              <p className="font-light lg:text-left text-center text-sm my-2">
                Duration : {singalProject?.duration}
              </p>
            </div>
            {/* Links of codes */}
            <div className="flex items-center  flex-col lg:flex-row lg:space-y-0 space-y-2 flex-wrap space-x-5 my-3 justify-start mb-7">
              <a
                href={singalProject?.live_link}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <FaPlay className="inline mr-1" /> Demo
              </a>
              <a
                href={singalProject?.client_side_code}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <BsGithub className="inline mr-1" /> Client Side Code
              </a>
              <a
                href={singalProject?.server_side_code}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <BsGithub className="inline mr-1" /> Server Side Code
              </a>
            </div>
          </div>
        </Fade>

        {/* project body */}
        <div className="main-body-swiper">
          <div className="lg:max-w-6xl lg:mx-auto  md:max-w-3xl ">
            <Slide top>
              <div className="img-projects">
                <>
                  <Swiper
                    effect={"coverflow"}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: false,
                    }}
                    pagination={true}
                    className="mySwiper"
                  >
                    {singalProject?.demo_img?.map((img, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="bg-white shadow-lg rounded-lg project-card p-6">
                            <div className="bg-blue-200 p-3  rounded-lg">
                              <img src={img} alt="" />
                            </div>
                            <div>
                              <ul className="flex flex-row flex-wrap justify-center lg:justify-start xl:justify-start p-3">
                                {singalProject?.technology?.map(
                                  (tech, index) => {
                                    return (
                                      <li className="hero-tags-li" key={index}>
                                        <span className="hero-tags">
                                          {tech}
                                        </span>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </>
              </div>
            </Slide>
            {/*More details section */}
            <Slide left>
              <div className="my-24">
                <h1 className="text-4xl font-semibold opacity-20 text-center lg:text-left">
                  More Details
                </h1>

                <div>
                  <ul className="list-disc px-10 leading-10 mt-4 lg:text-lg md:w-full md:px-12 lg:w-full lg:px-0">
                    {singalProject?.des
                      ?.split(".")
                      ?.slice(0, 5)
                      ?.map((d, i) => {
                        return (
                          <li className="my-2" key={i}>
                            {d}.
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </Slide>
            {/* Buy me a coffee */}
            <BuyCoffe />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
