import React from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

// Components
import BigSquaredTag from '../../microComponents/BigSquaredTag';
import SmallTag from '../../microComponents/SmallTag';
import BigButton from '../../microComponents/BigButton';

import './index.scss';

const Me = () => {
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
        <div className="me" style={styles.fadeIn}>
          <ul className="me__module">

            {/* -- Me block */}
            <li className="me__module__square__me">
              <div className="me__module__square__me__block">
                <h2 className="me__module__square__me__block__mainTitle">
                  <span className="me__module__square__me__block__mainTitle__small__title">Qui je</span>
                  <span className="me__module__square__me__block__mainTitle__big__title bigTitle">Suis</span>
                </h2>
                <p className="me__module__square__me__block__description">Aptitudes & aspirations</p>
              </div>
            </li>

            {/* -- Aspirations block */}
            <li className="me__module__square__aspirations">
              <div className="me__module__square__aspirations__block">
                <p className="me__module__square__aspirations__block__description">
                  « Après deux formations consécutives en tant de Développeur web et de Web designer et 3 ans d’expérience en tant qu’intégratice Wordpress, <br /> je suis à la recherche d’un poste de <br />développeur web front-end sur Rennes et sa région.
                  <br /><br />Passionnée par la création d'expériences utilisateur digitales, mes qualités créatives et d'organisation me rendent polyvalente dans le développement d'applications web »
                </p>
              </div>
            </li>

            {/* -- Skills block */}
            <li className="me__module__square__competences">
              <div className="me__module__square__competences__block">
                <BigSquaredTag text="Compétences" />
                <SmallTag text="Languages" />
                <p>HTML, CSS/SCSS/SASS (BEM), Javascript, PHP
                </p>
                <SmallTag text="Librairies" />
                <p>React (Redux), Bootstrap,
                  Material-UI
                </p>
                <SmallTag text="Package manager" />
                <p>Npm, Yarn
                </p>
                <SmallTag text="Versioning" />
                <p>GIT
                </p>
                <SmallTag text="Graphisme" />
                <p>Adobe XD, Illustrator,
                  Photoshop, After Effects
                </p>
              </div>
            </li>

            {/* -- Experience block */}
            <li className="me__module__square__experience">
              <div className="me__module__square__experience__block">
                <BigSquaredTag text="Experience" />
                <SmallTag text="Lead front end developer - 2021" />
                <p>Projet de fin de formation en React/Symfony
                </p>
                <p>App qui aide à l’organisation de balades entre chiens.</p>
                <p>Lead dev front & product owner d’une équipe de 4 développeurs pendant 3 semaines</p>
                <p>Architecture React Redux</p>
                <p>Requêtes API Rest</p>
                <p>App de géolocalisation en mobile-first (React Leaflet)</p>
                <BigButton text="en savoir plus" />
                <SmallTag text="Intégratrice Wordpress / Webdesigner 2017-2020" />
                <p>Client principal Cogi-T Québec
                </p>
                <p>Intégration Wordpress (sites vitrine et e-commerce)</p>
                <p>Personnalisation de thèmes Wordpress</p>
                <p>Création d’image de marque (logo, charte graphique, motion design)</p>

                <BigButton text="en savoir plus" />
              </div>
            </li>

            {/* -- Hobbies block */}
            <li className="me__module__square__hobbies">
              <div className="me__module__square__hobbies__block">
                <BigSquaredTag text="Hobbies" />
                <SmallTag text="Art" />
                <p className="me__module__square__hobbies__block__description">2021</p>
                <p>Peinture à l’huile, pastel, poste de secrétaire bénévole
                  à l’association Art2Rennes (Salon LPMA 3000 visiteurs)
                </p>
                <SmallTag text="Voyage" />
                <p className="me__module__square__hobbies__block__description">2017 - 2020</p>
                <p>Roadtrip en Indonésie pendant 3 mois, Séjour de 2 ans
                  dans le nord de la Thaïlande, Aménagement de mon van
                  en vue de roadtrip en Europe
                </p>
              </div>
            </li>

            {/* -- Formation block */}
            <li className="me__module__square__formation">
              <div className="me__module__square__formation__block">
                <BigSquaredTag text="Formation" />
                <SmallTag text="Titre professionnel de niveau III de développeur web et web mobile - 2021" />
                <p className="me__module__square__experience__block__description">O'Clock</p>
                <p>O’Clock est une école spécialisée dans le
                  Développement web.
                </p>
                <p>L’apprentissage est basé sur le suivi de cours
                  en télé-présentiel et la mise en pratique des
                  notions avec des challenges quotidiens.
                </p>
                <p>J’y ai notamment appris le PHP, le javascript
                  et j’ai choisi desuivre la spécialisation d'un mois sur React
                </p>
                <BigButton text="en savoir plus" />
                <SmallTag text="Titre professionnel de niveau III en Webdesign (2020)" />
                <p className="me__module__square__experience__block__description">Greta Est-Bretagne</p>
                <p>Au travers d’une pédagogie active, j’y ai appris
                  Les fondements de l’UX et de l’UI.
                  C’est ici que j’ai découvert le HTML et le CSS.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </StyleRoot>
    </>
  );
};

export default Me;
