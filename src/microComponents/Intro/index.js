import React from 'react';
import { Link } from 'react-router-dom';

// import components
import BigSquaredTag from '../BigSquaredTag';
import BigRoundedTag from '../BigRoundedTag';

import './index.scss';

const Intro = () => {
  const devText = 'développeuse front-end';
  const designText = 'compétences ux | ui';

  const myName = "SANDRINE M'ZE";
  let index = 0;

  const writeText = () => {
    document.body.innerText = myName.slice(0, index);
    index++;
    if (index > myName.length - 1) {
      index = 0;
    }
  };

  return (
    <div className="intro">
      <Link to="/">
        <h1 className="intro__name bigTitle">SANDRINE M'ZE</h1>
        <div className="intro__skills">
          <BigSquaredTag text={devText} />
          <p className="intro__skills__and">&</p>
          <BigRoundedTag text={designText} />
        </div>
        <p>RENNES, BRETAGNE</p>
      </Link>
    </div>

  );
};

export default Intro;
