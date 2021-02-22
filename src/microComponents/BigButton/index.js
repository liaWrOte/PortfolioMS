import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const BigTag = ({ text, link }) => (
  <a target="_blank" href={link} rel="noReferrer" className="bigButton">
    <button className="bigButton__item" type="button">{text}</button>
  </a>
  
);

BigTag.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BigTag;
