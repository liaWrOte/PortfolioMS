import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const BigTag = ({ text }) => (
  <h3 className="bigRoundedTag">{text}</h3>
);

BigTag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BigTag;
