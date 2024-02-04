import React from 'react';
import { profile } from '../../data/profile';
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
    </footer>
  );
};

export default Footer;
