import firestore from '@react-native-firebase/firestore';

const getChannels = () => {
  const channelCollection = firestore().collection('Channels').get();
  return channelCollection;
};

const getChannelA = () => {
  const channelCollection = firestore()
    .collection('Channels')
    .doc('Room A')
    .get();
  return channelCollection;
};

const addMessage = (room, message) => {
  const time = firestore.Timestamp.now();
  const now = new Date(time.seconds * 1000);
  firestore()
    .collection('Channels')
    .doc(room)
    .set(
      {
        [now.getDate() +
        '/' +
        (now.getMonth() + 1) +
        '-' +
        now.getFullYear() +
        ' ' +
        now.getHours() +
        ':' +
        now.getMinutes()]: message,
      },
      {merge: true},
    )
    .then(() => {
      console.log('Message added!');
    });
};

export {getChannels, getChannelA, addMessage};
