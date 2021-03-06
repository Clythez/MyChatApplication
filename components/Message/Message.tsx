import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import MessageUserHeader from '../MessageUserHeader/MessageUserHeader';

const Message: React.FC<{
  message: string;
  image: string;
  username: string;
  epochTime: number;
}> = ({message, image, username, epochTime}) => {
  return (
    <View style={styles.messageContainer}>
      <MessageUserHeader
        image={image}
        username={username}
        epochTime={epochTime}
      />
      <View style={styles.layout}>
        <Text style={styles.defaultText}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: 'powderblue',
  },
  messageContainer: {
    marginBottom: 10,
  },
  defaultText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Message;
