import React, { useState } from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
// make contact form send to mailbox with form spree
import { useForm, ValidationError } from '@formspree/react';

// Components
import BigButton from '../../microComponents/BigButton';

import './index.scss';

const Contact = () => {
  // animations on load
  const styles = {
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    },
  };

  // wire up the form component
  const [state, handleSubmit] = useForm('contactForm');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      <StyleRoot>

        <div className="contact">
          <ul className="contact__module">

            {/* -- contact block */}
            <li className="contact__module__square__contact" style={styles.fadeIn}>
              <div className="contact__module__square__contact__block">
                <h2 className="contact__module__square__contact__block__mainTitle">
                  <span className="contact__module__square__contact__block__mainTitle__small__title">Contactez</span>
                  <span className="contact__module__square__contact__block__mainTitle__big__title">Moi</span>
                </h2>
                <p className="contact__module__square__contact__block__description">Et rencontrons-nous</p>
              </div>
            </li>

            {/* -- Form block */}
            <li className="contact__module__square__form" style={styles.fadeIn}>
              <div className="contact__module__square__form__block">
                <form onSubmit={handleSubmit}
                className="contact__module__square__form__block__form">
                  <div className="contact__module__square__form__block__form__labelBlock">
                    <label htmlFor="name" className="contact__module__square__form__block__form__labelBlock__label">
                      Votre nom :
                    </label>

                    <input type="text" name="name" id="name" className="contact__module__square__form__block__form__labelBlock__input" required />
                  </div>
                  <div className="contact__module__square__form__block__form__labelBlock">
                    <label htmlFor="email" className="contact__module__square__form__block__form__labelBlock__label">
                      Votre email:
                    </label>
                    <input type="email" name="email" id="email" className="contact__module__square__form__block__form__labelBlock__input" required />
                  </div>
                  <div className="contact__module__square__form__block__form__labelBlock">
                    <label htmlFor="check" className="contact__module__square__form__block__form__labelBlock__label">
                      Validation
                    </label>
                    <input type="text" name="check" id="check" className="contact__module__square__form__block__form__labelBlock__input" required />
                  </div>
                  <div className="contact__module__square__form__block__form__labelBlock">
                    <label htmlFor="message" className="contact__module__square__form__block__form__labelBlock__label">
                      Votre message
                    </label>
                    <textarea type="text" name="message" id="message" className="contact__module__square__form__block__form__labelBlock__input__message" required />
                  </div>
                  <BigButton text="Envoyer" disabled={state.submitting} />
                </form>
              </div>
            </li>

          </ul>
        </div>
      </StyleRoot>
    </>
  );
};

export default Contact;
