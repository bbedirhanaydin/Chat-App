import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authError from '../../../utils/authError';

const Login = ({navigation}: any) => {
  const [usermail, setUsermail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSign = () => {
    navigation.navigate('Sign');
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(usermail, password);
      navigation.navigate('Messages');
      setLoading(false);
    } catch (error: any) {
      showMessage({
        message: authError(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Ne Haldeyim?</Text>
      <Input
        value={usermail}
        onChangeText={(text: any) => setUsermail(text)}
        placeholder="Enter your e-mail"
      />
      <Input
        value={password}
        onChangeText={(text: any) => setPassword(text)}
        placeholder="Enter your password"
        isSecure
      />
      <Button text="Login" onPress={handleSubmit} loading={loading} />

      <Button onPress={handleSign} text="Sign Up" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#CC7351',
    fontSize: 35,
    fontFamily: 'Pacifico-Regular',
    marginBottom: 20,
  },
});

export default Login;
