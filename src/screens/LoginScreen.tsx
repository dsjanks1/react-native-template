// screens/LoginScreen.tsx
import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/LoginScreenStyles';
import {LoginScreenNavigationProp} from '../types/navigationProps';
import InputBoxComponent from '../components/InputBoxComponent';

// Define the props for the component, including the navigation prop
type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Replace with your app logo and name */}
        <Text style={styles.appName}>Your App Name</Text>
        <Image
          style={styles.imageLogo}
          source={require('../assets/golden.png')}
        />
      </View>
      <View style={styles.formContainer}>
        <InputBoxComponent placeholder="Username" secureTextEntry={false} />
        <InputBoxComponent placeholder="Password" isSignUpPassword={false} />
        {/* <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          // onChangeText, value, and other props go here
        /> */}
        <View>
          <TouchableOpacity
            style={styles.mrb10}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
