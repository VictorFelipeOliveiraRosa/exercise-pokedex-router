import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import pokemons from './data/data';
import Pokedex from './components/Pokedex';

const Routes = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <Pokedex {...props} pokemons={pokemons} />}
      />
      <Route path="/teste" render={() => <h1>POKEDEX - TESTE</h1>} />
    </Switch>
  </Router>
);

export default Routes;
