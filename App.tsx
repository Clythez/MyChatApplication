import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import RoomList from './screens/RoomList';
import Room from './screens/Room';
import Login from './screens/Login';

export type RootStackParams = {
    Login: any;
    RoomList: any;
    Room: any;
};

const Stack = createNativeStackNavigator<RootStackParams>();

GoogleSignin.configure({
    webClientId: '548054320141-81p5sp1pn14l1m0j3kvn6b6pb9k9h02j.apps.googleusercontent.com',
});

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="RoomList" component={RoomList} />
                <Stack.Screen name="Room" component={Room} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
