import React from 'react'
import {View,Text } from 'react-native'
import { Ionicons, FontAwesome5} from '@expo/vector-icons'

function HomePage() {
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <FontAwesome5 name="home" size={300} color="black" />
        </View>
    );
}

export default HomePage;