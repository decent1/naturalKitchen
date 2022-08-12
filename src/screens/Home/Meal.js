import { StyleSheet, Text, View ,TouchableOpacity, ScrollView , Image , ImageBackground, FlatList} from 'react-native';
import React, {useState} from 'react';
import { Colors } from '../../utils/Colors';
import TopBar from '../../components/TopBar/TopBarBackHelp';
import StatusBar from '../../components/StatusBar'
import AuthHeading from '../../components/AuthHeading';
import { commonStyles } from '../../utils/commonStyles'
import { Fonts } from '../../utils/Fonts';
import ButtonSmall from '../../components/Button/ButtonSmall';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ImagePath } from '../../utils/imagePath';

const Meal = ({navigation}) => {
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
        {
          id: '4',
          name: 'THU',
          date:'27',
          isSelected: false,
        },
        {
          id: '5',
          name: 'FRI',
          date:'28',
          isSelected: false,
        },
       
      ]);

      const [data, setData] = useState([
        {
          id:"1",
          name:"Protein",
          value:"07",
          color:"#E6BC11",
          image:ImagePath.meal
         
        },
        {
          id:"2",
          name:"Fats",
          value:"09",
          color:"#F10B0B",
          image:ImagePath.meal
         
        },
        {
          id:"3",
          name:"Carbs",
          value:"33",
          color:"#12A407",
          image:ImagePath.meal
        }
    ])
    const [mealData, setMealData] = useState([
      {
        id:"1",
        name:"Breakfast",
      },
      {
        id:"2",
        name:"Lunch",
      },
      {
        id:"3",
        name:"Dinner",
      },
      {
        id:"4",
        name:"Snack",
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
                {'MEALS'}
            </Text>
            <Text style={styles.description}>{'For next 5 days.'}</Text>
        <View style={styles.DaysBox}>
          {days.map((item, index) => {
            return (
              <TouchableOpacity
               key={index}
                onPress={() => {
                  setDays(
                    days.map(i =>
                      i.id == item.id ? {...i, isSelected: !i.isSelected} : i,
                    ),
                  );
                }}
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

        <View style={{backgroundColor: 'whitesmoke', marginTop:20, height:'100%'}}>
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
                    backgroundColor:item.id == selectedMealData ? Colors.primary : 'whitesmoke',
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
          <ScrollView horizontal={true}>
          {
              data.map((item,index)=>{
                  return(
                    <View key={index}>
                    <ImageBackground
                      resizeMode="contain"
                      style={styles.imageBackground}
                      source={item.image}>
                      <View
                        style={[
                          styles.indicator,
                        ]}>
                        <Ionicons name="ios-checkmark" size={20} color={'white'} />
                      </View>
                    </ImageBackground>
                    <View style={styles.card}>
                      {data.map((item ,index) => (
                        <View
                        key={index}
                          style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <View style={styles.protein}>
                            <View
                              style={{
                                height: 10,
                                width: 10,
                                borderRadius: 5,
                                backgroundColor: item.color,
                              }}
                            />
                            <Text style={styles.name}>{item.name}</Text>
                          </View>
                          <Text
                            style={{
                              color: item.color,
                              fontSize: 15,
                              fontFamily: Fonts.semiBold,
                              marginTop: 10,
                            }}>
                            {item.value}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                  )
              })
          }
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Meal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
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
    ...commonStyles.shadow,
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
  marginLeft:22,
  marginTop:6,
  marginBottom:20,
},
});