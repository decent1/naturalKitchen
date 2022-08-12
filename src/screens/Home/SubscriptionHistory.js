import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
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
import ButtonSmall from '../../components/Button/ButtonSmall';

export default function SubscriptionHistory({navigation}) {
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
  console.log(days)
 
  return (
    <View style={commonStyles.container}>
      <StatusBar
        backgroundColor={Colors.statusBarBackgroundColor_Primary}
        barStyle={commonStyles.statusBarStyleLight}
      />
      <ScrollView>
        <View style={styles.Header}>
          <TopBar light onBackPress={() => {}} onHelpPress={() => {}} />
          <AuthHeading title={'YOUR PLAN'} style={styles.title} />
          {/* <View style={styles.WeekDisplay}>
            <View style={styles.month}>
              <Text style={[styles.txt]}>MONTHLY</Text>
            </View>
            <View style={styles.week}>
              <Text style={[styles.txt]}>WEEKLY</Text>
            </View>
          </View> */}
          <ImageBackground
            style={styles.imageBackground}
            source={ImagePath.curve2}></ImageBackground>
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
         marginTop:-100
       }}>
       <View style={styles.showActive}>
          <View style={styles.Status}>
            <Text style={{color:Colors.black, fontFamily:Fonts.medium,textAlign:'center'}}> Status </Text>
            <TextInput
              style={[styles.input,{
                color:'red'
              }]}
              value={'Active'}
              keyboardType="default"
              editable={false} 
            />
          </View>

          <View style={styles.DateEnd}>
            <Text style={{color:Colors.black, fontFamily:Fonts.medium,textAlign:'center'}}> Date End </Text>
            <TextInput
              style={[styles.input,{
                color:'green'
              }]}
              value={'24th Feb'}
              keyboardType="default"
              editable={false} 
              // selectTextOnFocus={false}
            />
          </View>
        </View>
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
        <View style={{
          marginLeft:-20
        }}>
        <SliderMenu />
        </View>

        <ButtonLarge onPress={() => {}} title={'DONE'} style={styles.LargeBtn} />
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
  },
  WeekDisplay: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 20,
    marginTop: 17,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  month: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  week: {
    backgroundColor: Colors.primary,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  txt: {
    color: Colors.black,
    marginTop: 8,
    marginBottom: 6,
    fontFamily: Fonts.semiBold,
    marginHorizontal: 16,
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
    position: 'absolute',
    top: '15%',
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
    marginHorizontal: 10,
  },
  Days: {
    width: 45,
    height: 48,
    borderWidth: 2,
    borderRadius: 6,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    
  },
  daysTxt: {
    fontFamily: Fonts.medium,
    color: Colors.black,
  },
  LargeBtn: {
    marginBottom: 33,
    justifyContent: 'center',
    // marginTop: 109,
  },
  showActive: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  Status: {
    marginLeft: 15,
  },
  DateEnd: {
    marginRight: 15,
  },
  input: {
    height: 40,
    borderWidth: 2,
    padding: 10,
    marginBottom: 30,
    marginTop: 6,
    borderRadius: 6,
    borderColor: 'rgb(235,235,235)',
  },
});
