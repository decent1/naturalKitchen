import React,{useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import TopBar from '../../components/TopBar/TopBarBackHelp'
import { Colors } from '../../utils/Colors'
import StatusBar from '../../components/StatusBar'
import { commonStyles } from '../../utils/commonStyles'
import { Fonts } from '../../utils/Fonts'
import { ImagePath } from '../../utils/imagePath'
import ButtonSmall from '../../components/Button/ButtonSmall'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import AuthHeading from '../../components/AuthHeading'

export default function BloodType({navigation}){
    const [data,setData] = useState([
        {
            id:"1",
            name:"A"
        },
        {
            id:"2",
            name:"AB"
        },
        {
            id:"3",
            name:"0"
        },
        {
            id:"4",
            name:"B"
        },
        {
            id:"5",
            name:"?"
        }
    ])
    const [selected,setSelected] = useState(0)
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarBackgroundColor_White}
          barStyle={commonStyles.statusBarStyleDark}
        />
        <TopBar onBackPress={() => {}} onHelpPress={() => {}} />
        <ScrollView>
          <AuthHeading 
            title="YOUR BLOOD TYPE?"
          />
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginHorizontal: 33,
            }}>
            {data.map((item, index) => (
              <View
                key={index}
                style={{
                  width: '50%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setSelected(index);
                  }}
                  style={{
                    height: 167,
                    borderRadius: 35,
                    borderWidth: 5,
                    marginRight: index % 2 == 0 ? 12 : 0,
                    marginLeft: index % 2 == 1 ? 12 : 0,
                   
                    borderColor:
                      selected == index ? Colors.primary : 'rgb(235,235,235)',
                    marginBottom: 44,
                  }}>
                  <ImageBackground
                    style={{
                      height: 120,
                      width: 120,
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginTop: 10,
                    }}
                    source={ImagePath.drop}>
                    <Text
                      style={{
                        fontFamily: Fonts.bold,
                        color: Colors.white,
                        fontSize: 20,
                        marginTop: 10,
                      }}>
                      {item.name}
                    </Text>
                  </ImageBackground>
                  <View
                    style={{
                      height: 44,
                      width: 44,
                      borderRadius: 22,
                      borderWidth: 1,
                      
                      borderColor:
                        selected == index ? Colors.primary : 'rgb(235,235,235)',
                      position: 'absolute',
                      alignSelf: 'center',
                      top: 140,
                      alignItems: 'center',
                      justifyContent: 'center',
                      
                      backgroundColor:
                        selected == index ? Colors.primary : 'white',
                    }}>
                    <Ionicons name="ios-checkmark" size={20} color={'white'} />
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <ButtonSmall
            onPress={() => {navigation.navigate('Prefrences')}}
            style={{
              marginRight: 30,
              alignSelf: 'flex-end',
              marginBottom: 44,
            }}
            title={'NEXT'}
          />
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    },
    title:{
        fontSize:20,
        fontFamily:Fonts.bold,
        color:Colors.black,
        marginHorizontal:23,
        marginTop:30,
    }
})