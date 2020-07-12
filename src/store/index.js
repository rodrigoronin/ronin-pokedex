import { createStore } from 'redux';

const INITIAL_STATE = {
  pokemons: [],
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'INITIAL_POKEMON_DATA') {
    return {
      ...state,
      pokemons: action.pokemons,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
