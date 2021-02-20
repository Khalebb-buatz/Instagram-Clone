import React from 'react';
import { FontAwesome,Feather,Octicons,Ionicons,Entypo,FontAwesome5} from '@expo/vector-icons'
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
            <Tab.Navigator initialRouteName='Home' tabBarOptions={{showLabel:false}} >
                <Tab.Screen name='Home' component={HomePage} options={{tabBarLabel:'Home', tabBarIcon:({}) => ( <Entypo name="home" size={30} color="black" /> )}} />
                <Tab.Screen name='Search' component={SearchPage} options={{tabBarLabel:'Search', tabBarIcon:() => ( <Octicons name='search' size={30} color="black" /> )}} />
                <Tab.Screen name='Post' component={PostPage} options={{tabBarLabel:' Post', tabBarIcon:() => ( <FontAwesome name="plus-square-o" size={30} color="black" /> )}} />
                <Tab.Screen name='Activity' component={ActivityPage} options={{tabBarLabel:'Activity', tabBarIcon:() => ( <Feather name="heart" size={30} color="black" /> )}} />
                <Tab.Screen name='Profile' component={ProfilePage} options={{tabBarLabel:'Profile', tabBarIcon:() => ( <Ionicons name="person-circle-sharp" size={30} color="black" /> )}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}