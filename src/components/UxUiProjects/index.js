import React, { useState } from 'react';

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
  const test = 1;

  return (
    <>
      <Header />
      <div className="uxUi">

        <div>
          <Aside />
        </div>

        <div>
          <Intro />
          <ul className="uxUi__module">

            {/* -- uxUi block */}
            <li className="uxUi__module__square__uxUi">
              <div className="uxUi__module__square__uxUi__block">
                <h2 className="uxUi__module__square__uxUi__block__mainTitle">
                  <span className="uxUi__module__square__uxUi__block__mainTitle__small__title">Projets</span>
                  <span className="uxUi__module__square__uxUi__block__mainTitle__big__title">Dev</span>
                </h2>
                <p className="uxUi__module__square__uxUi__block__description">Explorez mes projets</p>
              </div>
            </li>

            {/* -- Kikiveu block */}
            <li className="devProjects__module__square__kikiveu">
              <div className="devProjects__module__square__kikiveu__block">
                <h2 className="devProjects__module__square__kikiveu__block__mainTitle">
                  <span className="devProjects__module__square__kikiveu__block__mainTitle__small__title">Qui je</span>
                  <span className="devProjects__module__square__kikiveu__block__mainTitle__big__title">Kikiveu</span>
                </h2>
                <p className="devProjects__module__square__kikiveu__block__description">React / Symfony</p>
              </div>
            </li>

            {/* -- Blog block */}
            <li className="devProjects__module__square__blog">
              <div className="devProjects__module__square__blog__block">
                <h2 className="devProjects__module__square__blog__block__mainTitle">
                  <span className="devProjects__module__square__blog__block__mainTitle__small__title">Blog</span>
                  <span className="devProjects__module__square__blog__block__mainTitle__big__title">Blog</span>
                </h2>
                <p className="devProjects__module__square__blog__block__description">PHP / Bootstrap</p>
              </div>
            </li>

            {/* -- Api block */}
            <li className="devProjects__module__square__api">
              <div className="devProjects__module__square__api__block">
                <h2 className="devProjects__module__square__api__block__mainTitle">
                  <span className="devProjects__module__square__api__block__mainTitle__small__title">Qui je</span>
                  <span className="devProjects__module__square__api__block__mainTitle__big__title">GIT API</span>
                </h2>
                <p className="devProjects__module__square__api__block__description">Javascript / Ajax</p>
              </div>
            </li>

            {/* -- ToDoList block */}
            <li className="devProjects__module__square__toDoList">
              <div className="devProjects__module__square__toDoList__block">
                <h2 className="devProjects__module__square__toDoList__block__mainTitle">
                  <span className="devProjects__module__square__toDoList__block__mainTitle__small__title">Qui je</span>
                  <span className="devProjects__module__square__toDoList__block__mainTitle__big__title">To Do List</span>
                </h2>
                <p className="devProjects__module__square__toDoList__block__description">Javascript</p>
              </div>
            </li>

          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UxUiProjects;
