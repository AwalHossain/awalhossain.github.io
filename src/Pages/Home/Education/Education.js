import React from "react";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";

const Education = () => {
  const education = [
    {
      deg: "Secondary School Certificate",
      scl: "Bangamata Shekh Fazilatunnesa Mujib Goverment Secondary School,Uttara,Dhaka",
      duration: "2020 - 2021",
    },
  ];
  return (
    <section className="py-12">
      <Slide left>
        {/* education header */}
        <div className="max-w-6xl mx-auto">
          <h1 className="font-light border-b-2 pb-3 mb-8 leading-3">
            <span className="ml-2 lg:text-6xl text-2xl">Education</span>
            <br />{" "}
            <span className="opacity-10 text-4xl lg:text-7xl font-bold -mt-10 block uppercase">
              Academics
            </span>
          </h1>
        </div>
      </Slide>
      <Bounce right>
        {/* education data */}
        <div className="lg:max-w-6xl lg:mx-auto max-w-3xl mx-4">
          <div>
            {education.map((edu, i) => {
              return (
                <div key={i}>
                  <h2 className="text-2xl font-medium">{edu.deg}</h2>
                  <p className="font-light my-4">{edu.scl}</p>
                  <p>{edu.duration}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Bounce>
      <div>
        <h1 className="text-center mt-12 mb-6 text-2xl">
          If you like my work, you can{" "}
          <a
            className="text-blue-500 font-semibold hover:underline"
            href="https://github.com/coderboy-raiyan"
            target="_blank"
            rel="noreferrer"
          >
            buy me a coffee
          </a>{" "}
          and share your thoughts 🎉☕
        </h1>
      </div>
    </section>
  );
};

export default Education;
