import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../../GraphQL/Get_Pokemons';
import PokemonCard from '../../Components/PokemonCard';

import './styles.css';

const Pokedex = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 151 },
  });

  return (
    <Fragment>
      {/* <h1>Pokedex</h1> */}
      <div className="pokedex">
        <div className="pokedex-search">
          <div className="ball">
            <div className="glass"></div>
          </div>
          <div className="input-container"></div>
        </div>
        <div className="pokemons-container">
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Pokedex;
