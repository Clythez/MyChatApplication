import firestore from '@react-native-firebase/firestore';

const getChannels = () => {
    const channelCollection = firestore().collection('Channels').get();
    return channelCollection;
};

const getMessages = roomName => {
    const messageCollection = firestore().collection('Messages').doc(roomName);
    return messageCollection;
};

const addMessageMeta = (room, message) => {
    const time = firestore.Timestamp.now();
    firestore()
        .collection('Channels')
        .doc(room)
        .set({message: message, timestamp: time.seconds}, {merge: true})
        .then(() => {
            console.log('Data logged!');
        });
};

const addMessage = (room, message) => {
    const time = firestore.Timestamp.now();
    const user = 'Legend';
    firestore()
        .collection('Messages')
        .doc(room)
        .set(
            {
                [time.seconds]: {user, message},
            },
            {merge: true},
        )
        .then(() => {
            addMessageMeta(room, message);
            console.log('Message added!');
        });
};

export {getChannels, getMessages, addMessage};
