import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import PokemonInfo from './Pages/PokemonInfo';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pokemon_info" exact component={PokemonInfo} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
