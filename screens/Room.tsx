import React, {useState, useEffect, useRef} from 'react';

import {View, StyleSheet, ScrollView, TextInput, Keyboard} from 'react-native';
import Message from '../components/Message/Message';
import {addMessage, getMessages} from '../firebase';
import uuid from 'react-native-uuid';

interface Message {
    message: string;
    user: string;
    time: number;
}

export const Room: React.FC<{route: any}> = ({route}) => {
    const [exampleText, setExampleText] = useState('');
    const [messages, setMessages] = useState<Message[]>();
    const scrollviewReference = useRef<ScrollView | null>(null);
    const {roomName} = route.params;
    console.log(roomName);

    useEffect(() => {
        scrollviewReference.current?.scrollToEnd({animated: false});
        // console.log('Hi');
    }, [messages]);

    useEffect(() => {
        // console.log('I Run!');
        const keyboardWillShowListener = Keyboard.addListener('keyboardDidShow', () => {
            scrollviewReference.current?.scrollToEnd({animated: true});
            console.log('Keyboard did show');
        });
        return () => {
            keyboardWillShowListener.remove();
        };
    }, []);

    useEffect(() => {
        getMessages(roomName).onSnapshot(querySnapshot => {
            const messagesData = querySnapshot.data();
            let temporaryMessages = [];
            for (const key in messagesData) {
                // console.log(key);
                // console.log(messagesData[key].message);
                // console.log(messagesData[key].user);
                temporaryMessages.push({
                    message: messagesData[key].message,
                    user: messagesData[key].user,
                    time: parseInt(key),
                });
            }
            setMessages([...temporaryMessages]);
            // console.log('In firebase');
        });
    }, [roomName]);

    const onInputChange = (text: string) => {
        scrollviewReference.current?.scrollToEnd({animated: true});
        setExampleText(text);
    };

    const onSubmit = () => {
        console.log(exampleText, roomName);
        addMessage(roomName, exampleText);
        setExampleText('');
        scrollviewReference.current?.scrollToEnd({animated: true});
    };

    return (
        <View style={styles.screen}>
            <ScrollView
                style={styles.backgroundView}
                contentInsetAdjustmentBehavior="automatic"
                ref={scrollviewReference}>
                <View>
                    {messages?.map(currentMessage => (
                        <Message
                            key={uuid.v4().toString()}
                            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_162386.png"
                            username={currentMessage.user}
                            message={currentMessage.message}
                            epochTime={currentMessage.time}
                        />
                    ))}
                </View>
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={exampleText}
                    onChangeText={onInputChange}
                    onSubmitEditing={onSubmit}
                    editable
                    placeholder="Enter your message here"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    defaultText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },
    backgroundView: {
        backgroundColor: 'powderblue',
    },
    inputContainer: {
        height: 60,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        display: 'flex',
        width: '80%',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
    },
    screen: {
        flex: 1,
    },
});

export default Room;
