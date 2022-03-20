import React from 'react';
import {
  View,
  Text,
  GestureResponderEvent,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface Props {
  onClickHandler: (event: GestureResponderEvent) => void;
  roomName: string;
  timer: string;
}

const RoomListItem: React.FC<Props> = ({roomName, onClickHandler, timer}) => {
  return (
    <TouchableOpacity onPress={onClickHandler}>
      <View style={styles.layout}>
        <Text style={styles.textStyling}>{roomName}</Text>
        <Text style={styles.textStyling}>{timer}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    height: 75,
    alignItems: 'center',
    margin: 5,
    padding: 9,
    backgroundColor: 'grey',
  },
  textStyling: {
    fontWeight: '600',
    fontSize: 20,
    color: 'white',
  },
});

export default RoomListItem;
