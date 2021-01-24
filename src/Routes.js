import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import { About } from './pages/about';
import { Favorite } from './pages/favorite';
import PokemonDetails from './components/PokemonDatails';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={(props) => <Home {...props} />} />
    <Route path="/about" component={About} />
    <Route path="/favorite" component={Favorite} />
    <Route path="/teste" render={() => <h1>POKEDEX - TESTE</h1>} />
    <Route
      path="/pokemons/:id"
      render={(props) => <PokemonDetails {...props} />}
    />
  </Switch>
);

export default Routes;
