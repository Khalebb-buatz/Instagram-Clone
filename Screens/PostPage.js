import React from 'react'
import {View,StyleSheet,Text } from 'react-native'

function PostPage() {
    return(
        <View style={Style.main}>
            <Text>
                Post Page
            </Text>
        </View>
    );
}

export default PostPage;

const Style = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})