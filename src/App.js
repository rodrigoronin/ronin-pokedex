import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from './GraphQL/Get_Pokemons';
import { connect } from 'react-redux';

import Routes from './routes';

import './App.css';

const App = ({ initialPokemons, dispatch }) => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 151 },
    onCompleted: data => {
      dispatch({
        type: 'INITIAL_POKEMON_DATA',
        pokemons,
      });
    },
  });

  return (
    <div className="pokedex">
      <Routes />
    </div>
  );
};

export default connect(state => ({ initialPokemons: state.pokemons }))(App);
