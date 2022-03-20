import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';

const MessageUserHeader: React.FC<{image: string; username: string}> = ({
  image,
  username,
}) => {
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
});

export default MessageUserHeader;
