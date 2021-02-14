import React from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { Link } from 'react-router-dom';

// Components
import BigRoundedTag from '../../microComponents/BigRoundedTag';
import SmallTag from '../../microComponents/SmallTag';

// import css
import './index.scss';

const UxUiProjects = () => {
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
                  <span className="uxUiProjects__module__square__uxUiProjects__block__mainTitle__big__title">UX/UI</span>
                </h2>
                <p className="uxUiProjects__module__square__uxUiProjects__block__description">Explorez mes projets</p>
              </div>
            </li>

            {/* -- Intégration wordpress */}
            <li className="uxUiProjects__module__square__wordpress">
              <Link to="/projets-uxui/wordpress">
                <div className="uxUiProjects__module__square__wordpress__block" />
                <div className="uxUiProjects__module__square__wordpress__content">
                  <h2 className="uxUiProjects__module__square__wordpress__content__mainTitle">
                    <div className="uxUiProjects__module__square__wordpress__content__mainTitle__small__title">
                      <BigRoundedTag text="wordpress" />
                    </div>
                  </h2>
                  <div className="uxUiProjects__module__square__wordpress__content__description">
                    <SmallTag text="Intégration/webdesign" />
                  </div>

                </div>
              </Link>
            </li>

            {/* -- IFPS */}
            <li className="uxUiProjects__module__square__ifps">
              <Link to="/projets-uxui/ifps">
                <div className="uxUiProjects__module__square__ifps__block" />
                <div className="uxUiProjects__module__square__ifps__content">
                  <h2 className="uxUiProjects__module__square__ifps__content__mainTitle">
                    <div className="uxUiProjects__module__square__ifps__content__mainTitle__small__title">
                      <BigRoundedTag text="Webdesign" />
                    </div>
                  </h2>
                  <div className="uxUiProjects__module__square__ifps__content__description">
                    <SmallTag text="Image de marque/Adobe XD" />
                  </div>

                </div>
              </Link>
            </li>

            {/* -- Illustration */}
            <li className="uxUiProjects__module__square__illustration">
              <Link to="/projets-uxui/illustration">
                <div className="uxUiProjects__module__square__illustration__block" />
                <div className="uxUiProjects__module__square__illustration__content">
                  <h2 className="uxUiProjects__module__square__illustration__content__mainTitle">
                    <div className="uxUiProjects__module__square__illustration__content__mainTitle__small__title">
                      <BigRoundedTag text="illustration" />
                    </div>
                  </h2>
                  <div className="uxUiProjects__module__square__illustration__content__description">
                    <SmallTag text="Adobe Illustrator" />
                  </div>

                </div>
              </Link>
            </li>

            {/* -- Affiches */}
            <li className="uxUiProjects__module__square__affiches">
              <Link to="/projets-uxui/affiches">
                <div className="uxUiProjects__module__square__affiches__block" />
                <div className="uxUiProjects__module__square__affiches__content">
                  <h2 className="uxUiProjects__module__square__affiches__content__mainTitle">
                    <div className="uxUiProjects__module__square__affiches__content__mainTitle__small__title">
                      <BigRoundedTag text="affiches" />
                    </div>
                  </h2>
                  <div className="uxUiProjects__module__square__affiches__content__description">
                    <SmallTag text="Adobe Photoshop" />
                  </div>

                </div>
              </Link>
            </li>

          </ul>
        </div>
      </StyleRoot>
    </>
  );
};

export default UxUiProjects;
