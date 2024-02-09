import React, { useState } from 'react';
import contact from '../../images/contact.png';
import './contact.css';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = () => {
    setIsAnimating(true);
    setTimeout(() => setIsOpen(true), 100);
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const formAction = 'https://dev.us1.list-manage.com/subscribe/post?u=7714f14ff32085c685da2cfaa&amp;id=53ffa81463';

  const inputClass = 'border py-2 px-3 mb-3 rounded border-gray-300 border-solid appearance-none';


  return (
    <div className="p-6">
      <button onClick={openModal} className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Modal
      </button>

      {isOpen && (
        <div onClick={closeModal} className="fixed z-10 inset-0 overflow-y-auto ">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div onClick={stopPropagation} className={` rounded-custom border  inline-block align-bottom bg-white  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-[700px]  sm:h-[712px] ${isAnimating ? 'animate-slide-down' : ''}`}>
              <img src={contact} alt="Contact" className="absolute top-0 left-0 h-40 w-40 md:h-64 md:w-64 xl:h-80 xl:w-96" />
              <button onClick={closeModal} className="absolute right-10 top-10 m-2 text-gray-600 hover:text-gray-900 z-50">
                X
              </button>
              <div className=" flex items-center justify-center h-screen bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Modal Title
                  </h3>
                  <div className="mt-2">
                    <h1 className="text-grey-darkest uppercase font-bold text-xl mb-3">
                      Subscribe to the Newsletter
                    </h1>
                    <p className="text-sm mb-3">
                      Get my latest posts and project updates by email
                    </p>
                    <form action={"formAction"} method="post" className="flex flex-col">
                      <input
                        placeholder="First Name"
                        type="text"
                        name="FNAME"
                        className={inputClass}
                        required
                      />
                      <input
                        placeholder="Email"
                        type="email"
                        name="EMAIL"
                        className={inputClass}
                        required
                      />
                      <input
                        placeholder="Subject"
                        type="text"
                        name="SUBJECT"
                        className={inputClass}
                        required
                      />

                      <textarea
                        placeholder="Message"
                        name="MESSAGE"
                        className={`${inputClass} h-24`}
                        required
                      />

                      <div className="hidden" aria-hidden="true">
                        <input
                          type="text"
                          name="b_7714f14ff32085c685da2cfaa_53ffa81463"
                          tabIndex={-1}
                        />
                      </div>

                      <input
                        type="submit"
                        value="Subscribe"
                        className="transition duration-200 ease-in-out bg-black text-white py-2 px-3 rounded shadow-sm cursor-pointer hover:bg-gray-800"
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;