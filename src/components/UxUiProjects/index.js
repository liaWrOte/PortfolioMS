import React, { useState } from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

// Components
import Header from '../../microComponents/Header';
import Aside from '../../microComponents/Aside';
import Footer from '../../microComponents/Footer';
import Intro from '../../microComponents/Intro';
import BigSquaredTag from '../../microComponents/BigSquaredTag';
import SmallTag from '../../microComponents/SmallTag';
import BigButton from '../../microComponents/BigButton';

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
        <div className="uxUiProjects" style={styles.fadeIn}>

          <div>
            <ul className="uxUiProjects__module">

              {/* -- uxUiProjects block */}
              <li className="uxUiProjects__module__square__uxUiProjects">
                <div className="uxUiProjects__module__square__uxUiProjects__block">
                  <h2 className="uxUiProjects__module__square__uxUiProjects__block__mainTitle">
                    <span className="uxUiProjects__module__square__uxUiProjects__block__mainTitle__small__title">Projets</span>
                    <span className="uxUiProjects__module__square__uxUiProjects__block__mainTitle__big__title">Dev</span>
                  </h2>
                  <p className="uxUiProjects__module__square__uxUiProjects__block__description">Explorez mes projets</p>
                </div>
              </li>

              {/* -- Kikiveu block */}
              <li className="uxUiProjects__module__square__kikiveu">
                <div className="uxUiProjects__module__square__kikiveu__block">
                  <h2 className="uxUiProjects__module__square__kikiveu__block__mainTitle">
                    <span className="uxUiProjects__module__square__kikiveu__block__mainTitle__small__title">Qui je</span>
                    <span className="uxUiProjects__module__square__kikiveu__block__mainTitle__big__title">Kikiveu</span>
                  </h2>
                  <p className="uxUiProjects__module__square__kikiveu__block__description">React / Symfony</p>
                </div>
              </li>

              {/* -- Blog block */}
              <li className="uxUiProjects__module__square__blog">
                <div className="uxUiProjects__module__square__blog__block">
                  <h2 className="uxUiProjects__module__square__blog__block__mainTitle">
                    <span className="uxUiProjects__module__square__blog__block__mainTitle__small__title">Blog</span>
                    <span className="uxUiProjects__module__square__blog__block__mainTitle__big__title">Blog</span>
                  </h2>
                  <p className="uxUiProjects__module__square__blog__block__description">PHP / Bootstrap</p>
                </div>
              </li>

              {/* -- Api block */}
              <li className="uxUiProjects__module__square__api">
                <div className="uxUiProjects__module__square__api__block">
                  <h2 className="uxUiProjects__module__square__api__block__mainTitle">
                    <span className="uxUiProjects__module__square__api__block__mainTitle__small__title">Qui je</span>
                    <span className="uxUiProjects__module__square__api__block__mainTitle__big__title">GIT API</span>
                  </h2>
                  <p className="uxUiProjects__module__square__api__block__description">Javascript / Ajax</p>
                </div>
              </li>

              {/* -- ToDoList block */}
              <li className="uxUiProjects__module__square__toDoList">
                <div className="uxUiProjects__module__square__toDoList__block">
                  <h2 className="uxUiProjects__module__square__toDoList__block__mainTitle">
                    <span className="uxUiProjects__module__square__toDoList__block__mainTitle__small__title">Qui je</span>
                    <span className="uxUiProjects__module__square__toDoList__block__mainTitle__big__title">To Do List</span>
                  </h2>
                  <p className="uxUiProjects__module__square__toDoList__block__description">Javascript</p>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </StyleRoot>
    </>
  );
};

export default UxUiProjects;
