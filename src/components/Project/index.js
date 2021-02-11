import React from 'react';
import PropTypes from 'prop-types';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

// Components
import BigRoundedTag from '../../microComponents/BigRoundedTag';
import SmallTag from '../../microComponents/SmallTag';
import BigButton from '../../microComponents/BigButton';

import './index.scss';

const Project = ({ data, projectTitle, projectDate }) => {
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

  return (
    <>
    <StyleRoot>
      <div className="project">
        <ul className="project__module" style={styles.fadeIn}>

          {/* -- project block */}
          <li className="project__module__square__project">
            <div className="project__module__square__project__block">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/1zFkeA-Gzek?start=2186" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </li>

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
                  if (array.length - 1 === i) {
                    return (
                      <div key={Math.random()}>
                        <SmallTag text={item.title} key={Math.random()} />
                        {item.links.map((subItem) => (
                          <div key={Math.random()}>
                            <BigButton text={subItem} />
                          </div>
                        ))}
                      </div>
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
