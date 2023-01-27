import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import tw from "tailwind-styled-components";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const hamburger = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header className="h-20">
      <div className="border-b shadow-sm w-full bg-white z-10 fixed top-0 left-0">
        <Wrapper>
          <Navbar>
            <div className="navbar-brand">
              <Link
                className="text-4xl font-bold"
                to="/"
                onClick={() => window.scrollTo(0, 0)}
              >
                A.
              </Link>
            </div>
            <ul className="main-navbar lg:flex space-x-8 items-center hidden">
              <li>
                <NavLink
                  activeStyle={{
                    fontWeight: "text-base",
                    color: "red",
                  }}
                  className="font-medium "
                  to="/home"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About me
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{
                    fontWeight: "text-base",
                    color: "red",
                  }}
                  className="text-gray-600 font-medium"
                  to="/blogs"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{
                    fontWeight: "text-base",
                    color: "red",
                  }}
                  className="text-gray-600 font-medium "
                  to="/projects"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{
                    fontWeight: "text-base",
                    color: "red",
                  }}
                  className="text-gray-600 font-medium "
                  to="/contactus"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact us
                </NavLink>
              </li>
              <li>
                <button
                  type="submit"
                  className="btn"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1f8J7EDNq9dIkC3DnXLBAbNny0y55qVBU/view?usp=sharing"
                    )
                  }
                >
                  <AiOutlineDownload size={20} className="inline" /> Download
                  Resume
                </button>
              </li>
            </ul>
            {/* Mobile menubar */}
            <ul
              className={
                isClicked
                  ? "fixed top-0 right-0 z-10 transition-all ease-in-out bg-white h-screen md:w-full w-full flex flex-col justify-center items-center space-y-8 shadow-2xl lg:hidden"
                  : "-right-full flex flex-col justify-center items-center space-y-8 lg:hidden fixed top-0 z-10 transition-all h-screen w-full"
              }
            >
              <li>
                <NavLink
                  activeStyle={{
                    fontWeight: "text-base",
                    color: "red",
                  }}
                  className="font-medium text-3xl md:text-7xl"
                  to="/home"
                  onClick={() => {
                    setIsClicked(!isClicked);
                    window.scrollTo(0, 0);
                  }}
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{
                    fontWeight: "text-base",
                    color: "red",
                  }}
                  className="text-gray-600 text-3xl font-medium md:text-7xl"
                  to="/blogs"
                  onClick={() => {
                    setIsClicked(!isClicked);
                    window.scrollTo(0, 0);
                  }}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{
                    fontWeight: "text-base",
                    color: "red",
                  }}
                  className="text-gray-600 text-3xl font-medium md:text-7xl"
                  to="/Projects"
                  onClick={() => {
                    setIsClicked(!isClicked);
                    window.scrollTo(0, 0);
                  }}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{
                    fontWeight: "text-base",
                    color: "red",
                  }}
                  className="text-gray-600 text-3xl font-medium md:text-7xl"
                  to="/contactus"
                  onClick={() => {
                    setIsClicked(!isClicked);
                    window.scrollTo(0, 0);
                  }}
                >
                  Contact me
                </NavLink>
              </li>
              <li>
                <NavLink to="/contactus">
                  <button className="btn text-gray-600">Let's talk</button>
                </NavLink>
              </li>
              <li>
                <button
                  type="submit"
                  className="btn text-gray-600"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/u/0/uc?id=1IOpG6du8CIztxO2acpoJ1jJsPl325vNt&export=download"
                    )
                  }
                >
                  <AiOutlineDownload size={20} className="inline" /> Download
                  Resume
                </button>
              </li>
            </ul>

            {/* Hamburger icon */}
            <div
              className="hamburger-main lg:hidden cursor-pointer z-20"
              onClick={hamburger}
            >
              <div
                className={
                  isClicked
                    ? "w-8 bg-red-400 h-0.5 rounded mb-2 transform rotate-45 translate-y-3.5 transition-all"
                    : "w-8 bg-black h-0.5 rounded mb-2 transition-all"
                }
              ></div>
              <div
                className={
                  isClicked
                    ? "w-8 bg-red-400 h-0.5 rounded mb-2 opacity-0 transition-all"
                    : "w-8 bg-black h-0.5 rounded mb-2 transition-all"
                }
              ></div>
              <div
                className={
                  isClicked
                    ? "w-8 bg-red-400 h-0.5 rounded mb-2 transform -translate-y-1.5 -rotate-45  transition-all"
                    : "w-8 bg-black h-0.5 rounded mb-2 transition-all"
                }
              ></div>
            </div>
          </Navbar>
        </Wrapper>
      </div>
    </header>
  );
};

export default Header;

const Wrapper = tw.div`
 container mx-auto px-4 
`;
const Navbar = tw.nav`
flex justify-between items-center py-5
`;
