import React from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { Link } from 'react-router-dom';

// Components
import BigRoundedLink from '../../microComponents/BigRoundedLink';
import SmallTag from '../../microComponents/SmallTag';

// import css
import './index.scss';

const UxUiProjects = ({ data }) => {
  const dataInProject = { ...data };
  // animations on load

  const styles = {
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    },
  };

  return (
    <>
      <StyleRoot>
        <div className="uxUiProjects">

          <ul className="uxUiProjects__module" style={styles.fadeIn}>

            {/* -- uxUiProjects block */}
            <li className="uxUiProjects__module__square__uxUiProjects">
              <div className="uxUiProjects__module__square__uxUiProjects__block">
                <h2 className="uxUiProjects__module__square__uxUiProjects__block__mainTitle">
                  <span className="uxUiProjects__module__square__uxUiProjects__block__mainTitle__small__title">Projets</span>
                  <span className="uxUiProjects__module__square__uxUiProjects__block__mainTitle__big__title bigTitle">UX/UI</span>
                </h2>
                <p className="uxUiProjects__module__square__uxUiProjects__block__description">Explorez mes projets</p>
              </div>
            </li>

            {/* -- UxUi items */}
            <li className="uxUiProjects__module__square__items">

              {(dataInProject) && (
                Object.keys(dataInProject).map((key) => (
                  <div className="uxUiProjects__module__square__items__link">
                    <BigRoundedLink text={key} key={Math.random()} link={`/projets-uxui/${key.replace(/ /g, '').toLowerCase()}`} />
                  </div>
                )))}

            </li>

          </ul>
        </div>
      </StyleRoot>
    </>
  );
};

export default UxUiProjects;
