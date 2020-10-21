/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Screen} from './src/route';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Screen_03" component={Screen.Screen_03} />
        <Stack.Screen name="Screen_04" component={Screen.Screen_04} />
        <Stack.Screen name="Screen_11" component={Screen.Screen_11} />
        <Stack.Screen name="Screen_12" component={Screen.Screen_12} />
        <Stack.Screen name="Screen_13" component={Screen.Screen_13} />
        <Stack.Screen name="Screen_14" component={Screen.Screen_14} />
        <Stack.Screen name="Screen_15" component={Screen.Screen_15} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
