import React, { useEffect, useState } from "react";
import contact from "../../images/contact.png";
import './contact.css'
interface ContactFormProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ContactForm = (props: ContactFormProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Add a new state variable for the submission status
  const [submissionStatus, setSubmissionStatus] = useState("");

  const { isOpen, closeModal } = props;

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const formAction = "https://macen-rouge.vercel.app/contact";

  const inputClass =
    "border py-2 px-3 mb-3 rounded border-gray-300 border-solid appearance-none dark:bg-gray-800";
  // Modify the form submission handler to use Fetch API
  const handleSubmit = async (event: React.FormEvent) => {
    console.log("fromData", event.target);
    event.preventDefault();
    setIsLoading(true);
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    // Log the entries in the FormData object

    // Create an object from the FormData entries
    const data: Record<string, any> = Array.from(formData.entries()).reduce(
      (obj: Record<string, any>, [key, value]) => {
        obj[key] = value;
        return obj;
      },
      {} as Record<string, any>
    );

    console.log("data", data);

    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("response", response);

      if (response.status === 200) {
        setSubmissionStatus(
          "Thanks for your message! I'll get back to you within 1-2 days."
        );
      } else {
        setSubmissionStatus("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setSubmissionStatus("Something went wrong. Please try again later.");
    }
    setIsLoading(false); // End loading
  };

  // Clear the submission status when the modal is closed
  useEffect(() => {
    if (!isOpen) {
      setSubmissionStatus("");
    }
  }, [isOpen]);

  // / Add a ref for the modal div
  const modalRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      // Add the event listener when the component mounts
      modal.addEventListener("animationend", () => {
        setIsClosing(false);
      });
    }
    return () => {
      if (modal) {
        // Remove the event listener when the component unmounts
        modal.removeEventListener("animationend", () => {
          setIsClosing(false);
        });
      }
    };
  }, []);

  const handleCloseModal = () => {
    setIsClosing(true);
    // Add a delay before calling closeModal
    setTimeout(() => {
      closeModal();
    }, 250); // Replace 500 with the duration of your closing animation in milliseconds
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      setIsAnimating(true);
      timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    } else {
      setIsAnimating(false);
    }
    console.log(isClosing, "isClosing", "isOpen", isOpen);

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div className="p-6 ">
      {isOpen && (
        <div
          onClick={closeModal}
          className="fixed z-10 inset-0 overflow-y-auto "
        >
          <div className=" pt-10 px-4 pb text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500  opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div>
              <div
                ref={modalRef}
                onClick={stopPropagation}
                className={`relative rounded-custom border inline-block align-bottom  bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg md:max-w-xl lg:max-w-2xl sm:w-full overflow-y-auto

                `}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className={`${isAnimating ? "animate-slide-down" : ""} ${
                    isClosing ? "animate-slide-up" : ""
                  }`}
                >
                  <img
                    src={contact}
                    alt="Contact"
                    className="absolute top-0 left-0 h-44 w-52 lg:h-64 lg:w-64"
                  />
                  <button
                    onClick={handleCloseModal}
                    className="absolute right-10 top-10  hover:text-gray-900 z-50 p-2 text-black dark:text-white "
                  >
                    X
                  </button>
                  <div className=" flex items-center justify-center h-auto bg-white dark:bg-gray-950 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="">
                      <div className="my-20 mx-5 z-50">
                        <h3 className="text-3xl leading-6 font-bold text-gray-900 dark:text-white text-center py-4">
                          Let's Talk
                        </h3>
                        <p className="text-sm mb-3 text-center">
                          Interested in my work? Send me a message and I'll get
                          back to you as soon as possible.
                        </p>
                        {submissionStatus ? (
                          <p className="text-2xl py-2 ">
                            Thank You! I'll get back to you within 1-2 days.
                          </p>
                        ) : (
                          <form
                            onSubmit={handleSubmit}
                            className="flex flex-col"
                          >
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

                            <button
                              type="submit" // Set button type to "button" to prevent form submission behavior
                              className="transition duration-200 ease-in-out bg-black dark:bg-gray-800 text-white py-2 px-3 rounded shadow-sm cursor-pointer hover:bg-gray-800"
                            >
                              {isLoading ? "Sending..." : "Send"}
                            </button>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
