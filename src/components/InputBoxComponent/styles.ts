// src/components/InputBoxComponent/styles.ts
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1, // Add border width
    borderColor: 'gray', // Add border color
    borderRadius: 20, // Adjust this value to control the roundness of the border
    padding: 10, // Optional: for better text input inside the box
  },

  invalid: {
    borderColor: 'red', // Border color when the password is invalid
    borderWidth: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  errorText: {
    fontSize: 12,
    color: 'red', // Text color for the error message
  },
});
