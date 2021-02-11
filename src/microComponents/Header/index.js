import React, { useEffect, Component, useRef } from 'react';

import './index.scss';

const Header = () => {
  // eye logo animation, follow cursor move

  const Eye = (event) => {
    const eyeRef = useRef(null);
    const x = (eyeRef.offsetLeft) + (eyeRef.offsetWidth / 2);
    const y = (eyeRef.offsetTop) + (eyeRef.offsetHeight / 2);
    const rad = Math.atan2(event.pageX - x, event.pageY - y);
    const rot = (rad * (180 / Math.PI) * -1) + 180;
    const eyeStyle = {
      WebkitTransform: `rotate(${rot}deg)`,
      MozTransform: `rotate(${rot}deg)`,
      MsTransform: `rotate(${rot}deg)`,
      transform: `rotate(${rot}deg)`,
    };
    return (
      <svg viewBox="0 0 100 100" width="100" className="header__logoContainer__circle" style={eyeStyle} ref={eyeRef}>
        <circle fill="lightblue" stroke="darkgray" cx="50" cy="50" r="20" />
      </svg>
    );
  };

  useEffect(() => {
    console.log('page loaded');
  }, []);

  return (
    <ul className="header">
      <div className="header__logoContainer">

        <Eye />

      </div>
      <a href="https://github.com/liaWrOte" target="_blank" rel="noreferrer noopener">
        <li className="header__link">GIT</li>
      </a>
      <a href="https://www.linkedin.com/in/sandrinemze/" target="_blank" rel="noreferrer noopener">
        <li className="header__link">LINKEDIN</li>
      </a>
    </ul>
  );
};

export default Header;
