// src/components/InputBoxComponent/index.tsx
import React, {useState} from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';
import styles from './styles';

type InputBoxComponentProps = TextInputProps & {
  customStyle?: object;
  isSignUpPassword?: boolean;
};

const InputBoxComponent: React.FC<InputBoxComponentProps> = ({
  customStyle,
  isSignUpPassword: isPassword,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const validatePassword = (text: string) => {
    return text.length >= 6; // Only checking length for this example
  };

  const passwordIsValid = validatePassword(inputValue);
  const showPasswordError = isPassword && isTouched && !passwordIsValid;

  const handleInputChange = (text: string) => {
    setInputValue(text);
    setIsTouched(true);
    if (rest.onChangeText) rest.onChangeText(text);
  };

  const handleInputBlur = () => {
    setIsTouched(true);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, customStyle, showPasswordError && styles.invalid]}
        onChangeText={handleInputChange}
        onBlur={handleInputBlur}
        value={inputValue}
        secureTextEntry={isPassword ?? false}
        {...rest}
      />
      {showPasswordError && (
        <Text style={styles.errorText}>Password needs to be 6 characters</Text>
      )}
    </View>
  );
};

export default InputBoxComponent;
