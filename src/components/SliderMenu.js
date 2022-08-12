import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React ,{useState} from 'react';
import {ImagePath} from '../utils/imagePath'
import { Colors } from '../utils/Colors';
import { Fonts } from '../utils/Fonts';
import {commonStyles} from '../utils/commonStyles' 
import Ionicons from 'react-native-vector-icons/Ionicons'


const SliderMenu = () => {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: 'BREAKFAST',
      image: ImagePath.breakfast,
    },
    {
      id: 2,
      name: 'LUNCH',
      image: ImagePath.lunch,
    },
    {
      id: 3,
      name: 'DINNER',
      image: ImagePath.dinner,
    },
    {
      id: 4,
      name: 'SNACK',
      image: ImagePath.snack,
    },
  ]);

  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.sliding}>
      <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
        {menu.map((menu,index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setSelected(index);
              }}
              style={{marginLeft: 16, marginBottom: '10%', backgroundColor:'white'}}
              key={index}>
              <View
                style={[
                  styles.card,
                  {
                    borderColor:
                      selected === index ? Colors.primary : 'rgb(235,235,235)',
                  },
                ]}>
                <Image source={menu.image} style={styles.image} />
                <Text style={styles.title}>{menu.name}</Text>
              </View>
              <View
                style={[
                  styles.indicator,
                  {
                    backgroundColor:
                      selected === index ? Colors.primary : Colors.white,
                  },
                ]}>
                <Ionicons name="ios-checkmark" size={20} color={'white'} />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SliderMenu;

const styles = StyleSheet.create({
  sliding: {
    backgroundColor: Colors.appBackgroundColor,
    marginTop: 20,
    // marginHorizontal: 12,
  },
  title: {
    fontFamily: Fonts.semiBold,
    color: Colors.black,
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 29,
  },
  image: {
    width: 38,
    height: 38,
    marginHorizontal: 35,
    marginTop: 15,
  },

  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    width: 160,
    height: 100,
    ...commonStyles.shadow,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: 0.34,
    // shadowRadius: 6.27,

    // elevation: 7,
  },
  indicator: {
    width: 44,
        height: 44,
        borderWidth: 1,
        borderRadius: 22,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor:Colors.white,
        top:75,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'rgb(235,235,235)'
  },
});
