import React from 'react';

import './style.css';

const PokedexHeader = props => {
  return (
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
      {props.children}
    </div>
  );
};

export default PokedexHeader;
