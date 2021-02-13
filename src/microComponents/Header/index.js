import React, {
  useEffect, Component, useRef, useState,
} from 'react';

import './index.scss';

const Header = () => {
  // eye logo animation, follow cursor move
  /* const [animation, setAnimation] = useState({ left: null, top: null });

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      setAnimation({ left: e.pageX, top: e.pageY });
    });
  }, []);

  const eyeRef = useRef();

  useEffect(() => {
    const x = (eyeRef.offsetLeft) + (eyeRef.offsetWidth / 2);
    const y = (eyeRef.offsetTop) + (eyeRef.offsetHeight / 2);
    const coords = { ...animation };
    console.log(coords);
    const rad = Math.atan2(coords.left - x, coords.top - y);
    const rot = (rad * (180 / Math.PI) * -1) + 180;
    return rot;
  }, []); */

  /*const eyeRef = useRef(null);

  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    useEffect(() => {
      window.addEventListener('mousemove', updateMousePosition);
      return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);
    return useMousePosition;
  };

  const [offsetValues, setOffsetValues] = useState({});
  useEffect(() => {
    const vertical = (eyeRef.current.offsetLeft) + (eyeRef.current.offsetWidth / 2);
    const horizontal = (eyeRef.current.offsetTop) + (eyeRef.current.offsetHeight / 2);
    console.log(vertical);
    console.log(horizontal);

    setOffsetValues({
      vertical,
      horizontal,
    });
  }, []);

  const [eyeStyle, setEyeStyle] = useState({
    WebkitTransform: 0,
    MozTransform: 0,
    MsTransform: 0,
    transform: 0,
  });

  const { x, y } = useMousePosition();
  const isInitialMount = useRef(true);
  useEffect(() => {
    // pour lancer le code seulement à l'updaét et pas au montage
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const rad = Math.atan2(x - offsetValues.vertical, y - offsetValues.horizontal);
      console.log(offsetValues.vertical);
      const rot = (rad * (180 / Math.PI) * -1) + 180;
  
      setEyeStyle({
        WebkitTransform: `rotate(${rot}deg)`,
        MozTransform: `rotate(${rot}deg)`,
        MsTransform: `rotate(${rot}deg)`,
        transform: `rotate(${rot}deg)`,
      });
    }
   
  }, [offsetValues]);*/


  return (
    <ul className="header">
      {/*<div className="header__logoContainer" ref={eyeRef}>

        <svg viewBox="0 0 100 100" width="100" className="header__logoContainer__circle" style={eyeStyle}>
          <circle fill="lightblue" stroke="darkgray" cx="50" cy="50" r="20" />
        </svg>

      </div>*/}
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
