import React from 'react';
import { Link } from 'react-router-dom';

import './pokemon-card.css';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-name">
        <p>
          {pokemon.name} <span> #{pokemon.number}</span>
        </p>
      </div>
      <div className="pokemon-image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon-info">
        <Link to="/pokemon_info">
          <button>Info</button>
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
