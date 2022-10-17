import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';

import Settings from './screens/Settings';
import NewTrip from './screens/NewTrip';
import DisplayTrip from './screens/DisplayTrip';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default class Navigation extends Component {
    render() { 
        return (
            <Stack.Navigator initialRouteName='Home' >
                <Stack.Screen name='Home' component={Home} options={{title: 'SydGO'}} />
                <Stack.Screen name='NewTrip' component={NewTrip} options={{title: 'New Trip'}} />
                <Stack.Screen name='DisplayTrip' component={DisplayTrip} options={{title: 'Routes'}} />
                <Stack.Screen name='Settings' component={Settings} />
            </Stack.Navigator>
        );
    }
}
 




 