import React from 'react';
import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MessageCard = ({message, onDislike}: any) => {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerUser}>
        <Text style={styles.text}>{message.username}</Text>
        <Text style={styles.text}> {formattedDate} </Text>
      </View>
      <View>
        <Text style={styles.text}>{message.content}</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.textDis}>{message.dislike}</Text>
        <Pressable onPress={onDislike}>
          <Ionicons name="thumbs-down" color="#fff" size={20} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.1,
    borderRadius: 7,
    backgroundColor: '#CC7351',
    margin: 10,
    minHeight: 75,
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: '#000',
    elevation: 6,
  },
  containerUser: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 12,
  },
  button: {
    marginRight: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: 17,
    color: '#fff',
  },
  textDis: {
    color: '#fff',
    marginRight: 5,
    fontSize: 15,
  },
});

export default MessageCard;
