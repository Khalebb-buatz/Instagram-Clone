import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

import HomePage from '../Screens/HomePage';
import SearchPage from '../Screens/SearchPage';
import PostPage from '../Screens/PostPage';
import ActivityPage from '../Screens/ActivityPage';
import ProfilePage from '../Screens/ProfilePage';

const Tab = createBottomTabNavigator();

export default function HomeTabsRoute() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomePage} />
                <Tab.Screen name='Search' component={SearchPage} />
                <Tab.Screen name='Post' component={PostPage} />
                <Tab.Screen name='Activity' component={ActivityPage} />
                <Tab.Screen name='Profile' component={ProfilePage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}