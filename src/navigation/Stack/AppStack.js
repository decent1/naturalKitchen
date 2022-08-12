import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStack'
import HomeStack from '../Tab/HomeStack';

const Stack = createNativeStackNavigator();

class AppStack extends React.Component{
  render(){
    return (
      <Stack.Navigator
      screenOptions={{
        headerShown:false
    }}
        headerMode={'none'}
      >
          <Stack.Screen name="AuthStack" component={AuthStack} />
       <Stack.Screen name="HomeStack" component={HomeStack} />
        
      </Stack.Navigator>
  );
  }
}
export default AppStack;
