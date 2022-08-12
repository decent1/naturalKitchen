import AntDesign from 'react-native-vector-icons/AntDesign';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardStack from '../Stack/DashboardStack'
import SwapStack from '../Stack/SwapStack'
import PauseStack from '../Stack/PauseStack'
import AccountStack from '../Stack/AccountStack'

import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import Entypo from 'react-native-vector-icons/Entypo';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();


export default function HomeStack() {
  return (
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
        tabBarOptions={{ showLabel:false, style:styles.tabBarContainer }}
      >
        <Tab.Screen 
        

        name="DashboardStack" component={DashboardStack}
            options={{
                tabBarIcon : ({focused}) => {
                return <View style={styles.menuView}>
                    <AntDesign 
                        name={'home'}
                        size={24}
                        color={focused ? Colors.primary : '#707070'}
                    />
                    <Text style={[styles.menuName,{ color: focused ?  Colors.primary : '#707070', }]}>
                    Home
                    </Text>
                </View>
                }
            }}
        />
        <Tab.Screen name="DashboardStack1" component={SwapStack} 
        
        options={{
            tabBarIcon : ({focused}) => {
            return <View style={styles.menuView}>
                <Entypo 
                    name={'swap'}
                    size={24}
                    color={focused ? Colors.primary : '#707070'}
                />
                <Text style={[styles.menuName,{ color: focused ?  Colors.primary : '#707070', }]}>
                Swap
                </Text>
            </View>
            }
        }}
        />
        <Tab.Screen name="DashboardStack2" component={PauseStack} 
            
            options={{
                tabBarIcon : ({focused}) => {
                return <View style={styles.menuView}>
                    <FontAwesome 
                        name={'pause-circle'}
                        size={24}
                        color={focused ? Colors.primary : '#707070'}
                    />
                    <Text style={[styles.menuName,{ color: focused ?  Colors.primary : '#707070', }]}>
                    Pause
                    </Text>
                </View>
                }
            }}
        />
        <Tab.Screen name="DashboardStack3" component={AccountStack} 
        options={{
            tabBarIcon : ({focused}) => {
            return <View style={styles.menuView}>
                <MaterialCommunityIcons 
                    name={'account-outline'}
                    size={24}
                    color={focused ? Colors.primary : '#707070'}
                />
                <Text style={[styles.menuName,{ color: focused ?  Colors.primary : '#707070', }]}>
                Account
                </Text>
            </View>
            }
        }}
        />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    menuView:{
        alignItems:'center',
        justifyContent:'center',
        top:Platform.OS == 'ios' ? 15 : 3,
      },
      menuName:{
        fontSize:12, 
        fontFamily:Fonts.semiBold,
        marginTop:3
      },
      tabBarContainer:{
        position:'absolute',
        bottom:30,
        left:20,
        right:20,
        elevation:0,
        backgroundColor:'#ffffff',
        borderRadius:15,
        height:70,
        shadowColor:Colors.themeGreen,
         shadowOffset:{
           width:0,
           height:10
         },
         shadowOpacity:0.25,
         shadowRadius:3.5,
         elevation:5
      },
})