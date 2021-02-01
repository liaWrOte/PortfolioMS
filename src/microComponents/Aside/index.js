import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Aside = () => (
  <ul className="aside">
    <li className="aside__link">
      <Link to="/">
        HOME
      </Link>
    </li>
    <li className="aside__link">
      <Link to="/projets-dev">
        DEV
      </Link>
    </li>
    <li className="aside__link">
      <Link to="/projets-ux-ui">
        UX/UI
      </Link>
    </li>
    <li className="aside__link">
      <Link to="/qui-je-suis">
        QUI JE SUIS
      </Link>
    </li>
    <li className="aside__link">
      <Link to="/contact">
        CONTACT
      </Link>
    </li>
  </ul>
);

export default Aside;
