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

const Contact = () => {
  const test = 1;

  return (
    <>
      <Header />
      <div className="contact">

        <div>
          <Aside />
        </div>

        <div>
          <Intro />
          <ul className="contact__module">

            {/* -- contact block */}
            <li className="contact__module__square__contact">
              <div className="contact__module__square__contact__block">
                <h2 className="contact__module__square__contact__block__mainTitle">
                  <span className="contact__module__square__contact__block__mainTitle__small__title">Contactez</span>
                  <span className="contact__module__square__contact__block__mainTitle__big__title">Moi</span>
                </h2>
                <p className="contact__module__square__contact__block__description">Et rencontrons-nous</p>
              </div>
            </li>

            {/* -- Form block */}
            <li className="contact__module__square__form">
              <div className="contact__module__square__form__block">
                <h2 className="contact__module__square__form__block__mainTitle">
                  <span className="contact__module__square__form__block__mainTitle__small__title">Qui je</span>
                  <span className="contact__module__square__form__block__mainTitle__big__title">form</span>
                </h2>
                <p className="contact__module__square__form__block__description">React / Symfony</p>
              </div>
            </li>

          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
