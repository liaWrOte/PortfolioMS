import React from 'react';
import PropTypes from 'prop-types';

// Components
import BigSquaredTag from '../../microComponents/BigSquaredTag';
import SmallTag from '../../microComponents/SmallTag';
import BigButton from '../../microComponents/BigButton';

import './index.scss';

const Project = ({ data, projectTitle, projectDate }) => {
  // To have the right data in the json file
  const dataInProject = { ...data };
  const dataToMap = dataInProject[projectTitle];

  return (
    <>
      <div className="project">
        <ul className="project__module">

          {/* -- project block */}
          <li className="project__module__square__project">
            <div className="project__module__square__project__block">
              <h2 className="project__module__square__project__block__mainTitle">
                <span className="project__module__square__project__block__mainTitle__small__title">projectez</span>
                <span className="project__module__square__project__block__mainTitle__big__title">Moi</span>
              </h2>
              <p className="project__module__square__project__block__description">Et rencontrons-nous</p>
            </div>
          </li>

          {/* -- Form block */}
          <li className="project__module__square__form">
            <div className="me__module__square__competences__block">
              <BigSquaredTag text={projectTitle} />
              <p>{projectDate}</p>
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
    </>
  );
};

Project.propTypes = {
  data: PropTypes.object.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectDate: PropTypes.string.isRequired,
};

export default Project;
