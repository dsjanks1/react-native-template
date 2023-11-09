// styles/LoginScreenStyles.ts
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Neutral background color
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50, // Adjusted spacing for visual separation
  },
  formContainer: {
    justifyContent: 'center',
  },
  appName: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333', // Modern typography style
    marginBottom: 20,
  },
  registerButton: {
    borderColor: '#007bff', // Subtle border for the register button
    borderWidth: 1,
    borderRadius: 25, // Rounded corners for buttons
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  registerText: {
    color: '#007bff',
    textAlign: 'center',
    fontWeight: '500',
  },
  signInButton: {
    backgroundColor: '#007bff', // Use of a color pop for the sign-in button
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  signInButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
  },
  imageLogo: {
    width: 120,
    height: 120, // Adjusted logo size for a balanced appearance
    marginBottom: 20,
  },
  mrb10: {
    marginBottom: 10,
  },
});
