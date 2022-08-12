import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SwapMeal from '../../screens/Home/SwapMeal';
import Help from '../../screens/Home/Help';
import chooseMeal from '../../screens/Home/chooseMeal';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SwapMeal" component={SwapMeal} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="chooseMeal" component={ chooseMeal } />
    </Stack.Navigator>
  );
}

export default App;