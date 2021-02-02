import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

const Aside = () => (
  <ul className="aside">
    <li className="aside__link">
      <NavLink exact to="/" activeClassName="aside__link__selected">
        HOME
      </NavLink>
    </li>
    <li className="aside__link">
      <NavLink exact to="/projets-dev" activeClassName="aside__link__selected">
        DEV
      </NavLink>
    </li>
    <li className="aside__link">
      <NavLink exact to="/projets-ux-ui" activeClassName="aside__link__selected">
        UX/UI
      </NavLink>
    </li>
    <li className="aside__link">
      <NavLink exact to="/qui-je-suis" activeClassName="aside__link__selected">
        QUI JE SUIS
      </NavLink>
    </li>
    <li className="aside__link">
      <NavLink exact to="/contact" activeClassName="aside__link__selected">
        CONTACT
      </NavLink>
    </li>
  </ul>
);

export default Aside;
