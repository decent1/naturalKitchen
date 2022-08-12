import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BloodType from '../../screens/Auth/BloodType';
import OnBoarding from '../../screens/Auth/Onboarding';
import Login from '../../screens/Auth/Login';
import SignUp from '../../screens/Auth/SignUp';
import Activity from '../../screens/Auth/Activity';
import Weight from '../../screens/Auth/Weight';
import Gender from '../../screens/Auth/Gender';
import Goal from '../../screens/Auth/Goal';
import BodyType from '../../screens/Auth/BodyType';
import Prefrences from '../../screens/Auth/Prefrences';
import Result from '../../screens/Auth/Result';
import Plan from '../../screens/Auth/Plan';
import EditProfile from '../../screens/Home/EditProfile';
import AccountInfo from '../../screens/Auth/AccountInfo';
import Help from '../../screens/Home/Help';
import Subscription from '../../screens/Auth/Subscription';
import OrderSummery from '../../screens/Auth/OrderSummery';
import PauseMeal from '../../screens/Home/PauseMeal';
import Juices from '../../screens/Home/Juices';
import JuicePlan from '../../screens/Home/JuicePlan';
import chooseMeal from '../../screens/Home/chooseMeal';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Subscription'
      >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Goal" component={Goal} />
      <Stack.Screen name="Weight" component={Weight} />
    
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="BodyType" component={BodyType} />
      <Stack.Screen name="Activity" component={Activity} />
      <Stack.Screen name="BloodType" component={BloodType} />
      <Stack.Screen name="Prefrences" component={Prefrences} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Plan" component={Plan} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="AccountInfo" component={AccountInfo} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="OrderSummery" component={OrderSummery} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="PauseMeal" component={PauseMeal} />
      <Stack.Screen name="Juices" component={Juices} />
      <Stack.Screen name="JuicePlan" component={JuicePlan} />
      <Stack.Screen name='chooseMeal' component={ chooseMeal } />
        
       
    </Stack.Navigator>
  );
}

export default AuthStack;
