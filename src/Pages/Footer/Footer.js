import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: "url(https://i.ibb.co/FYsVNh1/bg-image-1.jpg)",
      }}
      className="py-6 text-gray-400 bg-no-repeat"
    >
      <div className="container mx-auto h-full">
        <div className="footer-inner flex justify-center lg:justify-between items-center flex-col lg:flex-row space-y-4">
          <div className="footer-brand lg:w-1/3">
            <Link
              className="text-3xl font-bold text-white"
              onClick={() => window.scrollTo(0, 0)}
              to="/"
            >
              R.
            </Link>
          </div>

          <ul
            className="flex flex-row 
           space-x-6 flex-wrap justify-center lg:w-1/3"
          >
            <li className="">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/tajkier-haque"
              >
                <BsLinkedin size={20} className="icon-hover" />
              </a>
            </li>
            <li className="">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/coderboy-raiyan"
              >
                <BsGithub size={20} className="icon-hover" />
              </a>
            </li>
            <li className="">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/md_tajkier"
              >
                <BsTwitter size={20} className="icon-hover" />
              </a>
            </li>
          </ul>

          <div className="lg:w-1/3 text-gray-300">
            <p>© 2021. All rights reserved by Raiyan.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
