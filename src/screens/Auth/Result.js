import React,{useEffect, useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native'
import { Colors } from '../../utils/Colors'
import StatusBar from '../../components/StatusBar'
import { commonStyles } from '../../utils/commonStyles'
import TopBar from '../../components/TopBar/TopBarBackHelp'
import { Fonts } from '../../utils/Fonts'
import AuthHeading from '../../components/AuthHeading'
import ButtonLarge from '../../components/Button/ButtonLarge'
import PieChart from 'react-native-pie-chart';
export default function Result({navigation}){
  const [data, setData] = useState([
      {
        id:"1",
        name:"CARBS",
        value:"275 gm",
        color:"#12A407",
      },
      {
        id:"2",
        name:"PROTEIN",
        value:"321 gm",
        color:"#E6BC11",
      },
      {
        id:"1",
        name:"FATS",
        value:"82 gm",
        color:"#F10B0B",
      }
  ])
  const widthAndHeight = 130
  const series = [275, 321, 200]
  const sliceColor = ['red','yellow','green']
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarBackgroundColor_Primary}
          barStyle={commonStyles.statusBarStyleLight}
        />
        <ScrollView>
          <View
            style={{
              height: '40%',
              width: '100%',
              backgroundColor: Colors.primary,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,

            }}>
            <TopBar light onBackPress={() => {}} onHelpPress={() => {}} />

            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              doughnut={true}
              coverRadius={0.8}
              coverFill={Colors.primary}
              style={{alignSelf: 'center'}}></PieChart>

            <View style={styles.pieTxt}>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: Fonts.bold,
                  textAlign: 'center',
                  fontSize: 24,
                  marginRight: 2,
                }}>
                {'1500'}
              </Text>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: Fonts.medium,
                  textAlign: 'center',
                  fontSize: 10,
                }}>
                {'Kcal/Day'}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              ...commonStyles.shadow,
              flexDirection: 'row',
              paddingTop: 10,
              paddingBottom: 16,
              paddingHorizontal: 25,
              marginHorizontal: 25,
              borderRadius: 10,
              marginTop: -30,
            }}>
            {data.map((item, index) => (
              <View
                key={index}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Fonts.regular,
                    color: 'black',
                  }}>
                  {item.name}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    width: 40,
                    height: 4,
                    borderRadius: 10,
                    marginTop: 10,
                  }}>
                  <View style={{flex: 1, backgroundColor: Colors.primary}} />
                  <View style={{flex: 1, backgroundColor: 'lightgray'}} />
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

          <AuthHeading
            title={'Recommended plan:'}
            style={{
              marginTop: 38,
              fontFamily: Fonts.semiBold,
              fontSize: 18,
              marginBottom: 16,
            }}
          />

          <ImageBackground
            resizeMode="contain"
            style={{
              height: 170,
              borderRadius: 20,
            }}
            source={require('../../images/plan.png')}>
            <Text
              style={{
                fontSize: 24,
                color: 'white',
                fontFamily: Fonts.semiBold,
                alignSelf: 'center',
                position: 'absolute',
                bottom: 10,
              }}>
              {'VEGAN'}
            </Text>
          </ImageBackground>

          <ButtonLarge
            onPress={() => {
              navigation.navigate('Plan');
            }}
            style={{
              alignSelf: 'center',
              width: '84%',
              marginVertical: 35,
              marginBottom:'30%' ,  
            }}
            title={'NEXT'}
          />
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.appBackgroundColor,
    
  },
  pieTxt: {
    position: 'absolute',
    alignSelf: 'center',
    top: '30%'
  },
});