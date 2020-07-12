import graphql from 'graphql-tag';

export const GET_POKEMONS = graphql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      types
      image
      attacks {
        special {
          name
          type
          damage
        }
      }
    }
  }
`;
