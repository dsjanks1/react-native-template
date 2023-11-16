// types/navigationProps.ts
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  // ... other screen params
};

export type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>;
export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;
export type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;
// ... other screen navigation props
