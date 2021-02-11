import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const BigSquaredTag = ({ text }) => (
  <h2 className="bigSquaredTag">{text}</h2>
);

BigSquaredTag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BigSquaredTag;
