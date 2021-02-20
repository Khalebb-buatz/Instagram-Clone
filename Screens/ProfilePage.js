import React from 'react'
import {View,StyleSheet,Text } from 'react-native'

function ProfilePage() {
    return(
        <View style={Style.main}>
            <Text>
                Profile Page
            </Text>
        </View>
    );
}

export default ProfilePage;

const Style = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})