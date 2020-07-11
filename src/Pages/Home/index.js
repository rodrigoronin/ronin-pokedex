import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Pokedex = () => {
  return (
    <Fragment>
      <h1>Pokedex</h1>
      <Link to="/pokemon_info">
        <button>Info</button>
      </Link>
    </Fragment>
  );
};

export default Pokedex;
