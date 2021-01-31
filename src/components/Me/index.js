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

const Me = () => {
  const test = 1;

  return (
    <>
      <Header />
      <div className="me">

        <div>
          <Aside />
        </div>

        <div>
          <Intro />
          <ul className="me__module">

            {/* -- Me block */}
            <li className="me__module__square__me">
              <div className="me__module__square__me__block">
                <h2 className="me__module__square__me__block__mainTitle">
                  <span className="me__module__square__me__block__mainTitle__small__title">Qui je</span>
                  <span className="me__module__square__me__block__mainTitle__big__title">Suis</span>
                </h2>
                <p className="me__module__square__me__block__description">Aptitudes & aspirations</p>
              </div>
            </li>

            {/* -- Aspirations block */}
            <li className="me__module__square__aspirations">
              <div className="me__module__square__aspirations__block">
                <h2 className="me__module__square__aspirations__block__mainTitle">
                  Aptitudes et inspirations
                </h2>
                <p className="me__module__square__dev__block__description">
                  « Après deux formations consécutives en tant de Développeur web et de Web designer et 3 ans d’expérience en tant qu’intégratice Wordpress, je suis à la
                  recherche d’un poste de développeur web front-end sur Rennes et sa région. »
                </p>
              </div>
            </li>

                        {/* -- Skills block */}
                        <li className="me__module__square__competences">
              <div className="me__module__square__competences__block">
                <BigSquaredTag text="Compétences" />
                <SmallTag text="Languages" />
                <p>HTML, CSS (BEM), Javascript, PHP, SCSS/SASS
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
                <SmallTag text="Lead front end developer" />
                <p className="me__module__square__experience__block__description">2021</p>
                <p>Projet de fin de formation en React/Symfony
                  App qui aide à l’organisation de balades entre chiens.
                  Lead dev front & product owner d’une équipe
                  de 4 développeurs pendant 3 semaines
                  Architecture React Redux
                  App de géolocalisation en mobile-first (React Leaflet)
                </p>
                <BigButton text="en savoir plus" />
                <SmallTag text="Intégratrice Wordpress / Webdesigner" />
                <p className="me__module__square__experience__block__description">2017 - 2020</p>
                <p>Client principal Cogi-T Québec
                  Intégration Wordpress (sites vitrine et e-commerce)
                  Personnalisation de thèmes Wordpress
                  Création d’image de marque (logo, charte graphique,
                  motion design)
                </p>
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
                <BigButton text="en savoir plus" />
                <SmallTag text="Voyage" />
                <p className="me__module__square__hobbies__block__description">2017 - 2020</p>
                <p>Roadtrip en Indonésie pendant 3 mois, Séjour de 2 ans
                  dans le nord de la Thaïlande, Aménagement de mon van
                  en vue de roadtrip en Europe
                </p>
                <BigButton text="en savoir plus" />
              </div>
            </li>

                        {/* -- Formation block */}
                        <li className="me__module__square__formation">
              <div className="me__module__square__formation__block">
                <BigSquaredTag text="Formation" />
                <SmallTag text="O'Clock" />
                <p className="me__module__square__experience__block__description">Titre pro de développeur web et web mobile</p>
                <p>O’Clock est une école spécialisée dans le
                  Développement web.
                  L’apprentissage est basé sur le suivi de cours
                  en télé-présentiel et la mise en pratique des
                  notions avec des challenges quotidiens.
                  J’y ai notamment appris le PHP, le javascript
                  et j’ai choisi de me spécialiser en fin de formation
                  sur React
                </p>
                <BigButton text="en savoir plus" />
                <SmallTag text="Greta Est Bretagne" />
                <p className="me__module__square__experience__block__description">Titre professionnel de niveau III en Webdesign (2020)</p>
                <p>Au travers d’une pédagogie active, j’y ai appris
                  Les fondements de l’UX et de l’UI.
                  C’est ici que j’ai découvert le HTML et le CSS.
                </p>
                <BigButton text="en savoir plus" />
              </div>
            </li>

          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Me;
