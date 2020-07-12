import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { FaSearchengin } from 'react-icons/fa';

import PokedexHeader from '../../Components/PokedexHeader';
import PokemonsContainer from '../../Components/PokemonsContainer';
import PokemonCard from '../../Components/PokemonCard';

import './styles.css';
import { useEffect } from 'react';

const Pokedex = ({ pokemons }) => {
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons]);

  const filterPokemons = e => {
    const searchString = e.target.value;

    const filteredPokemons = pokemons.filter(pokemon => {
      if (pokemon.name.toLowerCase().indexOf(searchString) !== -1) {
        return pokemon.name.toLowerCase().indexOf(searchString) !== -1;
      }

      if (
        pokemon.types[0].toLowerCase().includes(searchString) ||
        pokemon.types[1]?.toLowerCase().includes(searchString)
      ) {
        return pokemon;
      }
    });

    setFilteredPokemons(filteredPokemons);
  };

  return (
    <Fragment>
      <PokedexHeader>
        <div className="search-pokemons">
          <FaSearchengin className="search-icon" />
          <input type="text" onChange={filterPokemons} />
        </div>
      </PokedexHeader>
      <PokemonsContainer isLoaded={filteredPokemons.length}>
        {filteredPokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} info={true} />
        ))}
      </PokemonsContainer>
    </Fragment>
  );
};

export default connect(state => ({ pokemons: state.pokemons }))(Pokedex);
