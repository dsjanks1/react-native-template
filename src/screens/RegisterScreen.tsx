import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  KeyboardAvoidingView,
  Dimensions,
  Image,
} from 'react-native';
import styles from '../styles/RegisterScreenStyles';

const screenHeight = Dimensions.get('window').height;

const RegisterScreen = () => {
  const [step, setStep] = useState(0); // Step 0 for phone, 1 for email, etc.
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const inputAnim = useRef(new Animated.Value(0)).current; // Starts at position 0

  const onNext = () => {
    // Check if we're on the last input step
    if (step === 4) {
      // Submit the form
      // Here, you would handle the form submission, e.g., validation and sending data to a server
      alert('Submit form');
    } else {
      // Slide current input out
      Animated.timing(inputAnim, {
        toValue: -screenHeight,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        // Increment step to show next input
        setStep(prevStep => prevStep + 1);

        // Reset position for next input
        inputAnim.setValue(screenHeight);

        // Slide next input in
        Animated.timing(inputAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  // Render input based on the current step
  const renderInput = () => {
    switch (step) {
      case 0:
        return (
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            autoFocus={true}
          />
        );
      case 1:
        return (
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            autoFocus={true}
          />
        );
      case 2:
        return (
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Full Name"
            autoFocus={true}
          />
        );
      case 3:
        return (
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
            autoFocus={true}
          />
        );
      case 4:
        return (
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            secureTextEntry={true}
            autoFocus={true}
          />
        );
      default:
        return null;
    }
  };

  // Render button based on the current step
  const renderButton = () => {
    return (
      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>{step === 4 ? 'Submit' : 'Next'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/golden.png')} // Replace with your logo image path
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Register</Text>
      </View>
      <Animated.View
        style={[styles.inputContainer, {transform: [{translateY: inputAnim}]}]}>
        {renderInput()}
        {renderButton()}
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

