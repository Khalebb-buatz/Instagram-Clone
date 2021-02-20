import React from 'react'
import {View,StyleSheet,Text } from 'react-native'

function ActivityPage() {
    return(
        <View style={Style.main}>
            <Text>
                Activity Page
            </Text>
        </View>
    );
}

export default ActivityPage;

const Style = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})