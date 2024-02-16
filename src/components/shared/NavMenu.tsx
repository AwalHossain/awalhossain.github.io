import React, { useState } from 'react';

import { Link } from '../../types/Link';
import { Route, routes } from '../constants/routes';
import HyperLink from './HyperLink';
import ContactForm from '../elements/ContacForm';
import ThemeToggle from '../config/ThemeToggle';

const NavMenu = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  const handleContactClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent the link from navigating
    setIsModalOpen(true); // Open the modal
  };
  const links = Object.values(routes).map((route: Route): React.ReactElement => {
    const url = route.path === '/' ? route.path : `${route.path}/`;
    const link: Link = { url };

    // If this is the 'Contact' link, add an onClick handler
    const extraProps = route.name === 'Contact' ? { onClick: handleContactClick } : {};
    return (
      <>
      <li key={route.path} className="ml-5">
        <HyperLink
          link={link}
          className="uppercase text-xs"
          activeClassName="font-bold"
          {...extraProps}
          
        >
          {route.name}
        </HyperLink>
      </li>
      </>
      
    );
  });


  return (
    <>
    <ul className="flex flex-row">
      {links}
      {/* <li className="ml-5 sm:flex hidden">
        <HyperLink
          className="uppercase tex-xs"
          link={{ url: 'https://drive.google.com/file/d/1kylDDOuym_Ky1Fu_39PrVRm-aeMGefvR/view?usp=sharing' }}
        >
          resume
        </HyperLink>
      </li> */}
      <li className="ml-5 text- uppercase">
        <ThemeToggle />
      </li>
    </ul>
    {
      isModalOpen && (
        <ContactForm isOpen={isModalOpen} closeModal={closeModal} />
      )
    }
    </>
  );
};

export default NavMenu;
