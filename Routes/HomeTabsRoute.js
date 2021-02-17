import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

import HomePage from '../Screens/HomePage';
import SearchPage from '../Screens/SearchPage';

const Tab = createBottomTabNavigator();

export default function HomeTabsRoute() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomePage} />
                <Tab.Screen name='Search' component={SearchPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}