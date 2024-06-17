import React, {FC} from 'react';
import {ApolloProvider} from '@apollo/client';
import client from './src/services/apolloClient';
import 'react-native-devsettings/withAsyncStorage';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
