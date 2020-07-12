import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GiReturnArrow } from 'react-icons/gi';

import PokedexHeader from '../../Components/PokedexHeader';
import PokemonsContainer from '../../Components/PokemonsContainer';
import PokemonCard from '../../Components/PokemonCard';

import './style.css';

const PokemonInfo = ({ match, pokemons, dispatch }) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    pokemons.filter(pokemon => {
      if (pokemon.name === match.params.name) {
        setPokemonData(pokemon);
      }
      return pokemon;
    });
  }, [pokemons, match.params.id]);

  return (
    <Fragment>
      <PokedexHeader />
      <PokemonsContainer isLoaded={pokemons.length}>
        <Link to="/">
          <GiReturnArrow
            style={{ color: 'white', width: '50px', height: '50px' }}
          />
        </Link>
        {pokemonData.id !== undefined && (
          <PokemonCard info={false} pokemon={pokemonData} />
        )}
        <div className="pokemon-card pokemon-info">
          <div className="info-header">
            <h4>Attacks List</h4>
          </div>
          {pokemonData?.attacks?.special.map(attack => (
            <div key={attack.name} className={`attack ${attack.type}`}>
              {attack.name}
            </div>
          ))}
        </div>
      </PokemonsContainer>
    </Fragment>
  );
};

export default connect(state => ({
  pokemons: state.pokemons,
}))(PokemonInfo);
