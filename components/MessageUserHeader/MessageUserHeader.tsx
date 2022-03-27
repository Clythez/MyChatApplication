import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';
import {printableDate} from '../../helper/dateConverter';

const MessageUserHeader: React.FC<{
  image: string;
  username: string;
  epochTime: number;
}> = ({image, username, epochTime}) => {
  const formattedDate: string = printableDate(epochTime);
  return (
    <View style={styles.layout}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image,
            cache: 'only-if-cached',
          }}
          style={styles.actualImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textLayout}>{username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    height: 50,
  },
  imageContainer: {
    flex: 1,
    width: 50,
    borderRightWidth: 1,
  },
  actualImage: {
    width: 50,
    height: 50,
  },
  textContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLayout: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  date: {
    position: 'absolute',
    right: 0,
    top: 0,
    fontSize: 12,
  },
});

export default MessageUserHeader;
