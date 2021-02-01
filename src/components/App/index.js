import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Home from '../Home';
import DevProjects from '../DevProjects';
import Me from '../Me';

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
      <Route exact path="/contact">
        <Home />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
