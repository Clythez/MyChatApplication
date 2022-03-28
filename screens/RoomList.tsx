import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, View, RefreshControl} from 'react-native';

import RoomListItem from '../components/RoomListItem/RoomListItem';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';
import {getChannels} from '../firebase';
import uuid from 'react-native-uuid';

interface RoomInformation {
    roomName: string;
    roomDescription: string;
    timestamp: number;
}

const RoomList = () => {
    const [RoomListInformation, setRoomListInformation] = useState<RoomInformation[]>([]);
    const [refreshing, setRefreshing] = useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    useEffect(() => {
        const tempArray: RoomInformation[] = [];
        const fetchData = async () => {
            const data = await getChannels();
            data.forEach(snapshot => {
                tempArray.push({
                    roomName: snapshot.id,
                    roomDescription: snapshot.data().description,
                    timestamp: snapshot.data().timestamp,
                });
            });
            setRoomListInformation([...tempArray]);
        };
        fetchData();
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        const tempArray: RoomInformation[] = [];
        const fetchData = async () => {
            const data = await getChannels();
            data.forEach(snapshot => {
                tempArray.push({
                    roomName: snapshot.id,
                    roomDescription: snapshot.data().description,
                    timestamp: snapshot.data().timestamp,
                });
            });
            setRoomListInformation([...tempArray]);
            setRefreshing(false);
        };
        fetchData();
    }, []);

    const timeDifference = (timestamp: number) => {
        const timestampDate = timestamp * 1000;
        const now = new Date().getTime();
        const timeInMinutes = Math.floor((now - timestampDate) / 1000 / 60);
        const timeInHours = Math.floor((now - timestampDate) / 1000 / 60 / 60);
        const timeInDays = Math.floor((now - timestampDate) / 1000 / 60 / 60 / 24);
        if (timeInHours > 24) {
            return timeInDays + ' days';
        } else if (timeInMinutes > 60) {
            return timeInHours + ' hours';
        } else {
            return timeInMinutes + ' mins';
        }
    };

    return (
        <SafeAreaView style={styles.backgroundView}>
            <StatusBar />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View>
                    {RoomListInformation.sort((roomInformation1, roomInformation2) => {
                        return roomInformation2.timestamp - roomInformation1.timestamp;
                    }).map(roomInformation => (
                        <RoomListItem
                            key={uuid.v4().toString()}
                            roomName={roomInformation.roomName}
                            roomDescription={roomInformation.roomDescription}
                            timer={timeDifference(roomInformation.timestamp)}
                            onClickHandler={() =>
                                navigation.navigate('Room', {
                                    roomName: roomInformation.roomName,
                                })
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
        height: '100%',
        flex: 1,
        backgroundColor: 'powderblue',
    },
});

export default RoomList;
