import React from 'react';
import { Link } from 'react-router-dom';

import './pokemon-card.css';

const PokemonCard = ({ info, pokemon }) => {
  return (
    <div className="pokemon-card">
      <div className={`pokemon-name ${pokemon.types.join('')}`}>
        <h4>
          {pokemon.name} <span> #{pokemon.number}</span>
        </h4>
      </div>
      <div className="pokemon-image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon-types">
        {pokemon.types.map(type => (
          <span key={type}>{type}</span>
        ))}
        {info && (
          <Link to={`/pokemon_info/${pokemon.name}`}>
            <button>info</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
