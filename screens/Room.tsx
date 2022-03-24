import React from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import Message from '../components/Message/Message';

export const Room: React.FC<{route: any}> = ({route}) => {
  const {roomName} = route.params;
  console.log(roomName);
  return (
    <ScrollView
      style={styles.backgroundView}
      contentInsetAdjustmentBehavior="automatic">
      <View>
        <Message
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_162386.png"
          username="Arnold WhatsHisFace"
          message="Size isnt everything"
        />
        <Message
          image="https://picsum.photos/id/237/200/300"
          username="Daisy WhatsHerFigure"
          message="To me it is"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  backgroundView: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
});

export default Room;
