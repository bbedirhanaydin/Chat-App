import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet, View, FlatList} from 'react-native';
import AddButton from '../../components/AddButton';
import ContentInputModal from '../../components/modal/ContentInput/ContentInput';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../../card/MessageCard';
import auth from '@react-native-firebase/auth';

const Messages = () => {
  const [ModalVisible, setModalVisible] = useState<any>(false);
  const [contentList, setContentList] = useState<any>([]);

  useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        const parsedData = parseContentData(contentData || {}); //content Data null gelirse boş bir obje set ediyor yoksa hata verir.
        setContentList(parsedData);
        console.log(contentList);
      });
  }, []);

  const handleModalToggle = () => {
    setModalVisible(!ModalVisible);
  };

  const handleDislike = (item: any) => {
    database()
      .ref(`messages/${item.id}/`)
      .update({dislike: item.dislike + 1});
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contentList}
        renderItem={({item}) => (
          <MessageCard message={item} onDislike={() => handleDislike(item)} />
        )}
      />
      <View style={styles.icon}>
        <AddButton
          icon="add-circle"
          color="#CC7351"
          onPress={handleModalToggle}
          size={80}
        />
        <ContentInputModal visible={ModalVisible} onClose={handleModalToggle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
});

export default Messages;
