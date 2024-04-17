import React, {FC} from 'react';
import {Text, SafeAreaView} from 'react-native';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import AppIcon from './src/components/common/AppIcon';
import {Icons} from './src/utils/Constants';

const App: FC = () => {
  return (
    <SafeAreaView>
      <IconMC name={'pin'} size={30} />
      <AppIcon type={Icons.MATERIAL} name={'pin'} />
      <Text>Hello world!</Text>
    </SafeAreaView>
  );
};

export default App;
