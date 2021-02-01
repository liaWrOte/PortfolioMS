import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Components
import Header from '../../microComponents/Header';
import Aside from '../../microComponents/Aside';
import Footer from '../../microComponents/Footer';
import Intro from '../../microComponents/Intro';

// import images
import eyes from '../../assets/images/eye_3.svg';
import stars from '../../assets/images/stars_8.svg';
import blueCircle from '../../assets/images/bananas_2.svg';
import bananas from '../../assets/images/bananas_2.svg';

import './index.scss';

const Home = () => {
  const [animateDev, setAnimationDev] = useState(false);
  const [animateMe, setAnimationMe] = useState(false);
  const [animateBlog, setAnimationBlog] = useState(false);
  const [animateContact, setAnimationContact] = useState(false);

  const [blockName, pickBlock] = useState(null);
  const cssExpand = `home__module__square__${blockName}__block__expand`;

  const onMouseEnterHandlerDev = (block) => {
    pickBlock(block);
    setAnimationDev(true);
  };

  const onMouseEnterHandlerMe = (block) => {
    pickBlock(block);
    setAnimationMe(true);
  };

  const onMouseEnterHandlerBlog = (block) => {
    pickBlock(block);
    setAnimationBlog(true);
  };

  const onMouseEnterHandlerContact = (block) => {
    pickBlock(block);
    setAnimationContact(true);
  };

  const onMouseLeaveHandler = () => {
    console.log('leave');
    setAnimationDev(false);
    setAnimationMe(false);
    setAnimationBlog(false);
    setAnimationContact(false);
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

            {/* -- Dev block */}
            <li className="home__module__square__dev" onMouseEnter={() => onMouseEnterHandlerDev('dev')} onMouseLeave={() => onMouseLeaveHandler()}>
              <Link to="/projets-dev">
                <div className="home__module__square__dev__block">
                  <h2 className="home__module__square__dev__block__mainTitle">
                    <span className="home__module__square__dev__block__mainTitle__small__title">Projets</span>
                    <span className="home__module__square__dev__block__mainTitle__big__title">Dev</span>
                  </h2>
                  <img className={animateDev ? cssExpand : 'cssDefault'} src={eyes} alt="circle animation" />
                  <p className="home__module__square__dev__block__description">Explorez mes projets</p>
                </div>
              </Link>
            </li>

            {/* -- Me block */}
            <li className="home__module__square__me" onMouseEnter={() => onMouseEnterHandlerMe(('me'))} onMouseLeave={() => onMouseLeaveHandler()}>
              <Link to="/qui-je-suis">
                <div className="home__module__square__me__block">
                  <h2 className="home__module__square__me__block__mainTitle">
                    <span className="home__module__square__me__block__mainTitle__small__title">Qui je</span>
                    <span className="home__module__square__me__block__mainTitle__big__title">Suis</span>
                  </h2>
                  <img className={animateMe ? cssExpand : 'cssDefault'} src={stars} alt="circle animation" />
                  <p className="home__module__square__me__block__description">Aptitudes & aspirations</p>
                </div>
              </Link>
            </li>

            {/* -- Blog block */}
            <li className="home__module__square__blog" onMouseEnter={() => onMouseEnterHandlerBlog('blog')} onMouseLeave={() => onMouseLeaveHandler()}>
              <div className="home__module__square__blog__block">
                <h2 className="home__module__square__blog__block__mainTitle">
                  <span className="home__module__square__blog__block__mainTitle__small__title">Un autre</span>
                  <span className="home__module__square__blog__block__mainTitle__big__title">Blog</span>
                </h2>
                <img className={animateBlog ? cssExpand : 'cssDefault'} src={blueCircle} alt="circle animation" />
                <p className="home__module__square__blog__block__description">Réflexions</p>
              </div>
            </li>

            {/* -- Contact block */}
            <li className="home__module__square__contact" onMouseEnter={() => onMouseEnterHandlerContact(('contact'))} onMouseLeave={() => onMouseLeaveHandler()}>
              <div className="home__module__square__contact__block">
                <h2 className="home__module__square__contact__block__mainTitle">
                  <span className="home__module__square__contact__block__mainTitle__small__title">Contactez</span>
                  <span className="home__module__square__contact__block__mainTitle__big__title">Moi</span>
                </h2>
                <img className={animateContact ? cssExpand : 'cssDefault'} src={bananas} alt="circle animation" />
                <p className="home__module__square__contact__block__description">Et rencontrons-nous</p>
              </div>
            </li>

          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Home;
