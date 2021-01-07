import React from 'react';

// Components
import Header from '../../microComponents/Header';
import Aside from '../../microComponents/Aside';
import Footer from '../../microComponents/Footer';
import Intro from '../../microComponents/Intro';

import './index.scss';

const Home = () => {
  const a = 1;
  return (
    <>
      <Header />
      <div className="home">

        <div>
          <Aside />
        </div>

        <div>
          <Intro />
          <div className="home__squares">
            <div className="home__squares__flex">
              <div className="home__squares__flex__projects">
                <div className="home__squares__flex__projects__title">
                  <p className="home__squares__flex__projects__title__top">projets</p>
                  <p className="home__squares__flex__projects__title__bottom">dev</p>
                </div>
                <h3 className="home__squares__flex__projects__description">explorez mes projets.</h3>
              </div>
              <div className="home__squares__flex__aboutMe">me</div>
            </div>
            <div className="home__squares__flex">
              <div className="home__squares__flex__blog">blog</div>
              <div className="home__squares__flex__contact">contact</div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Home;
