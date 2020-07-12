import React, { Fragment } from 'react';

import './style.css';
import Pokeball from '../../assets/pokeball.png';

const PokemonsContainer = ({ children, isLoaded }) => {
  return (
    <Fragment>
      {!isLoaded && (
        <div className="pokemons-container">
          <div className="loading">
            <span>LOADING...</span>
            <img
              className="image-shadow"
              src={Pokeball}
              alt="Loading pokémons"
            />
            <img className="pokeball" src={Pokeball} alt="Loading pokémons" />
          </div>
        </div>
      )}
      {isLoaded && <div className="pokemons-container">{children}</div>}
    </Fragment>
  );
};

export default PokemonsContainer;
