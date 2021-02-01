import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Home from '../Home';
import DevProjects from '../DevProjects';
import Me from '../Me';
import UxUiProjects from '../UxUiProjects';
import Contact from '../Contact';

// == Composant
const App = () => (
  <div className="app">
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
  </div>
);

// == Export
export default App;
