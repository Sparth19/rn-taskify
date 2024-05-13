import React, {FC, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './SingupScreenStyles';
import AppHeader from '../../../common/AppHeader';
import {size} from '../../../../themes/Metrics';
import AppInput from '../../../common/AppInput';
import AppButton from '../../../common/AppButton';
import {Colors} from '../../../../themes/AppTheme';
import {signUp} from '../../../../services/authService';

interface Props {}

const SignupScreen: FC<Props> = props => {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handleSignup = () => {
    signUp(name, email, password, username);
  };

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
            <TouchableOpacity onPress={() => {}}>
              <Text style={{...styles.descText, color: Colors.mainTheme2}}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
