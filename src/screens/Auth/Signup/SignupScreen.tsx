import React, {FC, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../authStyles';
import AppHeader from '../../../components/common/AppHeader';
import {size} from '../../../themes/Metrics';
import AppInput from '../../../components/common/AppInput';
import AppButton from '../../../components/common/AppButton';
import {signUp} from '../../../services/authService';

interface Props {
  navigation: any;
}

const SignupScreen: FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handleSignup = async () => {
    const result = await signUp(name, email, password, username);
    console.log('RESULT', result);
  };

  const navigateToSignin = () => navigation.navigate('LoginScreen');

  return (
    <SafeAreaView style={styles.main}>
      <AppHeader />
      <ScrollView>
        <View style={{marginHorizontal: size(20)}}>
          <Text style={styles.largeText}>Create Account</Text>
          <Text style={styles.descText}>
            Please enter your information to create your account
          </Text>
        </View>
        <View style={{marginHorizontal: size(20)}}>
          <AppInput
            value={name}
            onChange={setName}
            hint={'Enter your name'}
            style={{marginVertical: size(10), padding: size(15)}}
          />
          <AppInput
            value={email}
            onChange={setEmail}
            hint={'Enter your email'}
            style={{marginVertical: size(10), padding: size(15)}}
          />
          <AppInput
            value={username}
            onChange={setUsername}
            hint={'Enter your username'}
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
            text={'Sign Up'}
            onPress={handleSignup}
            style={{marginVertical: size(15)}}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.descText}>Signup with</Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.descText}>{`Have an Account? `}</Text>
            <TouchableOpacity onPress={navigateToSignin}>
              <Text style={styles.signinText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
