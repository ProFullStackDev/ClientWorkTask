import * as React from 'react';

import { Screen } from './route';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Screen_03" component={Screen.Screen_03} />
        <Stack.Screen name="Screen_04" component={Screen.Screen_04} />

        <Stack.Screen name="Screen_15" component={Screen.Screen_15} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
