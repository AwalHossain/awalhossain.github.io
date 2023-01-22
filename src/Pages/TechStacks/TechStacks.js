import React from "react";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";

const TechStacks = () => {
  const techStack = [
    {
      name: "JavaScript",
      img: "https://i.postimg.cc/YCxRWyMj/js.png",
    },
    {
      name: "HTML5",
      img: "https://i.postimg.cc/vHgyvkmq/html5-logo-vector-free-download-11574222422da5narngo7.png",
    },
    {
      name: "React",
      img: "https://i.postimg.cc/k51yj6Vm/react.png",
    },
    {
      name: "Node JS",
      img: "https://i.postimg.cc/W1VStPRQ/node.png",
    },
    {
      name: "Express JS",
      img: "https://i.postimg.cc/6QDnyDTk/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
    },
    {
      name: "Netlify",
      img: "https://i.postimg.cc/4NVBJx06/netlify.png",
    },
    {
      name: "Tailwind CSS",
      img: "https://i.postimg.cc/25St8Lgq/download.png",
    },
    {
      name: "Material UI",
      img: "https://i.postimg.cc/nLzfCPNG/logo.png",
    },
    {
      name: "CSS3",
      img: "https://i.postimg.cc/wvQMgPNc/image.png",
    },
    {
      name: "Bootstrap",
      img: "https://i.postimg.cc/PxrKMGdP/bootstrap-logo.png",
    },
    {
      name: "MongoDB",
      img: "https://i.postimg.cc/Cx1CRCLV/db.png",
    },
    {
      name: "Firebase",
      img: "https://i.postimg.cc/FRRgLjxS/firebase-logo.png",
    },
  ];

  return (
    <section className="py-14">
      <Slide right>
        {/* tech header */}
        <div className="max-w-6xl mx-auto">
          <h1 className="font-light border-b-2 pb-3 mb-8 leading-3">
            <span className="ml-2 lg:text-6xl text-xl ">
              Tech I'm familiar with,
            </span>
            <br />{" "}
            <span className="opacity-10 text-4xl lg:text-7xl font-bold -mt-10 block uppercase">
              Tech Stacks
            </span>
          </h1>
        </div>
      </Slide>

      <Bounce left>
        {/* tech stack */}
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:max-w-6xl mx-auto max-w-3xl lg:gap-y-8">
          {techStack.map((tech, i) => {
            return (
              <div
                className="flex justify-start items-center transition-all hover:bg-gray-100 p-4"
                key={i}
              >
                <img className="w-6 h-6 mr-2" src={tech.img} alt="" />
                <h4>{tech.name}</h4>
              </div>
            );
          })}
        </div>
      </Bounce>
    </section>
  );
};

export default TechStacks;
