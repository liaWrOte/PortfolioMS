import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.scss';

const BigRoundedLink = ({ text, link }) => (
  <Link to={link}>
    <h3 className="bigRoundedLink">{text}</h3>
  </Link>
  
);

BigRoundedLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BigRoundedLink;
