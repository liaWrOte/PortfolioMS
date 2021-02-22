import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

// Components
import BigRoundedTag from '../../microComponents/BigRoundedTag';
import SmallTag from '../../microComponents/SmallTag';
import BigButton from '../../microComponents/BigButton';
import GoBackButton from '../../microComponents/goBackButton';

// Imports for backrgound-images
// devProjects
import kikiveuScreenshot1 from '../../assets/images/devProjects/kikiveu_screenshot.png';
import kikiveuScreenshot2 from '../../assets/images/devProjects/kikiveu_screenshot_2.png';
import portfolioScreenshot1 from '../../assets/images/devProjects/portfolio_screenshot.png';
import portfolioScreenshot2 from '../../assets/images/devProjects/portfolio_screenshot_2.png';
import portfolioWebdesignScreenshot1 from '../../assets/images/devProjects/portfolio_webdesign_screenshot.png';
import portfolioWebdesignScreenshot2 from '../../assets/images/devProjects/portfolio_webdesign_screenshot_2.png';
// uxUiProjects
import iconeScreenshot from '../../assets/images/uxUiProjects/icone_vignette.jpg';
import leTempsDesCigalesScreenshot from '../../assets/images/uxUiProjects/le_temps_des_cigales_vignette.jpg';
import ifpsScreenshot1 from '../../assets/images/uxUiProjects/ifps.jpg';
import ifpsScreenshot2 from '../../assets/images/uxUiProjects/ifps_2.jpg';
import illustrationSreenshot1 from '../../assets/images/uxUiProjects/peinture_lia_3_filles_vignette.jpg';
import illustrationSreenshot2 from '../../assets/images/uxUiProjects/illustration_lia_saliot_vignette.jpg';
import afficheScreenshot1 from '../../assets/images/uxUiProjects/portes_ouvertes_pfps_vignette.jpg';
import afficheScreenshot2 from '../../assets/images/uxUiProjects/black_tropical_woman_lia_vignette.jpg';

// import css
import './index.scss';

const Project = ({
  data, projectTitle, projectDate,
}) => {
  // To have the right data in the json file
  const dataInProject = { ...data };
  const dataToMap = dataInProject[projectTitle];

  // animations on load
  const styles = {
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    },
  };

  const [screenshotsData, setScreenshotsData] = useState(null);
  const [allImages, setImages] = useState(null);
  const [imagesToShow, setImagesToShow] = useState(null);

  useEffect(() => {
    dataToMap.map((item, i, array) => {
      // if it's the last object of the array, display button links
      if (array.length - 1 === i) {
        setScreenshotsData(item);
      }
    });
  }, [dataInProject]);

  useEffect(() => {
    if (screenshotsData !== null) {
      const images = [
        kikiveuScreenshot1,
        kikiveuScreenshot2,
        portfolioScreenshot1,
        portfolioScreenshot2,
        portfolioWebdesignScreenshot1,
        portfolioWebdesignScreenshot2,
        iconeScreenshot,
        leTempsDesCigalesScreenshot,
        ifpsScreenshot1,
        ifpsScreenshot2,
        illustrationSreenshot1,
        illustrationSreenshot2,
        afficheScreenshot1,
        afficheScreenshot2,
      ];
      setImages(images);
    }
  }, [screenshotsData]);

/*  Array.prototype.diff = function (arr2) {
    const ret = [];
    this.sort();
    arr2.sort();
    for (let i = 0; i < this.length; i += 1) {
      if (arr2.indexOf(this[i]) > -1) {
        ret.push(this[i]);
        for(let j = 0; j < globalThis.length; j += 1) {
          console.log(arr2.indexOf(ret));
        }
        
      }
    }
    return ret;
  };*/

  Array.prototype.diff = function (arr2) {
    const ret = [];
    this.sort();
    arr2.sort();
    for (let i = 0; i < this.length; i += 1) {
      if (arr2.indexOf(this[i]) > -1) {
        ret.push(this[i]);
        for(let j = 0; j < globalThis.length; j += 1) {
          console.log(arr2.indexOf(ret));
        }    
      }
    }
    return ret;
  };


  useEffect(() => {
    if (allImages !== null) {
      setImagesToShow(allImages.diff(screenshotsData.screenshots));
    }
  }, [allImages]);

  return (
    <>
      <StyleRoot>
        <div className="project">
          <ul className="project__module" style={styles.fadeIn}>
            {((allImages) !== null && (screenshotsData) !== null && (imagesToShow) !== null) && (
            <>
              <li className="project__module__square__project">
                <div
                  className="project__module__square__project__block"
                  style={{
                    backgroundImage: `url(${allImages[allImages.indexOf(screenshotsData.screenshots[0])]})`,
                    color: 'green',
                    zIndex: 20,
                  }}
                />
              </li>

              <li className="project__module__square__image">
                <div
                  className="project__module__square__image__block"
                  style={{
                    backgroundImage: `url(${allImages[allImages.indexOf(screenshotsData.screenshots[1])]})`,
                    color: 'green',
                    zIndex: 20,
                  }}
                />
              </li>
            </>
            )}

            {/* -- description block */}
            <li className="project__module__square__description">
              <div className="project__module__square__description__block">
                <div className="project__module__square__description__block__title">
                  <BigRoundedTag text={projectTitle} />
                  <p className="project__module__square__description__block__title__date">{projectDate}</p>
                </div>

                {(dataToMap) && (
                  dataToMap.map((item, i, array) => {
                  // if it's the last object of the array, display button links
                    if (array.length - 2 === i) {
                      return (
                        <div key={Math.random()}>
                          <SmallTag text={item.title} key={Math.random()} />
                          {item.links.map((subItem) => (
                            <div key={Math.random()} className="project__module__square__description__block__button">
                              <BigButton text={subItem.label} link={subItem.link} key={Math.random()} />
                            </div>
                          ))}
                        </div>
                      );
                    } if (array.length - 1 === i) {
                      return (
                        <div key={Math.random()} />
                      );
                    }
                    // else display text
                    return (
                      <div key={Math.random()}>
                        <SmallTag text={item.title} key={Math.random()} />
                        {item.data.map((subItem) => (
                          <div key={Math.random()}>
                            <p key={Math.random()}>{subItem}</p>
                          </div>
                        ))}
                      </div>
                    );
                  })
                )}
                <GoBackButton />
              </div>

            </li>
          </ul>
        </div>
      </StyleRoot>
    </>
  );
};

Project.propTypes = {
  data: PropTypes.object.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectDate: PropTypes.string.isRequired,
};

export default Project;
