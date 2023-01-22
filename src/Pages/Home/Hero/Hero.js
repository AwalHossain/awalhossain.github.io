import React, { useState } from "react";
import {
  BsGithub, BsLinkedin, BsTwitter
} from "react-icons/bs";
import { MdFindReplace, MdOutlineLocationOn } from "react-icons/md";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Typical from "react-typical";

const Hero = () => {
  const [isOpend, setIsOpened] = useState(false);

  const handelClick = () => {
    setIsOpened(!isOpend);
  };

  return (
    <section className="container mx-auto">
      {/* main hero section */}
      <div className="flex max-w-6xl mx-auto flex-col my-6">
        {/* left side hero */}
        <Slide left>
          <div className="flex items-center justify-start flex-col lg:flex-row">
            <div className="rounded-full w-2/4 md:w-72 sm:w-72 lg:w-72 flex-shrink-0 mx-auto my-3 lg:mx-0 xl:mx-0">
              <img
                src="https://avatars.githubusercontent.com/u/76396442?v=4"
                alt=""
                className="rounded-full"
              />
            </div>
            {/* hero des */}
            <div className="lg:ml-10 xl:ml-10 text-center ml-0 lg:text-left xl:left">
              <h2 className="text-3xl font-bold">MD. Awal Hossain</h2>
              <h5 className="font-light text-gray-500 my-3">
                <span>
                  <MdFindReplace size={20} className="inline" />
                </span>
                Learning and finding jobs
              </h5>
              <h5 className="font-light text-gray-800 text-tighter  my-3">
                <Typical
                  steps={[
                    "Hello, My gorgeous friends I'm Raiyan",
                    1500,
                    "I'm MERN Stack Developer",
                    1500,
                    "I'm Author",
                    1500,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h5>
              <h5 className="font-light text-gray-800 text-tighter  my-3">
                <MdOutlineLocationOn className="inline" /> Dhaka, Bangladesh
              </h5>

              {/* tags */}
              <ul className="flex flex-row flex-wrap justify-center lg:justify-start xl:justify-start">
                <li className="hero-tags-li">
                  <span className="hero-tags">JavaScript</span>
                </li>
                <li className="hero-tags-li">
                  <span className="hero-tags">React</span>
                </li>
                <li className="hero-tags-li">
                  <span className="hero-tags">Node js</span>
                </li>
                <li className="hero-tags-li">
                  <span className="hero-tags">Express js</span>
                </li>
                <li className="hero-tags-li">
                  <span className="hero-tags">Full Stack</span>
                </li>
              </ul>
              {/* Social media */}
              <ul className="flex flex-row flex-wrap my-3 justify-center lg:justify-start xl:justify-start">
                <li className="icons">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/awal-hossain-0bb650108/"
                  >
                    <BsLinkedin className="icon-hover" />
                  </a>
                </li>
                <li className="icons">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/AwalHossain"
                  >
                    <BsGithub className="icon-hover" />
                  </a>
                </li>

                {isOpend && (
                  <>
                <li className="icons">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/AwalHosssaimn"
                  >
                    <BsTwitter className="icon-hover" />
                  </a>
                </li>
                  </>
                )}

                <p
                  className="inline cursor-pointer text-xs my-auto"
                  onClick={handelClick}
                >
                  {isOpend ? "-less" : " +more"}
                </p>
              </ul>
            </div>
          </div>
        </Slide>
        {/* Right Side hero */}
        <div className="mt-6">
          <Slide right>
            <p className="my-summary font-light p-3 leading-7">
              Hi there! I'm Awal. I work as a full-time web developer.
              In my spare time, I do my projects{" "}
              <i>(normally it is about 1-2 hours in the morning before work)</i>
              . Most of my{" "}
              <HashLink
                smooth
                className="font-semibold underline"
                to="#homeprojects"
              >
                projects
              </HashLink>{" "}
              are focused on one thing – to improve my skills. You may see these
              projects to know about my ambition and how I worked or learn
              javascript syntax and start experimenting with web development and
              math behind them, etc. I also try to write{" "}
              <Link className="font-semibold underline" to="blogs ">
                articles
              </Link>{" "}
              about life, web development, and some beautiful quotes.
            </p>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Hero;
