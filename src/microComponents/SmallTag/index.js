import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const SmallTag = ({ text }) => (
  <h3 className="smallTag">{text}</h3>
);

SmallTag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SmallTag;
