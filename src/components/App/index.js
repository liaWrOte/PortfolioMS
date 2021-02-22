import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Package for contact form posting to my mailbox
import { FormspreeProvider } from '@formspree/react';

// == Import composants
import Home from '../Home';
import DevProjects from '../DevProjects';
import Me from '../Me';
import UxUiProjects from '../UxUiProjects';
import Contact from '../Contact';
import Project from '../Project';

// == Import micro-composants
import Aside from '../../microComponents/Aside';
import Header from '../../microComponents/Header';
import Intro from '../../microComponents/Intro';
import Footer from '../../microComponents/Footer';
import Legal from '../Legal';

// import data projects
import devProjects from '../../data/devProjects.json';
import uxUiProjects from '../../data/uxUiProjects.json';

// == Composant
const App = () => (
  <div className="app">
    <Aside />
    <Header />
    <Intro />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/projets-dev">
        <DevProjects />
      </Route>
      <Route exact path="/qui-je-suis">
        <Me />
      </Route>
      <Route exact path="/projets-ux-ui">
        <UxUiProjects />
      </Route>
      <Route exact path="/contact">
        <FormspreeProvider project="1619423438160526507">
          <Contact />
        </FormspreeProvider>
      </Route>
      <Route exact path="/mentions-legales">
        <Legal />
      </Route>
      <Route exact path="/projets-dev/kikiveu">
        <Project data={devProjects} projectTitle="kikiveu" projectDate="2021" />
      </Route>
      <Route exact path="/projets-dev/portfolio2021">
        <Project data={devProjects} projectTitle="portfolio 2021" projectDate="" />
      </Route>
      <Route exact path="/projets-dev/portfolio2020">
        <Project data={devProjects} projectTitle="portfolio 2020" projectDate="" />
      </Route>
      <Route exact path="/projets-uxui/wordpress">
        <Project data={uxUiProjects} projectTitle="wordpress" projectDate="2017/2020" />
      </Route>
      <Route exact path="/projets-uxui/ifps">
        <Project data={uxUiProjects} projectTitle="ifps" projectDate="2020" />
      </Route>
      <Route exact path="/projets-uxui/illustration">
        <Project data={uxUiProjects} projectTitle="illustration" projectDate="2019/2020" />
      </Route>
      <Route exact path="/projets-uxui/affiches">
        <Project data={uxUiProjects} projectTitle="affiches" projectDate="2020" />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
