import React from 'react';
import {Pressable, Text, ActivityIndicator, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';

const Button = ({text, onPress, loading, icon, theme = 'primary'}: any) => {
  return (
    <Pressable
      style={styles.primary.container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <View style={styles.primary.containerView}>
          <AntDesign name={icon} color="#fff" />
          <Text style={styles.primary.text}>{text}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default Button;
