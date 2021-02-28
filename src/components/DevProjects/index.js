import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

// Components
import BigRoundedTag from '../../microComponents/BigRoundedTag';
import SmallTag from '../../microComponents/SmallTag';

import './index.scss';

const DevProjects = () => {
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

            {/* -- Kikiveu block */}

            <li className="devProjects__module__square__kikiveu">
              <Link to="/projets-dev/kikiveu">
                <div className="devProjects__module__square__kikiveu__block" />
                <div className="devProjects__module__square__kikiveu__content">
                  <h2 className="devProjects__module__square__kikiveu__content__mainTitle">
                    <div className="devProjects__module__square__kikiveu__content__mainTitle__small__title">
                      <BigRoundedTag text="Kikiveu" />
                    </div>
                  </h2>
                  <div className="devProjects__module__square__kikiveu__content__description">
                    <SmallTag text="React/Redux/Axios" />
                  </div>

                </div>
              </Link>
            </li>

            {/* -- Portfolio 2021 */}
            <li className="devProjects__module__square__portfolio2021">
              <Link to="/projets-dev/portfolio2021">
                <div className="devProjects__module__square__portfolio2021__block" />
                <div className="devProjects__module__square__portfolio2021__content">
                  <h2 className="devProjects__module__square__portfolio2021__content__mainTitle">
                    <div className="devProjects__module__square__portfolio2021__content__mainTitle__small__title">
                      <BigRoundedTag text="Portfolio 2021" />
                    </div>
                  </h2>
                  <div className="devProjects__module__square__portfolio2021__content__description">
                    <SmallTag text="React" />
                  </div>

                </div>
              </Link>
            </li>

            {/* -- Api block */}
            <li className="devProjects__module__square__api">
              <Link to="/projets-dev/git-api-search">
                <div className="devProjects__module__square__api__block" />
                <div className="devProjects__module__square__api__content">
                  <h2 className="devProjects__module__square__api__content__mainTitle">
                    <div className="devProjects__module__square__api__content__mainTitle__small__title">
                      <BigRoundedTag text="Git API - Search" />
                    </div>
                  </h2>
                  <div className="devProjects__module__square__api__content__description">
                    <SmallTag text="React/Requêtes API Rest - Axios/Semantic UI React" />
                  </div>

                </div>
              </Link>
            </li>

            {/* -- ToDoList block */}
            <li className="devProjects__module__square__toDoList">
              <Link to="/projets-dev/todolist-vue">
                <div className="devProjects__module__square__toDoList__block" />
                <div className="devProjects__module__square__toDoList__content">
                  <h2 className="devProjects__module__square__toDoList__content__mainTitle">
                    <div className="devProjects__module__square__toDoList__content__mainTitle__small__title">
                      <BigRoundedTag text="Todo List Vue" />
                    </div>
                  </h2>
                  <div className="devProjects__module__square__toDoList__content__description">
                    <SmallTag text="Vue.js/VueDraggable" />
                  </div>

                </div>
              </Link>
            </li>

            {/* -- Portfolio 2020 */}
            <li className="devProjects__module__square__portfolio2020">
              <Link to="/projets-dev/portfolio2020">
                <div className="devProjects__module__square__portfolio2020__block" />
                <div className="devProjects__module__square__portfolio2020__content">
                  <h2 className="devProjects__module__square__portfolio2020__content__mainTitle">
                    <div className="devProjects__module__square__portfolio2020__content__mainTitle__small__title">
                      <BigRoundedTag text="Portfolio 2020" />
                    </div>
                  </h2>
                  <div className="devProjects__module__square__portfolio2020__content__description">
                    <SmallTag text="HTML/SCSS/Jquery" />
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

export default DevProjects;
