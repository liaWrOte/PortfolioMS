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

const DevProjectModal = () => {
  const test = 1;

  return (
    <>
      <div className="devProjectModal">

        <div>
          <ul className="devProjectModal__module">

            {/* -- DevProjectModal block */}
            <li className="devProjectModal__module__square__devProjectScreenshots">
              <div className="devProjectModal__module__square__devProjectScreenshots__block">
                <h2 className="devProjectModal__module__square__devProjectScreenshots__block__mainTitle">
                  <span className="devProjectModal__module__square__devProjectScreenshots__block__mainTitle__small__title">Projets</span>
                  <span className="devProjectModal__module__square__devProjectScreenshots__block__mainTitle__big__title">Dev</span>
                </h2>
                <p className="devProjectModal__module__square__devProjectScreenshots__block__description">Explorez mes projets</p>
              </div>
            </li>

            {/* -- Kikiveu block */}
            <li className="devProjectModal__module__square__kikiveu">
              <div className="devProjectModal__module__square__kikiveu__block">
                <h2 className="devProjectModal__module__square__kikiveu__block__mainTitle">
                  <span className="devProjectModal__module__square__kikiveu__block__mainTitle__small__title">Qui je</span>
                  <span className="devProjectModal__module__square__kikiveu__block__mainTitle__big__title">Kikiveu</span>
                </h2>
                <p className="devProjectModal__module__square__kikiveu__block__description">React / Symfony</p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default DevProjectModal;
