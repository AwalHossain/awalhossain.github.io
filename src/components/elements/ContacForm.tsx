import React, { useEffect, useState } from 'react';
import contact from '../../images/contact.png';
import './contact.css';
interface ContactFormProps {
  isOpen: boolean;
  closeModal: () => void;
}


const ContactForm = (props:ContactFormProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Add a new state variable for the submission status
  const [submissionStatus, setSubmissionStatus] = useState('');

  const { isOpen, closeModal } = props;

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const formAction = 'https://macen-rouge.vercel.app/contact';

  const inputClass = 'border py-2 px-3 mb-3 rounded border-gray-300 border-solid appearance-none';
// Modify the form submission handler to use Fetch API
const handleSubmit = async (event: React.FormEvent) => {
  console.log('fromData', event.target);
  event.preventDefault();
  setIsLoading(true);
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  // Log the entries in the FormData object

  // Create an object from the FormData entries
  const data : Record<string, any> = Array.from(formData.entries()).reduce((obj: Record<string, any>, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {} as Record<string, any>);

  console.log('data', data);
  
  try {
    const response = await fetch(formAction, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('response', response);
    
    if (response.status === 200) {
      setSubmissionStatus('Thanks for your message! I\'ll get back to you within 1-2 days.');
    } else {
      setSubmissionStatus('Something went wrong. Please try again later.');
    }
  } catch (error) {
    setSubmissionStatus('Something went wrong. Please try again later.');
  }
  setIsLoading(false); // End loading
};

  // Clear the submission status when the modal is closed
  useEffect(() => {
    if (!isOpen) {
      setSubmissionStatus('');
    }
  }, [isOpen]);


  return (
    <div className="p-6">
    {isOpen && (
      <div onClick={closeModal} className="fixed z-10 inset-0 overflow-y-auto ">
        <div className=" pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
  
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
          <div onClick={stopPropagation} className={`relative rounded-custom border inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl sm:w-full overflow-y-auto ${isAnimating ? 'animate-slide-down' : ''}`}
  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
>
              <img src={contact} alt="Contact" className="absolute top-0 left-0 h-44 w-52 lg:h-64 lg:w-64" />
              <button onClick={closeModal} className="absolute right-10 top-10 m-2 text-gray-600 hover:text-gray-900 z-50">
                X
              </button>
              <div className=" flex items-center justify-center h-auto bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="">

                  <div className="my-20 mx-5 z-50">
                  <h3 className="text-3xl leading-6 font-bold text-gray-900 ">
                    Let's Talk
                  </h3>
                    <p className="text-sm mb-3">
                     Interested in my work? Send me a message and I'll get back to you as soon as possible.
                    </p>
                    {
                      submissionStatus ? (
                        <p className='text-2xl py-2 '>
                          Thank You! I'll get back to you within 1-2 days.
                        </p>
                      ):(
        <form onSubmit={handleSubmit} className="flex flex-col" >
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
                        className="transition duration-200 ease-in-out bg-black text-white py-2 px-3 rounded shadow-sm cursor-pointer hover:bg-gray-800"
                      >
                        {isLoading ? 'Sending...' : 'Send'}
                      </button>
                    </form>
                      )
                    }
                
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