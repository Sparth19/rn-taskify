import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/Auth/Signup/SignupScreen';
import LoginScreen from '../screens/Auth/Login/LoginScreen';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
      <Stack.Screen name={'SignupScreen'} component={SignupScreen} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return <AuthNavigator />;
};

export default MainNavigator;
