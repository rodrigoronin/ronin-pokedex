import graphql from 'graphql-tag';

export const GET_POKEMONS = graphql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;
