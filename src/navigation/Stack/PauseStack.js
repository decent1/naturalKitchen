import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PauseMeal from '../../screens/Home/PauseMeal';
import Help from '../../screens/Home/Help';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="PauseMeal" component={PauseMeal} />
 <Stack.Screen name="Help" component={Help} />
      </Stack.Navigator>
  );
}

export default App;