// tslint:disable-next-line: linebreak-style
import React, { useState} from 'react'
import { View, Text, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'
import Header from '../../component/header'
import Border from '../../component/border'



const Screen_03: React.FunctionComponent = (props:any) => {


interface Screen_03_data {
  id: number; name: string; info: string,date:string
}
const Data: Screen_03_data[] = [
  {
      id: 1,
      name: 'LOREM',
      info: 'Lorem Ipsum...',
      date:'gg/mm/aaaa'
    },
    {
      id: 2,
      name: 'LOREM',
      info: 'Lorem Ipsum...',
      date:'gg/mm/aaaa'
    },
    {
      id:3,
      name: 'LOREM',
      info: 'Lorem Ipsum...',
      date:'gg/mm/aaaa'
    },
    {
      id: 4,
      name: 'LOREM',
      info: 'Lorem Ipsum...',
      date:'gg/mm/aaaa'
    },
    {
      id: 5,
      name: 'LOREM',
      info: 'Lorem Ipsum...',
      date:'gg/mm/aaaa'
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
    <TouchableHighlight onPress={() => props.navigation.navigate('Screen_04')} underlayColor='#ffffff' style={{ width: '100%', height: 152, backgroundColor: item.index === 0 ? 'rgba(241, 239, 208, 0.2)' : '#ffffff', flexDirection: 'row' }}>
      <>
        <View style={{ width: '50%' }}>
          <View style={{ paddingTop: 35, paddingLeft: 34 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', lineHeight: 14.06,  color: '#A6A6A6' }}>{item.item.date}</Text>
          </View>
          <View style={{ paddingTop: 15, paddingLeft: 34 }}>
            <Text style={{ fontSize: 24, lineHeight: 30, letterSpacing: 1, fontWeight: '400',  color: '#3E3E3E' }}>{item.item.name}</Text>
          </View>
          <View style={{ paddingTop: 2, paddingLeft: 34 }}>
            <Text>{item.item.info}</Text>
          </View>
        </View>
        <View style={{ width: '50%' }}>
          <View style={{ paddingTop: 29, paddingRight: 34, alignItems: 'flex-end' }}>
            <TouchableOpacity style={{ backgroundColor: '#7D7D7D', borderRadius: 5, paddingVertical: 7, paddingHorizontal: 33 }}>
              <Text style={{ fontSize: 12,fontWeight: 'bold', lineHeight: 14.06, color: '#ffffff' }}>LOREM</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    </TouchableHighlight>
    )
  }
  return (
    <View style={{ flex: 1}}>
            <Header changeColor={false}/>
            <View style={{ width: '100%', height: 50, backgroundColor: '#8B8B8B', paddingLeft: 34, justifyContent: 'center', paddingTop: 13, paddingBottom: 14 }}>
                <Text style={{ fontSize: 14, lineHeight: 24, fontWeight: '500', color: '#ffffff' }}>Lorem ipsum</Text>
            </View>
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
        </View>
  )
}

export default Screen_03;