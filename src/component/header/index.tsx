import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export interface Props {
    changeColor: boolean,
}
const Header:React.FC<Props> = (props:Props) => {
    const navigation = useNavigation<any>()
    return(
        <>
            <View style={{ flexDirection:'row', paddingTop: 62, paddingLeft: 31, alignItems:'center', backgroundColor:'#FFFFFF' }}>
                <TouchableOpacity style={{  width: 28, height: 28, borderRadius: 7, backgroundColor: props.changeColor ? 'red':'#6c6c6c' }} onPress={() => navigation.navigate('Screen_03')}/>
                <Text style={{ fontSize: 12, fontWeight: 'bold', lineHeight: 14.06, left: 12, color:'#3E3E3E'  }}>LOREM</Text>
            </View>
            <View style={{ paddingTop: 43, paddingLeft: 31, paddingBottom: 25, backgroundColor:'#FFFFFF' }}>
                <Text style={{ fontSize: 32, fontWeight: '400', color:'#3E3E3E', lineHeight: 38, letterSpacing: 1 }}>LOREM IPSUM</Text>
            </View>
        </>
    )
}

export default Header;
