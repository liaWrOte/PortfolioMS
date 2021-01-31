import React, { useState } from 'react';

// Components
import Header from '../../microComponents/Header';
import Aside from '../../microComponents/Aside';
import Footer from '../../microComponents/Footer';
import Intro from '../../microComponents/Intro';

// import images
import blueCircle from '../../assets/images/circle_blue.png';

import './index.scss';

const Home = () => {
  const [animate, setAnimation] = useState(false);
  const cssExpand = 'home__module__square__dev__block__expand';
  const cssShrink = 'home__module__square__dev__block__shrink';

  const onMouseEnterHandler = () => {
    console.log('enter');
    setAnimation(true);
  };

  const onMouseLeaveHandler = () => {
    console.log('leave');
    setAnimation(false);
  };


  return (
    <>
      <Header />
      <div className="home">

        <div>
          <Aside />
        </div>

        <div>
          <Intro />
          <ul className="home__module">
            <li className="home__module__square__dev" onMouseEnter={() => onMouseEnterHandler()} onMouseLeave={() => onMouseLeaveHandler()}>
              <div className="home__module__square__dev__block">
                <h2 className="home__module__square__dev__block__mainTitle">
                  <span className="home__module__square__dev__block__mainTitle__small__title">Projets</span>
                  <span className="home__module__square__dev__block__mainTitle__big__title">Dev</span>
                </h2>
                <img className={animate ? cssExpand : cssShrink } src={blueCircle} alt="circle animation" />
                <p className="home__module__square__dev__block__description">Explorez mes projets</p>
              </div>
            </li>
            <li className="home__module__square__me">
              <div className="home__module__square__me__block" />
            </li>
            <li className="home__module__square__blog">
              <div className="home__module__square__blog__block" />
            </li>
            <li className="home__module__square__contact">
              <div className="home__module__square__contact__block" />
            </li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Home;
