import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const BigTag = ({ text }) => (
  <h2 className="bigRoundedTag">{text}</h2>
);

BigTag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BigTag;
