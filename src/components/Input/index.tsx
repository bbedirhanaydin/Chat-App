import React from 'react';
import {View, TextInput, Text, StyleSheet, Dimensions} from 'react-native';

const Input = ({value, placeholder, onChangeText, isSecure}: any) => {
  return (
    <TextInput
      style={styles.container}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      autoCapitalize="none"
      secureTextEntry={isSecure}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.1,
    height: 50,
    backgroundColor: '#fff',
    fontSize: 16,
    borderWidth: 0.5,
    borderColor: '#DDD',
    borderRadius: 6,
    margin: 8,
  },
});

export default Input;
