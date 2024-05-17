import React, {FC} from 'react';
import SignupScreen from './src/components/screens/Auth/Signup/SignupScreen';
import {ApolloProvider} from '@apollo/client';
import client from './src/services/apolloClient';
import 'react-native-devsettings/withAsyncStorage';

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <SignupScreen />
    </ApolloProvider>
  );
};

export default App;
