import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import PropTypes from 'prop-types';

// Components
import BigRoundedLink from '../../microComponents/BigRoundedLink';
import SmallTag from '../../microComponents/SmallTag';

import './index.scss';

const DevProjects = ({ data }) => {
  const dataInProject = { ...data };
  // animations on load

  const styles = {
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    },
  };

  console.log(dataInProject);

  return (
    <>
      <StyleRoot>
        <div className="devProjects">

          <ul className="devProjects__module" style={styles.fadeIn}>
            {/* -- DevProjects block */}
            <li className="devProjects__module__square__devProjects">
              <div className="devProjects__module__square__devProjects__block">
                <h2 className="devProjects__module__square__devProjects__block__mainTitle">
                  <span className="devProjects__module__square__devProjects__block__mainTitle__small__title">Projets</span>
                  <span className="devProjects__module__square__devProjects__block__mainTitle__big__title bigTitle">Dev</span>
                </h2>
                <p className="devProjects__module__square__devProjects__block__description">Explorez mes projets</p>
              </div>
            </li>

            {/* -- Projects items block */}

            <li className="devProjects__module__square__items">

              {(dataInProject) && (
                Object.keys(dataInProject).map((key) => (
                  <div className="devProjects__module__square__items__link">
                    <BigRoundedLink text={key} key={Math.random()} link={`/projets-dev/${key.replace(/ /g, '').toLowerCase()}`} />
                  </div>
                )))}

            </li>

          </ul>
        </div>

      </StyleRoot>
    </>
  );
};

DevProjects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DevProjects;
