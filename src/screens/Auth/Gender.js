import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {ImagePath} from '../../utils/imagePath';
import {Colors} from '../../utils/Colors';
import ButtonSmall from '../../components/Button/ButtonSmall';
import {Fonts} from '../../utils/Fonts';
import StatusBar from '../../components/StatusBar'
import TopBar from '../../components/TopBar/TopBarBackHelp';
import {commonStyles} from '../../utils/commonStyles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SelectionItem from '../../components/SelectionItem';
import AuthHeading from '../../components/AuthHeading';
const value = [
  {
    id: 1,
    title: 'Male',
    image: ImagePath.GM,
    isSelected: false,
  },
  {
    id: 2,
    title: 'Female',
    image: ImagePath.GF,
    isSelected: false,
  },
];

const Gender = props => {
  const [gender, setGender] = useState('');


  return (
    <View style={styles.container}>
       <StatusBar
          backgroundColor={Colors.statusBarBackgroundColor_White}
          barStyle={commonStyles.statusBarStyleDark}
        />
      <TopBar onBackPress={() => {}} onHelpPress={() => {}} />

        <AuthHeading 
          title={'SELECT YOR GENDER?'}
        />

        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            marginHorizontal: 32,
          }}>
          {value.map((item, index) => {
            return (
              <SelectionItem 
              key={index}
                onPress={() => setGender(item.title)}
                index={index}
                image={item.image}
                title={item.title}
                isSelected={item.title === gender}
                imageStyle={{
                  height:70,
                  width:70
                }}
              />
            );
          })}
        </View>
      
      <ButtonSmall
        style={commonStyles.bottomButton}
        title={'NEXT'}
        onPress={()=>props.navigation.navigate('BodyType')}
      />
    </View>
    
  );
};

export default Gender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    marginLeft: 21,
    marginTop: 30,
    color:Colors.black
  },
  txt: {
    marginTop: 18,
    fontFamily: Fonts.semiBold,
    fontSize: 12,
    color: Colors.black,
  },
  indicator: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderRadius: 22,
    position: 'absolute',
    // borderColor:'rgb(235,235,235)',
    alignSelf: 'center',
    backgroundColor:Colors.white,
    top:140,
    alignItems:'center',
    justifyContent:'center'
  },
  btn:{
  justifyContent:'flex-end',
  }
  // title: {
  //   marginTop: Margin.headingTop,
  //   marginLeft: Margin.headingLeft,
  //   fontFamily: Fonts.regular,
  //   fontWeight: 'bold',
  //   fontSize: Margin.headingFont,
  //   color: Margin.headingColor,
  // },

  // containerBox: {
  //   borderWidth: 4,
  //   borderRadius: 20,
  //   alignItems: 'center',
  //   borderColor: '#EBEAEA',
  //   marginTop: 59,
  //   marginLeft: 12,
  //   paddingLeft: 36,
  //   paddingTop: 28,
  //   paddingBottom: 40,
  //   paddingRight: 36,
  // },

  // iconGender: {
  //   resizeMode: 'contain',
  //   width: 70,
  //   height: 70,
  // },
  // indicatorContainer: {
  //   height: 44,
  //   width: 44,
  //   borderRadius: 50,
  //   backgroundColor: 'white',
  //   position: 'relative',
  //   left: 55,
  //   bottom: 30,
  //   borderColor: 'grey',
  //   borderWidth: 1,
  
  // },
  // Checked: {
  //   position: 'relative',
  //   left: -10,
  //   bottom: 7,
  // },
  // txt: {
  //   paddingTop: 21,
  //   fontFamily: Fonts.semiBold,
  // },
});
