
// tslint:disable-next-line: linebreak-style
import React, { useState} from 'react'
import { View, Text, FlatList, TouchableOpacity, TouchableHighlight,Dimensions } from 'react-native'

import Border from '../../component/border'

const { height,width} = Dimensions.get('window');
const screenHeight: number = height;
const screenWidth: number = width;

const Screen_15: React.FunctionComponent = (props:any) => {


interface Screen_15_data {
  id: number; name: string; info: string,date:string
}
const Data: Screen_15_data[] = [
  {
      id: 1,
      name: 'Lorem Ipsum \nLorem Ipsum Lorem',
      info: 'Lorem Ipsum is simply dummy \ntext of the printing',
      date:'#0000'
    },
    {
      id: 2,
      name: 'Lorem Ipsum \nLorem Ipsum Lorem',
      info: 'Lorem Ipsum is simply dummy \ntext of the printing',
      date:'#0000'
    },
    {
      id:3,
      name: 'Lorem Ipsum \nLorem Ipsum Lorem',
      info: 'Lorem Ipsum is simply dummy \ntext of the printing',
      date:'#0000'
    },
    {
      id: 4,
      name: 'Lorem Ipsum \nLorem Ipsum Lorem',
      info: 'Lorem Ipsum is simply dummy \ntext of the printing',
      date:'#0000'
    },
    {
      id: 5,
      name: 'Lorem Ipsum \nLorem Ipsum Lorem',
      info: 'Lorem Ipsum is simply dummy \ntext of the printing',
      date:'#0000'
    },
  ]

 
  const [DummyData, setDummyData] = useState(Data)

  function separater() {
    return(
        <Border />
    )
  }
  function _loadmore() {
  let newdata = [...DummyData]
  setDummyData([...newdata, ...DummyData])
}

  function _renderList(item:any) {
    return (
    <TouchableHighlight onPress={() => props.navigation.navigate('Screen_03')} underlayColor='#ffffff' style={{ width: '100%', height: screenHeight*.28, backgroundColor: '#ffffff', flexDirection: 'row',alignItems:'center' }}>
      <>
        <View style={{ width: '70%' }}>
          <View style={{  paddingLeft: 34 }}>
            <Text style={{ fontSize: 24, fontWeight: '400', lineHeight: 25,  color: 'black' }}>{item.item.name} </Text>
          </View>
          <View style={{ paddingTop: 15, paddingLeft: 34 }}>
            <Text style={{ fontSize: 16, lineHeight: 18, letterSpacing: 0.4,  color: '#3E3E3E' }}>{item.item.info}</Text>
          </View>
          <View style={{ paddingTop:8, paddingLeft: 34,width:screenWidth/2.8 }}>
          <TouchableOpacity style={{ backgroundColor: '#7D7D7D', borderRadius: 8, paddingVertical: 7, alignItems:'center' }}>
              <Text style={{ fontSize: 12,  fontWeight: 'bold', lineHeight: 14.06, color: '#ffffff' }}>LOREM</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '30%',top:30,position:'absolute',right:30 }}>
          <View style={{ paddingTop: 29, paddingRight: 10, alignItems: 'flex-end' }}>
            
              <Text style={{ fontSize: 12,  fontWeight: 'bold', lineHeight: 14.06, color: 'black' }}>{item.item.date}</Text>
           
          </View>
        </View>
      </>
    </TouchableHighlight>
    )
  }
  return (
    <View style={{ flex: 1}}>
            
            <View style={{ flex: 1 }}>
                <FlatList
                    // style={{ flex: 1 }}
                    contentContainerStyle={{ backgroundColor: '#ffffff' }}
                    data={DummyData}
                    renderItem={(item) => _renderList(item)}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={separater}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => _loadmore()}
                    // extraData={DummyData}
                />
            </View>
            
            <View style={{ width: '100%', height: screenHeight*.16, backgroundColor: '#E5E5E5', justifyContent: 'center',alignItems:'center' }}>
               <TouchableOpacity style={{width:40,height:40,backgroundColor:'#24FF00'}} onPress={() => props.navigation.navigate('Screen_03')}/>
            </View>
        </View>
  )
}

export default Screen_15;