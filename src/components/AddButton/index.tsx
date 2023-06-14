import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddButton = ({icon, onPress, size, color}: any) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
};

export default AddButton;
