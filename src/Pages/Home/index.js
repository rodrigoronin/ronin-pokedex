import React, { Fragment, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../../GraphQL/Get_Pokemons';
import PokemonCard from '../../Components/PokemonCard';

import { FaSearchengin } from 'react-icons/fa';

import './styles.css';

const Pokedex = () => {
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 151 },
    onCompleted: data => {
      setFilteredPokemons(data.pokemons);
    },
  });

  const filterPokemons = e => {
    const searchString = e.target.value;

    const filteredPokemons = pokemons.filter(pokemon => {
      if (pokemon.name.toLowerCase().indexOf(searchString) !== -1) {
        return pokemon.name.toLowerCase().indexOf(searchString) !== -1;
      }

      if (
        pokemon.types[0].toLowerCase() === searchString ||
        pokemon.types[1]?.toLowerCase() === searchString
      ) {
        console.log(pokemon.name);
        return pokemon;
      }
    });

    setFilteredPokemons(filteredPokemons);
    // });
  };

  return (
    <Fragment>
      {/* <h1>Pokedex</h1> */}
      <div className="pokedex">
        <div className="pokedex-header">
          <div className="ball-container">
            <div className="ball">
              <div className="glass"></div>
            </div>
            <div className="ball ball-red">
              <div className="glass glass-red"></div>
            </div>
            <div className="ball ball-yellow">
              <div className="glass glass-yellow"></div>
            </div>
            <div className="ball ball-green">
              <div className="glass glass-green"></div>
            </div>
          </div>
          {/* <div className="pokedex-title">
            <span>POKÉMON</span>
          </div> */}
          <div className="search-pokemons">
            <FaSearchengin className="search-icon" />
            <input type="text" onChange={filterPokemons} />
          </div>
        </div>
        <div className="pokemons-container">
          {filteredPokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Pokedex;
