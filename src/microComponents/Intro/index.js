import React from 'react';

// import components
import BigSquaredTag from '../BigSquaredTag';
import BigRoundedTag from '../BigRoundedTag';

import './index.scss';

const Intro = () => {
  const devText = 'développeuse front';
  const designText = 'designer ux | ui';
  return (
    <div className="intro">
      <h1 className="intro__name">SANDRINE M'ZE</h1>
      <div className="intro__skills">
        <BigSquaredTag text={devText} />
        <p className="intro__skills__and">&</p>
        <BigRoundedTag text={designText} />
      </div>
      <p>RENNES, BRETAGNE</p>
    </div>
  );
};

export default Intro;
