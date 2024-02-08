import React from 'react';

import { Link } from '../../types/Link';
import { Route, routes } from '../constants/routes';
import HyperLink from './HyperLink';

const NavMenu = (): React.ReactElement => {
  const links = Object.values(routes).map((route: Route): React.ReactElement => {
    // Adding a / to the end of the links so that activeClassName parameter
    // would work correctly.
    const url = route.path === '/' ? route.path : `${route.path}/`;
    const link: Link = { url };
    return (
      <li key={route.path} className="ml-5">
        <HyperLink
          link={link}
          className="uppercase text-xs"
          activeClassName="font-bold"
        >
          {route.name}
        </HyperLink>
      </li>
    );
  });

  return (
    <ul className="flex flex-row">
      {links}
      <li className="ml-5 sm:flex hidden">
        <HyperLink
          className="uppercase text-sm font-semibold border-2 border-solid border-black px-2 rounded"
          link={{ url: 'https://drive.google.com/file/d/1kylDDOuym_Ky1Fu_39PrVRm-aeMGefvR/view?usp=sharing' }}
          hoverClassName="hover:bg-black hover:text-white"
        >
          RESUME
        </HyperLink>
      </li>
    </ul>
  );
};

export default NavMenu;
