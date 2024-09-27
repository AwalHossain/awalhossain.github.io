import React, { useState } from 'react';

import { Link } from '../../types/Link';
import ThemeToggle from '../config/ThemeToggle';
import { Route, routes } from '../constants/routes';
import ContactForm from '../elements/ContacForm';
import HyperLink from './HyperLink';

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
    console.log('extraProps', url, extraProps, routes);

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
        <li className="ml-5 text- uppercase cursor-pointer">
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
