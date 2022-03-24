import React, {useState, useEffect} from 'react';
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
import {getChannels} from '../firebase';

const RoomList = () => {
  const [RoomListNames, setRoomListNames] = useState<string[]>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    const tempArray: string[] = [];
    const fetchData = async () => {
      const data = await getChannels();
      data.forEach(snapshot => {
        tempArray.push(snapshot.id);
      });
      setRoomListNames([...tempArray]);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.backgroundView}>
          {RoomListNames.map(currentRoomName => (
            <RoomListItem
              timer={'2 minutes'}
              roomName={currentRoomName}
              onClickHandler={() =>
                navigation.navigate('Room', {roomName: currentRoomName})
              }
            />
          ))}
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
