// screens/LoginScreen.tsx
import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/LoginScreenStyles';
import {LoginScreenNavigationProp} from '../types/navigationProps';

// Define the props for the component, including the navigation prop
type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login to your account</Text>
      {/* Add your login form here */}
    </View>
  );
};

export default LoginScreen;
