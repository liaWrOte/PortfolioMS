import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

const HamburgerMenu = () => (
  <ul className="hamburgerMenu">
    <li className="hamburgerMenu__link">
      <NavLink exact to="/" activeClassName="hamburgerMenu__link__selected">
        HOME
      </NavLink>
    </li>
    <li className="hamburgerMenu__link">
      <NavLink exact to="/projets-dev" activeClassName="hamburgerMenu__link__selected">
        DEV
      </NavLink>
    </li>
    <li className="hamburgerMenu__link">
      <NavLink exact to="/projets-ux-ui" activeClassName="hamburgerMenu__link__selected">
        UX/UI
      </NavLink>
    </li>
    <li className="hamburgerMenu__link">
      <NavLink exact to="/qui-je-suis" activeClassName="hamburgerMenu__link__selected">
        QUI JE SUIS
      </NavLink>
    </li>
    <li className="hamburgerMenu__link">
      <NavLink exact to="/contact" activeClassName="hamburgerMenu__link__selected">
        CONTACT
      </NavLink>
    </li>
    <a href="https://github.com/liaWrOte" target="_blank" rel="noreferrer noopener">
      <li className="header__link">GIT</li>
    </a>
    <a href="https://www.linkedin.com/in/sandrinemze/" target="_blank" rel="noreferrer noopener">
      <li className="header__link">LINKEDIN</li>
    </a>
  </ul>
);

export default HamburgerMenu;
