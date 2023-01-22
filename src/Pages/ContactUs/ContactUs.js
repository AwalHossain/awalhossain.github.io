import emailjs from "emailjs-com";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Slide from "react-reveal/Slide";
import Swal from "sweetalert2";
import Header from "../Home/Header/Header";

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gk543g6",
        "template_fmkdaw9",
        e.target,
        "user_ru9Ys5QQHd2OdypmgAsFT"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "we will let you soon",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.text}`,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      );
    e.target.reset();
  };

  return (
    //   contact us page starts
    <>
      <Header />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Me
            </h1>
            <p className="lg:w-1/3 mx-auto leading-relaxed text-base">
              We are always here for you. You can contact us at anytime. We will
              reply it as soon as possible
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={sendEmail} className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <Slide left>
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </Slide>
              </div>
              <div className="p-2 w-1/2">
                <Slide right>
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </Slide>
              </div>
              <div className="p-2 w-full">
                <Slide bottom>
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-600 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </Slide>
              </div>
              <Slide bottom>
                <div className="p-2 w-full my-4">
                  <button className="btn block w-2/4 m-auto">Submit</button>
                </div>
              </Slide>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <p>Also you can find me here</p>
                <ul className="flex flex-row flex-wrap my-3 justify-center">
                  <li className="icons">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/tajkier-haque"
                    >
                      <BsLinkedin className="icon-hover" />
                    </a>
                  </li>
                  <li className="icons">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/coderboy-raiyan"
                    >
                      <BsGithub className="icon-hover" />
                    </a>
                  </li>
                  <li className="icons">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/md_tajkier"
                    >
                      <BsTwitter className="icon-hover" />
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
