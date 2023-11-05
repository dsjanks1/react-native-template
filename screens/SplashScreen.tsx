// screens/SplashScreen.tsx
import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/SplashScreenStyles';
import {SplashScreenNavigationProp} from '../types/navigationProps';

type Props = {
  navigation: SplashScreenNavigationProp;
};

const SplashScreen: React.FC<Props> = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000); // Navigate after 2 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default SplashScreen;
