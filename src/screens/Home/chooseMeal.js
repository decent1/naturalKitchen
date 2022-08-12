import { Image, ScrollView, StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React , {useState} from 'react'
import {Colors} from '../../utils/Colors'
import StatusBar from '../../components/StatusBar'
import TopBar from '../../components/TopBar/TopBarBackHelp';
import { commonStyles } from '../../utils/commonStyles';
import AuthHeading from '../../components/AuthHeading';
import { Fonts } from '../../utils/Fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ButtonSmall from '../../components/Button/ButtonSmall';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ImagePath } from '../../utils/imagePath';

const chooseMeal = () => {
    const [chooseMeal, setChooseMeal] = useState([
      {
        id: 1,
        image: ImagePath.mint,
        cardTitle: 'Coconut Yoghurt with Turmeric Chia Pudding & Mixed Berries',
        alert_txt: ' Contains Milk',
        kcal: 304,
        fat: 11,
        Carbs: 37,
        Protein: 15,
      },
      {
        id: 2,
        image: ImagePath.mixVegi,
        cardTitle: 'Mixed Vegetable Omelette with Rocca Leaves ',
        alert_txt: ' Contains Milk',
        kcal: 304,
        fat: 11,
        Carbs: 37,
        Protein: 15,
      },
      {
        id: 3,
        image: ImagePath.bircher,
        cardTitle: 'Bircher Muesli with Apple & Banana ',
        alert_txt: ' Contains Milk',
        kcal: 304,
        fat: 11,
        Carbs: 37,
        Protein: 15,
      },
      {
        id: 4,
        image: ImagePath.coconut,
        cardTitle: 'Coconut Yoghurt with Strawberry Coulis',
        alert_txt: ' Contains Milk',
        kcal: 304,
        fat: 11,
        Carbs: 37,
        Protein: 15,
      },
    ]);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.statusBarBackgroundColor_White}
        barStyle={commonStyles.statusBarStyleDark}
      />
      <TopBar onBackPress={() => {}} onHelpPress={() => {}} />
      <ScrollView>
        <AuthHeading title={'Choose a meal to swap'} style={styles.txt} />

        {chooseMeal.map((item, index) => {
          return (
            <View style={styles.card} key={index}>
              <Image source={item.image} style={styles.card_img} />
              <View style={styles.card_txt}>
                <Text style={styles.card_heading}>{item.cardTitle}</Text>
                <Text style={styles.small_txt}>
                  Kcal – {item.kcal}, Fat – {item.fat}, Carbs – {item.Carbs},
                  Protein – {item.Protein}
                </Text>
                <Text style={styles.alert_txt}>
                  <MaterialCommunityIcons
                    name="alert-outline"
                    size={24}
                    color={'red'}
                  />
                  {item.alert_txt}
                </Text>
              </View>
              <ButtonSmall
                title={'choose'}
                style={{
                  borderRadius: 20,
                  position: 'absolute',
                  bottom: 14,
                  right: 12,
                  width: 100,
                }}
              />
            </View>
          );
        })}

        <View
          style={{
            backgroundColor: Colors.white,
            ...commonStyles.shadow,
            marginHorizontal: 13,
            marginBottom: 20,
            flexDirection: 'row',
            height: 64,
          }}>
          <Text
            style={{
              marginLeft: 19,
              marginVertical: 19,
              fontFamily: Fonts.bold,
              fontSize: 20,
              color: Colors.primary,
            }}>
            LOW CARB PLAN
          </Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={30}
            color={'#000000'}
            style={{
              position: 'absolute',
              right: 21,
              top: 20,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: Colors.white,
            ...commonStyles.shadow,
            marginHorizontal: 13,
            marginBottom: 20,
            flexDirection: 'row',
            height: 64,
          }}>
          <Text
            style={{
              marginLeft: 19,
              marginVertical: 19,
              fontFamily: Fonts.bold,
              fontSize: 20,
              color: Colors.primary,
            }}>
            REGULAR PLAN
          </Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={30}
            color={'#000000'}
            style={{
              position: 'absolute',
              right: 21,
              top: 20,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default chooseMeal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  card: {
    backgroundColor: Colors.white,
    ...commonStyles.shadow,
    marginHorizontal: 14,
    flexDirection: 'row',
    height:146,
    marginBottom:35
  },
  card_img: {
    resizeMode: 'contain',
    width: 96,
    height: 110,
    marginTop: 14,
    marginLeft: 10,
  },
  card_txt: {
    marginTop: 17,
    flex: 1,
    marginLeft:13
  },
  card_heading: {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: Colors.black,
  },
  small_txt: {
    fontFamily: Fonts.semiBold,
    fontSize: 9,
    color: '#707070',
    marginTop: 5,
  },
  alert_txt: {
    fontFamily: Fonts.medium,
    fontSize: 10,
    
  },
});