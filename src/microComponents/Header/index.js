import React, {
  useEffect, Component, useRef, useState,
} from 'react';
import { NavLink } from 'react-router-dom';

// import nav picto
import navPicto from '../../assets/images/pictos/menu.svg';

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

  /* const eyeRef = useRef(null);

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

  }, [offsetValues]); */

  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {

  }, []);

  const toggleMenu = () => {
    if (activeMenu === null) {
      setActiveMenu('active');
      console.log('was null, now active');
    }
    else {
      setActiveMenu(null);
      console.log('was active, now null');
    }
  };

  return (
    <ul className="header">
      <div className="header__links">
        {/* <div className="header__logoContainer" ref={eyeRef}>

        <svg viewBox="0 0 100 100" width="100" className="header__logoContainer__circle" style={eyeStyle}>
          <circle fill="lightblue" stroke="darkgray" cx="50" cy="50" r="20" />
        </svg>

      </div> */}
        <a href="https://github.com/liaWrOte" target="_blank" rel="noreferrer noopener" className="header__links__item">
          <div className="header__links__item__logoGit" />
          <li className="header__links__link">GIT</li>
        </a>
        <a href="https://www.linkedin.com/in/sandrinemze/" target="_blank" rel="noreferrer noopener" className="header__links__item">
          <div className="header__links__item__logoLinkedin" />
          <li className="header__links__link">LINKEDIN</li>
        </a>
      </div>
      <div className="header__hamburger">
        <span className="header__hamburger__circle" onClick={() => toggleMenu()}>
          <img src={navPicto} alt="bouton hamburger" className={(activeMenu !== null) ? 'header__hamburger__circle__picto__rotate' : 'header__hamburger__circle__picto'} />
        </span>
      </div>

      <div className="header__modal">
        <span className={(activeMenu !== null) ? 'header__modal__circle__grow' : 'header__modal__circle'} />
      </div>

      <ul className={(activeMenu !== null) ? 'header__nav__active' : 'header__nav'}>
        <li className="header__nav__link" onClick={() => toggleMenu()}>
          <NavLink exact to="/" activeClassName="header__nav__link__selected">
            HOME
          </NavLink>
        </li>
        <li className="header__nav__link" onClick={() => toggleMenu()}>
          <NavLink exact to="/projets-dev" activeClassName="header__nav__link__selected">
            DEV
          </NavLink>
        </li>
        <li className="header__nav__link" onClick={() => toggleMenu()}>
          <NavLink exact to="/projets-ux-ui" activeClassName="header__nav__link__selected">
            UX/UI
          </NavLink>
        </li>
        <li className="header__nav__link" onClick={() => toggleMenu()}>
          <NavLink exact to="/qui-je-suis" activeClassName="header__link__selected">
            QUI JE SUIS
          </NavLink>
        </li>
        <li className="header__nav__link" onClick={() => toggleMenu()}>
          <NavLink exact to="/contact" activeClassName="header__link__selected">
            CONTACT
          </NavLink>
        </li>
        <li className="header__nav__link" />
        <a href="https://github.com/liaWrOte" target="_blank" rel="noreferrer noopener">
          <li className="header__nav__link" onClick={() => toggleMenu()}>GIT</li>
        </a>
        <a href="https://www.linkedin.com/in/sandrinemze/" target="_blank" rel="noreferrer noopener">
          <li className="header__nav__link" onClick={() => toggleMenu()}>LINKEDIN</li>
        </a>
      </ul>

    </ul>
  );
};

export default Header;
