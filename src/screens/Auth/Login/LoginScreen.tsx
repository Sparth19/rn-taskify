import React, {FC, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AppHeader from '../../../components/common/AppHeader';
import {size} from '../../../themes/Metrics';
import AppInput from '../../../components/common/AppInput';
import AppButton from '../../../components/common/AppButton';
import {signUp} from '../../../services/authService';
import authStyles from '../authStyles';
import styles from '../authStyles';

interface Props {
  navigation: any;
}

const LoginScreen: FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    const result = await login(email, password);
    console.log('RESULT', result);
  };

  const navigateToSignup = () => navigation.navigate('SignupScreen');

  return (
    <SafeAreaView style={authStyles.main}>
      <AppHeader />
      <ScrollView>
        <View style={{marginHorizontal: size(20)}}>
          <Text style={styles.largeText}>Welcome Back!</Text>
          <Text style={styles.descText}>
            Please enter your information for login
          </Text>
        </View>
        <View style={{marginHorizontal: size(20)}}>
          <AppInput
            value={email}
            onChange={setEmail}
            hint={'Enter your email'}
            style={{marginVertical: size(10), padding: size(15)}}
          />

          <AppInput
            value={password}
            onChange={setPassword}
            hint={'Enter your password'}
            style={{marginVertical: size(10), padding: size(15)}}
            secureTextEntry={true}
          />
          <AppButton
            text={'Sign In'}
            onPress={handleLogin}
            style={{marginVertical: size(15)}}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.descText}>Signin with</Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.descText}>{`New user? `}</Text>
            <TouchableOpacity onPress={navigateToSignup}>
              <Text style={styles.signinText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
