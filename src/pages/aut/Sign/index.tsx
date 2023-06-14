import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authError from '../../../utils/authError';

const SignUp = ({navigation}: any) => {
  const [usermail, setUsermail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [repassword, setRePassword] = useState<any>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = () => {
    navigation.goBack();
  };

  const handleSubmit = async () => {
    if (password !== repassword) {
      showMessage({
        message: 'Passwords do not match',
        type: 'danger',
      });
      return; //şifreler uyuşmayınca yazmaya devam etmesin diye return ekledik. Yoksa kalan kodu çalıştırır.
    }
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(usermail, repassword);
      showMessage({
        message: 'User created',
        type: 'success',
      });
      navigation.navigate('Login');
      setLoading(false);
    } catch (error: any) {
      showMessage({
        message: authError(error.code),
        type: 'danger',
      });
      setLoading(false);
    }

    console.log(usermail, password, repassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <Input
        value={usermail}
        onChangeText={(text: string) => setUsermail(text)}
        placeholder="Enter your e-mail"
      />
      <Input
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        placeholder="Enter your password"
        isSecure
      />
      <Input
        value={repassword}
        onChangeText={(text: string) => setRePassword(text)}
        placeholder="Enter your password again"
        isSecure
      />
      <Button text="Sign Up" onPress={() => handleSubmit()} loading={loading} />

      <Button onPress={handleLogin} text="Login" />
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

export default SignUp;
