import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const BigTag = ({ text }) => (
  <button className="bigButton" type="button">{text}</button>
);

BigTag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BigTag;
