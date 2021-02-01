import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import composants
import Home from '../Home';
import DevProjects from '../DevProjects';
import Me from '../Me';
import UxUiProjects from '../UxUiProjects';
import Contact from '../Contact';

// == Import micro-composants
import Aside from '../../microComponents/Aside';
import Header from '../../microComponents/Header';
import Intro from '../../microComponents/Intro';
import Footer from '../../microComponents/Footer';

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
        <Contact />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
