import {StyleSheet, Text, View, Image , TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../utils/Colors';
import StatusBar from '../../components/StatusBar';
import TopBar from '../../components/TopBar/TopBarBackHelp';
import {commonStyles} from '../../utils/commonStyles';
import {Fonts} from '../../utils/Fonts';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntIcon from 'react-native-vector-icons/AntDesign'
export default function Profile({navigation}) {
  const [profileInfo, setProfileInfo] = useState([
    {
      id: 1,
      title: 'Goal',
      name: 'Vegan',
    },
    {
      id: 2,
      title: 'Status',
      name: 'Active',
    },
    {
      id: 3,
      title: 'Start',
      name: '24th jan',
    },
    {
      id: 4,
      title: 'End',
      name: '28th jan',
    },
  ]);

  const [data, setData] = useState([
    {
      id: '1',
      name: 'CARBS',
      value: '275 gm',
      color: '#12A407',
    },
    {
      id: '2',
      name: 'PROTEIN',
      value: '321 gm',
      color: '#E6BC11',
    },
    {
      id: '3',
      name: 'FATS',
      value: '82 gm',
      color: '#F10B0B',
    },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.statusBarBackgroundColor_Primary}
        barStyle={commonStyles.statusBarStyleLight}
      />
      <ScrollView>
        <View
          style={{
            width: '100%',
            backgroundColor: Colors.primary,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <TopBar light onBackPress={() => {}} onHelpPress={() => {}} />

          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
              }}
            />
            <Text style={styles.username}>John ABC</Text>
            <Text style={styles.txt}>1200 Kcal/day</Text>
          </View>
          <View
            style={{
              borderBottomColor: '#BA85EB',
              borderBottomWidth: 1,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 40,
            }}>
            {profileInfo.map((item, index) => {
              return (
                <View key={index}>
                  <Text
                    style={{
                      color: Colors.white,
                      fontFamily: Fonts.medium,
                      fontSize: 8,
                      marginTop: 18,
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: Colors.white,
                      fontSize: 15,
                      fontFamily: Fonts.semiBold,
                      marginTop: 7,
                    }}>
                    {item.name}
                  </Text>
                </View>
              );
            })}
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

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
          style={[styles.itemContainer, {marginTop: 40}]}>
          <Ionicons name="person" size={20} color={Colors.primary} />
          <Text style={[styles.itemName]}>{'Update profile'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Prefrences');
          }}
          style={[styles.itemContainer]}>
          <Ionicons name="fast-food-sharp" size={20} color={Colors.primary} />
          <Text style={[styles.itemName]}>{'Food Prefrence'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Goal');
          }}
          style={[styles.itemContainer]}>
          <AntIcon name="barschart" size={20} color={Colors.primary} />
          <Text style={[styles.itemName]}>{'Change Goal'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Help');
          }}
          style={[styles.itemContainer]}>
          <Ionicons
            name="help-circle-outline"
            size={20}
            color={Colors.primary}
          />
          <Text style={[styles.itemName]}>{'Help'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('SubscriptionHistory');
          }}
          style={[styles.itemContainer]}>
          <Icon name="youtube-subscription" size={20} color={Colors.primary} />
          <Text style={[styles.itemName]}>{'Subscription History'}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => {
          navigation.navigate('AuthStack')
        }}
        style={[styles.itemContainer]}>
        <Ionicons name="log-out-outline" size={20} color={Colors.primary} />
          <Text style={[styles.itemName]}>{'Logout'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  itemContainer:{
    height:57,
    marginHorizontal:11,
    borderRadius:6,
    borderWidth:1,
    marginBottom:20,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:13,
    backgroundColor:'white',
    marginBottom:8,
    ...commonStyles.shadow,
    borderColor:Colors.primary
},

  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: Colors.white,
    marginBottom: 10,
  },
  username: {
    color: Colors.white,
    fontSize: 22,
    alignSelf: 'center',
    fontFamily: Fonts.semiBold,
    fontSize: 20,
  },
  txt: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.white,
  },
  itemName:{
    fontSize:12,
    fontFamily:Fonts.semiBold,
    marginLeft:20
},
});
