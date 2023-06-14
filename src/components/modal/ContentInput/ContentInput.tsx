import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../Button';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const ContentInputModal = ({visible, onClose}: any) => {
  const [text, setText] = useState('');

  const onShare = () => {
    if (!text) {
      return;
    }
    sendContent();
    setText('');
  };

  const sendContent = () => {
    const usermail = auth().currentUser?.email;

    const contentObject = {
      content: text,
      username: usermail?.split('@')[0],
      date: new Date().toISOString(),
      dislike: 0,
    };
    database().ref('messages/').push(contentObject);
  };

  return (
    <Modal
      style={styles.containerModal}
      swipeDirection="down"
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Ne Haldesin?"
          value={text}
          onChangeText={setText}
          multiline
        />
        <Button text="Share" onPress={onShare} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    height: Dimensions.get('window').height / 2.7,
    width: Dimensions.get('window').width / 1,
    borderWidth: 1,
    alignItems: 'center',
  },
  containerModal: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    margin: 0,
  },
  input: {
    flex: 1,
    fontSize: 17,
    borderWidth: 0.5,
    borderColor: '#DDD',
    width: Dimensions.get('window').width / 1.1,
    height: 55,
    padding: 15,
    textAlignVertical: 'top',
  },
});

export default ContentInputModal;
