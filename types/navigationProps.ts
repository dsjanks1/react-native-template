// types/navigationProps.ts
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
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
// ... other screen navigation props
