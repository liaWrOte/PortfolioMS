import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Footer = () => (
  <ul className="footer">
    <Link to="/mentions-legales">
      <li className="footer__link">Mentions Légales</li>
    </Link>
  </ul>
);

export default Footer;
