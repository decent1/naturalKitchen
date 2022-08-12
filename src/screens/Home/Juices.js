import { StyleSheet, Text, View ,TouchableOpacity, ScrollView , Image , ImageBackground, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Colors } from '../../utils/Colors';
import TopBar from '../../components/TopBar/TopBarBackHelp';
import StatusBar from '../../components/StatusBar'
import AuthHeading from '../../components/AuthHeading';
import { commonStyles } from '../../utils/commonStyles'
import { Fonts } from '../../utils/Fonts';
import ButtonSmall from '../../components/Button/ButtonSmall';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ImagePath } from '../../utils/imagePath';

const Juices = ({navigation}) => {
    const [days, setDays] = useState([
        {
          id: '1',
          name: 'MON',
          date:'24',
          isSelected: false,
        },
        {
          id: '2',
          name: 'TUE',
          date:'25',
          isSelected: false,
        },
        {
          id: '3',
          name: 'WED',
          date:'26',
          isSelected: false,
        },
      ]);

    
    const [mealData, setMealData] = useState([
      {
        id:"1",
        name:"Day 1",
      },
      {
        id:"2",
        name:"Day 2",
      },
      {
        id:"3",
        name:"Day 3",
      }
    ])

    const [juices, setJuices] = useState([
        {
            id:"1",
            name:"Mint lemonade",
            image:"juice1"
        },
        {
            id:"2",
            name:"24 Carrot",
            image:"juice2"
        },
        {
            id:"3",
            name:"Sweet Green",
            image:"juice3"
        },
        {
            id:"4",
            name:"Blueberry Bliss",
            image:"juice4"
        },
        {
            id:"5",
            name:"Sunrise",
            image:"juice5"
        },
        {
            id:"6",
            name:"Pineapple Punch",
            image:"juice6"
        }
    ])
    const [selectedMealData, setSelectedMealData] = useState("1")
    return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.statusBarBackgroundColor_White}
        barStyle={commonStyles.statusBarStyleDark}
      />
      <TopBar onBackPress={() => {}} onHelpPress={() => {}} />
      <ScrollView>
      <Text style={styles.title}>
                {'MENU'}
            </Text>
            <Text style={styles.description}>{'For next 3 days.'}</Text>
        <View style={styles.DaysBox}>
          {days.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setDays(
                    days.map(i =>
                      i.id == item.id ? {...i, isSelected: !i.isSelected} : i,
                    ),
                  );
                }}
                key={index}
                style={[
                  styles.Days,
                  {
                    borderColor: item.isSelected
                      ? Colors.primary
                      : 'rgb(235,235,235)',
                  },
                ]}>
                <Text style={styles.daysTxt}>{item.name}</Text>
                <Text
                  style={[
                    styles.daysTxt,
                    {color: item.isSelected ? Colors.primary : '#707070'},
                  ]}>
                  {item.date}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View>
          <View style={styles.btn}>
            <FlatList 
              horizontal
              data={mealData}
              renderItem={({item}) => {
                return <TouchableOpacity
                onPress={() => {
                  setSelectedMealData(item.id)
                }}
                  style={{
                    height:34,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:5,
                    marginRight:10,
                    backgroundColor:item.id == selectedMealData ? Colors.primary : 'white',
                  }}
                >
                  <Text style={{
                    fontFamily:Fonts.semiBold,
                    fontSize:12,
                    marginHorizontal:11,
                    color:item.id == selectedMealData ? 'white' : Colors.black,
                  }}>{item.name}</Text>
                  </TouchableOpacity>
              }}
            
            />
          </View>
              <View style={{
                  flexDirection:'row',
                  flexWrap:'wrap',
                  paddingBottom:70
              }}>
                  {
                      juices.map((item) => {
                          return <View style={{
                              width:'50%',
                              height:220,
                              alignItems:'center',
                          }}>
                              <View style={{
                                  width:'80%',
                                  height:180,
                              }}>
                                  <View
                        style={{
                            height:28,
                            width:28,
                            borderRadius:14,
                            backgroundColor:Colors.primary,
                            alignItems:'center',
                            justifyContent:'center',
                            position:'absolute',
                            top:15,
                            right:15,
                            zIndex:1
                        }}>
                        <Ionicons name="ios-checkmark" size={20} color={'white'} />
                      </View>
                                  <Image 
                                    style={{
                                        height:'100%',
                                        width:'100%'
                                    }}
                                    source={ImagePath[item.image]}
                                  />
                                  </View>
                                  <View style={{
                                      height:40, 
                                      backgroundColor:'white', 
                                      width:'75%',
                                      marginTop:-20,
                                      ...commonStyles.shadow,
                                      alignItems:'center',
                                      justifyContent:'center'
                                }}>
                                    <Text
                                        style={{
                                            fontFamily:Fonts.bold,
                                            fontSize:13,
                                            color:Colors.black
                                        }}
                                    >{item.name}</Text>
                                      </View>
                                      
                              </View>
                      })
                  }
              </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Juices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  title:{
    fontFamily:Fonts.bold,
    color:Colors.black,
    fontSize:24,
    marginLeft:20,
    marginTop:2,
},
description:{
    fontSize:10,
    fontFamily:Fonts.regular,
    color:'#707070',
    marginLeft:20,
    marginTop:6,
    marginBottom:20,
},
  DaysBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginLeft:20,
    // ...commonStyles.shadow,
  },
  Days: {
    width: 45,
    height: 60,
    borderWidth: 1,
    backgroundColor:'white',
    borderRadius: 6,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // marginLeft: 4,
    marginRight:13,
    marginBottom:10,
  },
  daysTxt: {
    fontFamily: Fonts.medium,
    color: '#707070',
    padding: 2,
  },
  imageBackground: {
    borderRadius: 20,
    width: 311,
    height: 219,
    marginLeft: 10,
  },
 
  btn: {
    flexDirection: 'row',
    marginTop:20,
    marginBottom:26,
    marginLeft:20
  },
  card:{
    backgroundColor: 'white',
    ...commonStyles.shadow,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 16,
    paddingHorizontal: 25,
    marginHorizontal: 25,
    marginTop: -15,
    marginBottom: 20,
    marginLeft:20
  },
  name:{
    color: '#707070',
    fontSize: 10,
    fontFamily: Fonts.semiBold,
    marginLeft: 2,
  },
  protein:{
    flexDirection: 'row',
    width: 80,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  indicator:{
    width: 44,
    height: 44,
    borderWidth: 1,
    borderRadius: 22,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    right:20,
    top:13,
    alignItems:'center',
    justifyContent:'center',
    borderColor:Colors.primary
}
});