import React from 'react';
import {View, Text, GestureResponderEvent, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
    onClickHandler: (event: GestureResponderEvent) => void;
    roomName: string;
    roomDescription: string;
    timer: string;
}

const RoomListItem: React.FC<Props> = ({roomName, roomDescription, timer, onClickHandler}) => {
    return (
        <TouchableOpacity onPress={onClickHandler}>
            <View style={styles.layout}>
                <View style={styles.titleAndDescription}>
                    <Text style={styles.roomNameStyling}>{roomName}</Text>
                    <Text style={styles.roomDescriptionStyling}>{roomDescription}</Text>
                </View>
                <View style={styles.timer}>
                    <Text style={styles.timerText}>{timer}</Text>
                </View>
                <View style={styles.icon}>
                    <Text style={styles.iconText}>{'>'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    layout: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        height: 75,
        margin: 5,
        padding: 9,
        backgroundColor: 'grey',
    },
    titleAndDescription: {
        flexDirection: 'column',
        height: '100%',
        width: '55%',
    },
    roomNameStyling: {
        fontWeight: '600',
        fontSize: 20,
        color: 'white',
    },
    roomDescriptionStyling: {
        fontWeight: '600',
        fontSize: 12,
        color: 'white',
    },
    timer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
    },
    timerText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        color: 'white',
    },
    icon: {
        width: '15%',
    },
    iconText: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        margin: 7,
    },
});

export default RoomListItem;
