import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../screens/Home/Profile';
import EditProfile from '../../screens/Home/EditProfile';
import Prefrences from '../../screens/Home/Prefrences';
import Goal from '../../screens/Home/Goal';
import SubscriptionHistory from '../../screens/Home/SubscriptionHistory';
import Help from '../../screens/Home/Help';
const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Prefrences" component={Prefrences} />
        <Stack.Screen name="Goal" component={Goal} />
        <Stack.Screen name="SubscriptionHistory" component={SubscriptionHistory} />
        <Stack.Screen name="Help" component={Help} />
      </Stack.Navigator>
  );
}

export default App;