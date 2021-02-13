import React from 'react';
import { useHistory } from 'react-router-dom';

// import picto
import goBackSvg from '../../assets/images/pictos/goBack.svg';

import './index.scss';

const GoBackButton = () => {
  const history = useHistory();
  return (
    <button className="goBackButton" type="button" onClick={() => history.goBack()}>
      <img src={goBackSvg} alt="revenir en arrière" className="goBackButton__svg"/>
    </button>
  );
};

export default GoBackButton;
