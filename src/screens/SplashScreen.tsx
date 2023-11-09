// screens/SplashScreen.tsx
import * as React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from '../styles/SplashScreenStyles';
import {SplashScreenNavigationProp} from '../types/navigationProps';

type Props = {
  navigation: SplashScreenNavigationProp;
};

const SplashScreen: React.FC<Props> = ({navigation}) => {
  let animation = React.useRef(null);

  // React.useEffect(() => {
    // // This assumes the animation is the correct length of time before navigating
    // const timer = setTimeout(() => {
    //   navigation.navigate('Login');
    // }, 3000); // Adjust time based on your animation

  //   return () => clearTimeout(timer); // Clear the timer when unmounting
  // }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Animation covers the whole screen and plays once */}
      <LottieView
        ref={animation}
        source={require('../assets/rocketAnimationSplash.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          // If you want to navigate immediately after the animation ends, call it here
          navigation.navigate('Login');
        }}
        resizeMode="cover"
        style={styles.animation} // Ensure you have a style to set your animation size
      />
    </View>
  );
};

export default SplashScreen;
