import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  // Additional styles for absolute positioning if needed
  absoluteInputContainer: {
    position: 'absolute',
    top: screenHeight, // Starts from below the screen
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  headerContainer: {
    height: 200, // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
  },
  logo: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
