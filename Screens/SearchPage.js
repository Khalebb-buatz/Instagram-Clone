import React from 'react'
import {View,Text } from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'

function SearchPage() {
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <FontAwesome5 name='search' size={300} />
        </View>
    );
}

export default SearchPage;