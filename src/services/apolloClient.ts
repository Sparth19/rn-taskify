// apolloClient.js

import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '@env';

console.log('API_URL', API_URL);

const httpLink = createHttpLink({
  uri: API_URL,
});

const authLink = setContext(async (_, {headers}) => {
  // Get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem('authToken');
  console.log('TOKEn', token);
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
