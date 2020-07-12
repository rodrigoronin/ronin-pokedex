import ApolloClient from 'apollo-boost';

const Api = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh',
});

export default Api;
