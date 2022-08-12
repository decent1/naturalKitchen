import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import {ImagePath} from '../../utils/imagePath';
import StatusBar from '../../components/StatusBar';
import {commonStyles} from '../../utils/commonStyles';
import TopBar from '../../components/TopBar/TopBarBackHelp';
import SliderMenu from '../../components/SliderMenu';
import ButtonLarge from '../../components/Button/ButtonLarge'
import AuthHeading from '../../components/AuthHeading';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import DateTimePickerModal from "react-native-modal-datetime-picker";
export default function Subscription({navigation}) {
  const [days, setDays] = useState([
    {
      id: '1',
      name: 'MON',
      isSelected: false,
    },
    {
      id: '2',
      name: 'TUE',
      isSelected: false,
    },
    {
      id: '3',
      name: 'WED',
      isSelected: false,
    },
    {
      id: '4',
      name: 'THU',
      isSelected: false,
    },
    {
      id: '5',
      name: 'FRI',
      isSelected: false,
    },
    {
      id: '6',
      name: 'SAT',
      isSelected: false,
    },
    {
      id: '7',
      name: 'SUN',
      isSelected: false,
    },
  ]);


  const [isDatePickerVisibleStart, setDatePickerVisibilityStart] = useState(false);
  const [showdate, setShowdate] = useState()

  const showDatePickerStart = () => {
    setDatePickerVisibilityStart(true);
  };

  const hideDatePickerStart = () => {
    setDatePickerVisibilityStart(false);
  };

  const handleConfirmStart = (date) => {
    console.warn("A date has been picked: ", date);
    setShowdate(date)
    hideDatePickerStart();
  };

 
  return (
    <View style={commonStyles.container}>
      <StatusBar
        backgroundColor={Colors.statusBarBackgroundColor_Primary}
        barStyle={commonStyles.light}
      />
      <ScrollView>
        <View style={{
          borderBottomLeftRadius:30,
          borderBottomRightRadius:30,
          backgroundColor:Colors.primary,
          paddingBottom:120,
        }}>
          <TopBar light onBackPress={() => {}} onHelpPress={() => {}} />

          <Text style={{
            fontSize:20,
            fontFamily:Fonts.bold,
            color:Colors.white,
            alignSelf:'center'
          }}>{'CHOOSE YOUR PLAN'}</Text>
          <View style={styles.WeekDisplay}>
            <View style={styles.month}>
              <Text style={[styles.txt,{
                color: Colors.black,
              }]}>MONTHLY</Text>
            </View>
            <View style={styles.week}>
              <Text style={[styles.txt,{
                color: Colors.white,
              }]}>WEEKLY</Text>
            </View>
          </View>
          

        </View>
        <View style={styles.whiteBox}>
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

        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginHorizontal:16,
          marginTop:20,
        }}>
          <TouchableOpacity 
          onPress={showDatePickerStart}
          
          style={{
            height:40,
            // width:120,
            borderRadius:5,
            borderWidth:1,
            borderColor:'#E6E6E6',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            paddingHorizontal:10,
          }}>
            <FontAwesome5 
              name="calendar-alt"
              size={20}
              color={Colors.primary}
            />
            <Text style={{
              fontSize:12,
              fontFamily:Fonts.semiBold,
              color:Colors.black,
              marginLeft:10,
            }}>
              {showdate === '' ? 'Start date' : showdate}
            </Text>

          </TouchableOpacity>
          <DateTimePickerModal
        isVisible={isDatePickerVisibleStart}
        mode="date"
        onConfirm={handleConfirmStart}
        onCancel={hideDatePickerStart}
      />

          <TouchableOpacity 
          onPress={() => {}}
          style={{
            height:40,
            // width:120,
            borderRadius:5,
            borderWidth:1,
            borderColor:'#E6E6E6',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            paddingHorizontal:10,
          }}>
            <FontAwesome5 
              name="calendar-alt"
              size={20}
              color={Colors.primary}
            />
            <Text style={{
              fontSize:12,
              fontFamily:Fonts.semiBold,
              color:Colors.black,
              marginLeft:10,
            }}>
              {'End Date'}
            </Text>

          </TouchableOpacity>
        </View>

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
               key={index} style={[styles.Days,{borderColor: item.isSelected ? Colors.primary : 'rgb(235,235,235)'}]}>
                <Text style={styles.daysTxt}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <SliderMenu/>
        
        {/* <View style={styles.Header}>
          
          
         
          <ImageBackground
            style={styles.imageBackground}
            source={ImagePath.curve2}></ImageBackground>
        </View>

        
       
        
         */}
         <ButtonLarge 
        onPress={() => navigation.navigate('AccountInfo')}
        title={'NEXT'} style={styles.LargeBtn} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    width: '100%',
    // backgroundColor: '#C89DEE',
    backgroundColor:Colors.primary
  },
  title: {
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: Colors.white,
    marginBottom:0,
  },
  WeekDisplay: {
    flexDirection: 'row',
    // width: '100%',
    borderRadius: 20,
    marginTop:10,
    alignSelf: 'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'white',
    // justifyContent: 'center',
  },
  month: {
    backgroundColor: Colors.white,
    borderRadius:20,
    borderColor: Colors.white,
  },
  week: {
    backgroundColor: Colors.primary,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: Colors.white,
  },
  txt: {
    marginTop: 8,
    marginBottom: 6,
    fontFamily: Fonts.semiBold,
    marginHorizontal: 16,
    fontSize:10,
  },
  imageBackground: {
    width: '100.5%',
    aspectRatio: 1,
  },
  whiteBox: {
    backgroundColor: 'white',
    ...commonStyles.shadow,
    width: 172,
    height: 213,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom:5,
    marginTop:-90
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
  DaysBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop:20,
  },
  Days: {
    width: 45,
    height: 48,
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginBottom:16,
    backgroundColor:'white',
    // borderColor: Colors.primary,
    ...commonStyles.shadow,
  },
  daysTxt: {
    fontFamily: Fonts.medium,
    color: Colors.black,
    
  },
  LargeBtn: {
    marginBottom: 33,
    justifyContent: 'center',
    marginTop: 20,
  },
});
