import React from 'react';
import { profile } from '../../data/profile';
import ContactForm from '../elements/ContacForm';
import H, { hLevel } from './H';
import SocialLinks from './socialLinks';

type FooterProps = {
  className?: string,
  withFeedback?: boolean,
  withSupport?: boolean,
};

const Footer = (props: FooterProps): React.ReactElement => {
  const { className = '', withFeedback = false, withSupport = true } = props;

  return (
    <footer className={`${className}`}>

      <div
        className="flex flex-row items-center justify-center"
      >
        <SocialLinks
          links={profile?.socialLinks}
          expandable={false}
          iconClassName="w-5 h-5"
          itemClassName="mr-2 ml-2"
        />
      </div>

      <div style={{ flex: 1 }} className="hidden sm:flex">
        &nbsp;
      </div>

      <div className='flex flex-col items-center justify-center'>
        <H level={hLevel.h2} className="text-center text-gray-600">
          Got Any ideas to work on?
        </H>
        <button className='uppercase text-[12px] rounded-3xl bg-red-600 px-14 py-4 text-white font-bold tracking-widest '>
          Let's Talk
        </button>
      </div>

      <ContactForm />
    </footer>
  );
};

export default Footer;
