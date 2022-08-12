import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import { Colors } from '../../utils/Colors'
import StatusBar from '../../components/StatusBar'
import { commonStyles } from '../../utils/commonStyles'
import TopBar from '../../components/TopBar/TopBarBackHelp'
import { Fonts } from '../../utils/Fonts'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ButtonSmall from '../../components/Button/ButtonSmall'

export default function JuicePlan(){
    const [plan, setPlan] = useState([
        {
            id:"1",
            taxt:"10%",
            days:3,
            price:56,
            bottles:2,

        }
    ])
    return <View style={styles.container}>
        <StatusBar 
            backgroundColor={Colors.statusBarBackgroundColor_White}
            barStyle={commonStyles.statusBarStyleDark}
        />
        <TopBar 
            onBackPress={() => {}}
            onHelpPress={() => {}}  
        />
        <Text style={{
            fontSize:25,
            fontFamily:Fonts.bold,
            alignSelf:'center',
            marginTop:35,
        }}>{'JUICE CLEANSE PLANS'}</Text>

        <View style={{height:260, marginTop:57}}>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.whiteBox}>
                <View style={{
                    height:50,
                    width:50,
                    borderRadius:25,
                    backgroundColor:Colors.primary,
                    alignSelf:'center',
                    position:'absolute',
                    top:'90%',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Ionicons name="ios-checkmark" size={24} color={'white'} />
                </View>
            <Text style={styles.whiteBoxTxt1}>
                {'TOTAL PRICE INCLUDING 10% VAT'}
            </Text>
            <Text style={styles.whiteBoxTxt2}>{'Monthly'}</Text>
            <Text style={styles.whiteBoxTxt3}>{'120.75 BHD'}</Text>
            <Text
                style={{
                marginTop: 21,
                fontFamily: Fonts.semiBold,
                fontSize: 10,
                color: Colors.primary,
                textAlign: 'center',
                }}>
                {'5 Days/Week'}
            </Text>
            </View>

            <View style={styles.whiteBox}>
            <View style={{
                height:50,
                width:50,
                borderRadius:25,
                backgroundColor:Colors.primary,
                alignSelf:'center',
                position:'absolute',
                top:'90%',
                alignItems:'center',
                justifyContent:'center'
            }}>
                  <Ionicons name="ios-checkmark" size={24} color={'white'} />
            </View>
          <Text style={styles.whiteBoxTxt1}>
            {'TOTAL PRICE INCLUDING 10% VAT'}
          </Text>
          <Text style={styles.whiteBoxTxt2}>{'Monthly'}</Text>
          <Text style={styles.whiteBoxTxt3}>{'120.75 BHD'}</Text>
          <Text
            style={{
              marginTop: 21,
              fontFamily: Fonts.semiBold,
              fontSize: 10,
              color: Colors.primary,
              textAlign: 'center',
            }}>
            {'5 Days/Week'}
          </Text>
        </View>

        <View style={styles.whiteBox}>
            <View style={{
                height:50,
                width:50,
                borderRadius:25,
                backgroundColor:Colors.primary,
                alignSelf:'center',
                position:'absolute',
                top:'90%',
                alignItems:'center',
                justifyContent:'center'
            }}>
                  <Ionicons name="ios-checkmark" size={24} color={'white'} />
            </View>
          <Text style={styles.whiteBoxTxt1}>
            {'TOTAL PRICE INCLUDING 10% VAT'}
          </Text>
          <Text style={styles.whiteBoxTxt2}>{'Monthly'}</Text>
          <Text style={styles.whiteBoxTxt3}>{'120.75 BHD'}</Text>
          <Text
            style={{
              marginTop: 21,
              fontFamily: Fonts.semiBold,
              fontSize: 10,
              color: Colors.primary,
              textAlign: 'center',
            }}>
            {'5 Days/Week'}
          </Text>
        </View>
        </ScrollView>
        </View>
        <ButtonSmall
            style={{
                position:'absolute',
                right:30,
                bottom:44
            }} 
            title='NEXT'
        />
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    },
    whiteBox: {
        backgroundColor: 'white',
        ...commonStyles.shadow,
        width: 172,
        height: 213,
        // alignSelf: 'center',
        borderRadius: 10,
        marginTop:10,
        marginLeft:100
    },
    
      whiteBoxTxt1: {
        marginTop: 31,
        marginHorizontal: 15,
        fontFamily: Fonts.regular,
        fontSize: 8,
        color: Colors.black,
      },
      whiteBoxTxt2: {
        marginTop: 31,
        fontFamily: Fonts.medium,
        fontSize: 20,
        color: Colors.black,
        textAlign: 'center',
      },
      whiteBoxTxt3: {
        marginTop: 21,
        fontFamily: Fonts.medium,
        fontSize: 22,
        color: Colors.primary,
        textAlign: 'center',
      },
})