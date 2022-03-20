import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

export const Room: React.FC<{route: any}> = ({route}) => {
  const {roomName} = route.params;
  console.log(roomName);
  return (
    <View>
      <Text style={styles.defaultText}>Yaj POGGERS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Room;
