import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';

import {onGoogleButtonPress} from '../google';
import {onFacebookButtonPress} from '../facebook';
import {statusCodes} from '@react-native-google-signin/google-signin';

const Login: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    const onGoogleLoginPress = () => {
        onGoogleButtonPress().then(
            () => {
                console.log('Signed in with Google!');
                navigation.navigate('RoomList');
            },
            error => {
                console.error('Something went wrong, sending you on');
                console.log(error.code);
                console.log(statusCodes.SIGN_IN_CANCELLED);
                navigation.navigate('RoomList');
            },
        );
    };

    const onFacebookLoginPress = () => {
        onFacebookButtonPress().then(
            () => {
                console.log('Signed in with Facebook!');
            },
            error => {
                console.error('Something went wrong, sending you on');
                console.log(error);
                navigation.navigate('RoomList');
            },
        );
    };

    return (
        <View style={styles.layout}>
            <TouchableOpacity
                onPress={() => {
                    onFacebookLoginPress();
                }}>
                <View style={styles.facebook}>
                    <Text style={styles.facebookText}>Sign in with Facebook</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    onGoogleLoginPress();
                }}>
                <View style={styles.google}>
                    <Text style={styles.googleText}>Sign in with Google</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    layout: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'powderblue',
    },
    facebook: {
        display: 'flex',
        height: 40,
        width: 250,
        borderRadius: 45,
        padding: 5,
        margin: 10,
        backgroundColor: '#3b5998',
    },
    facebookText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    google: {
        display: 'flex',
        height: 40,
        width: 250,
        borderRadius: 45,
        padding: 5,
        backgroundColor: '#de5246',
    },
    googleText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default Login;
