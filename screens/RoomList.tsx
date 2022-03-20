import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import RoomListItem from '../components/RoomListItem/RoomListItem';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';
import Message from '../components/Message/Message';

const DummyRoomList: string[] = ['Room A', 'Room B', 'Room C'];

const RoomList = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.backgroundView}>
          <RoomListItem
            timer="5 minutes"
            roomName={DummyRoomList[1]}
            onClickHandler={() =>
              navigation.navigate('Room', {roomName: DummyRoomList[1]})
            }
          />
          <RoomListItem
            timer="5 minutes"
            roomName={DummyRoomList[2]}
            onClickHandler={() => navigation.navigate('Room')}
          />
          <Message
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_162386.png"
            username="Arnold WhatsHisFace"
            message="Size isnt everything"
          />
          <Message
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_162386.png"
            username="Daisy WhatsHerFigure"
            message="To me it is"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: 'powderblue',
  } /*
  defaultText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },*/,
});

export default RoomList;
