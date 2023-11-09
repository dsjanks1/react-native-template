// styles/SplashScreenStyles.ts
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window'); // Get the full width and height of the screen

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    width: width, // Set the width to the full screen
    height: height, // Set the height to the full screen
    backgroundColor: '#fff', // Optional: Set a background color in case the animation has transparency
  },
  animation: {
    width: width, // Set the width to the full screen
    height: height, // Set the height to the full screen
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Set the text color; choose a color that matches your app's theme
  },
});
