import React, { useState } from 'react';
import { profile } from '../../data/profile';
import ContactForm from '../elements/ContacForm';
import H, { hLevel } from './H';
import SocialLinks from './socialLinks';
import lgmask from '../../images/footer/footer-white-mask-lg.png'
import mask from '../../images/footer/footer-white-mask.png'
import lgpattern from '../../images/footer/footer-pattern-bg-lg.png'
import pattern from '../../images/footer/footer-pattern-bg.png'
import './footer.css'

type FooterProps = {
  className?: string,
  withFeedback?: boolean,
  withSupport?: boolean,
};

const Footer = (props: FooterProps): React.ReactElement => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  const { className = '', withFeedback = false, withSupport = true } = props;

  const handleContactClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent the link from navigating
    setIsModalOpen(true); // Open the modal
  };

  return (
    <footer className={`${className} relative flex flex-col items-center justify-center sm:min-h-[550px] xl:min-h-[700px] mt-36 foot bg-cover bg-center`} >
      <div className='z-10 flex flex-col items-center justify-center space-y-4 pb-5'>
        <H level={hLevel.h2} className="text-center text-white text-2xl">
          Got Any ideas to work on?
        </H>
        <button onClick={handleContactClick} className='uppercase text-[12px] rounded-3xl bg-red-600 px-14 py-4 text-white font-bold tracking-widest '>
          Let's Talk
        </button>
        <div className="flex flex-row items-center justify-center">
          <SocialLinks
            links={profile?.socialLinks}
            expandable={false}
            iconClassName="w-10 h-10 bg-white rounded-full p-2"
            itemClassName="mr-2 ml-2"
          />
        </div>
      </div>
      <div className='footer-pattern absolute inset-0 z-0'>
          <img className='w-full h-full object-cover block sm:hidden' src={pattern} alt="" />
          <img className='w-full h-full object-cover hidden sm:block' src={lgpattern} alt="" />
      </div>
      <div className='footer-mask absolute inset-0 z-0 hidden sm:block'>
        <img className='w-full h-full object-cover object-center' src={lgmask} alt="" />
      </div>
      {
      isModalOpen && (
        <ContactForm isOpen={isModalOpen} closeModal={closeModal} />
      )
    }
    </footer>
  );
};

export default Footer;