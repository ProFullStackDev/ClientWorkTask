import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Header from '../../component/header';
import Border from '../../component/border';
import Modal from '../../component/modal';


const Screen_04: React.FunctionComponent = (props:any) =>{
    const [modalType,setModalType] = useState<number>(1)
    const [modalVisible,setModalVisible] = useState<boolean>(false)
    const [nextModalVisible,setNextModalVisible]  = useState<boolean>(false)

    const ActionPerform = () =>{
        if(modalType ===1 && !nextModalVisible){
            setModalType(2)
        }else if(modalType ===2 && !nextModalVisible){
            setModalType(1)
            setNextModalVisible(true)
            setModalVisible(true)
        }else if(nextModalVisible){
            setNextModalVisible(!nextModalVisible)
            props.navigation.navigate("Screen_15")
        }
    }
    return(
        <View style={{ flex: 1}}>
        {<Modal modalVisible={modalVisible}  nextModalVisible={nextModalVisible} modalType={modalType} setModalVisible={(val:any) => setModalVisible(val)} performAction={() =>ActionPerform()} />}
            <Header changeColor={nextModalVisible}/>
            <Border/>
            <View style={{ flex: 1, backgroundColor:'#ffffff',}}>
                <ScrollView contentContainerStyle={{ paddingBottom: 31, }}>
                    <View style={{ backgroundColor:'#ffffff', paddingTop: 35, paddingLeft: 31, paddingRight: 36}}>
                        <Text style={{ opacity: 0.6, lineHeight: 24, color:'#3E3E3E', fontWeight:'400', fontSize: 16 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</Text>
                    </View>
                    <View style={{ paddingTop: 25, paddingBottom: 39, paddingLeft: 31, backgroundColor:'#ffffff' }}>
                        <Text style={{ textDecorationLine:'underline', fontSize: 12, fontWeight: '400', lineHeight: 14.06, fontFamily:'Roboto', color:'#3E3E3E'  }}>LOREM IPSUM</Text>
                    </View>
                    <View style={{ alignItems:'center', backgroundColor:'#ffffff', paddingLeft: 31, paddingRight: 35 }}>
                            <Border />
                    </View>
                    <View style={{ flexDirection:'row', width:'100%', backgroundColor:'#ffffff' }}>
                        <View style={{ width:'50%' }}>
                            <View style={{ paddingTop: 34, paddingLeft: 31, flexDirection:'row', width:'100%' }}>
                                <Text style={{ fontSize: 18, fontWeight:'700', lineHeight: 21.09, color:'#808080' }}>LOREM IPSU</Text>
                                <View style={{ borderRadius: 10, borderWidth: 1, marginLeft: 7, borderColor:'#696969', paddingTop: 2, paddingHorizontal: 8, paddingBottom: 0 }}>
                                    <Text style={{ color:'#848484', fontSize: 12, lineHeight: 14.06 }}>i</Text>
                                </View>
                            </View>
                            <View style={{ paddingTop: 26, paddingLeft: 31 }}>
                                <Text style={{ fontSize: 42, color:'#3E3E3E', fontWeight:'300', opacity: 0.6 }} >0</Text>
                            </View>
                        </View>
                        <View style={{ width:'50%' }}>
                            <View style={{ width:'100%', paddingRight: 113, paddingTop: 34 }}>
                                <Text style={{ fontSize: 18, fontWeight:'700', color:'#909090' }}>Lorem</Text>
                            </View>
                            <View style={{ paddingTop: 26, paddingRight: 113, width:'100%',}}>
                                <Text style={{ fontSize: 42, color:'#3E3E3E', fontWeight:'300', opacity: 0.6}} >0,00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width:'100%', backgroundColor:'#ffffff', paddingTop: 77, paddingHorizontal: 32 }}>
                        <TouchableOpacity style={{ backgroundColor:'#292929', borderRadius: 8, paddingVertical: 18, paddingHorizontal: 57 }} onPress={() => setModalVisible(!modalVisible)}>
                            {modalType ===1 ?<Text style={{ fontSize: 18, fontWeight:'400', textAlign:'center', color:'#ffffff' }}>
                                Lorem Ipsum
                            </Text>:<Text style={{ fontSize: 18, fontWeight:'400', textAlign:'center', color:'#ffffff' }}>
                                Lorem Ipsum{'\n'}
                                Lorem Ipsum
                            </Text>}
                        </TouchableOpacity>
                    </View>
                    <View style={{ width:'100%', backgroundColor:'#ffffff', paddingTop: 14, paddingHorizontal: 46, }}>
                        <Text style={{ fontSize: 14, textAlign:'center', color:'#3E3E3E', opacity: 0.6 }}>Lorem Ipsum</Text>
                    </View>
                    <View style={{ width:'100%', backgroundColor:'#ffffff', paddingTop: 14, paddingHorizontal: 32 }}>
                        <TouchableOpacity style={{ borderWidth: 1, borderRadius: 8, paddingTop: 12.41, paddingBottom: 12.41, paddingHorizontal: 96,  borderColor:'##113984', flexDirection:'row', justifyContent:'center' }} onPress={() => props.navigation.navigate('Screen_03')}>
                            <View>
                                <Image source={require('../../assets/paypal_short.png')} style={{ width: 21, height: 25, resizeMode:'contain', backgroundColor:'transparent', position: 'absolute', zIndex: 1, }} />
                                <Image source={require('../../assets/paypal_short1.png')} style={{ width: 21, height: 25, resizeMode:'contain', backgroundColor:'transparent', zIndex: 0, marginTop: 3.78, marginLeft: 2.82 }} />
                            </View>
                            <View style={{ paddingTop: 5, paddingLeft: 12, flexDirection:'row' }}>
                                <Image source={require('../../assets/pay.png')} style={{ width: 46, height: 22, resizeMode:'contain', backgroundColor:'transparent' }} />
                                <Image source={require('../../assets/pal.png')} style={{ width: 42, height: 20, resizeMode:'contain', backgroundColor:'transparent' }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Screen_04;


