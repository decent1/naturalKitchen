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
import SelectionItem from '../../components/SelectionItem'

const BodyType =({navigation})=>{
    const [data, setData] = useState([
      {
        id: '1',
        name: 'Ectomorph',
        image: ImagePath.ecto,
        width:102,
        height:145,
      },
      {
        id: '2',
        name: 'Endomorph',
        image: ImagePath.endo,
        width:107,
        height:145,
      },
      {
        id: '3',
        name: 'Mesomorph',
        image: ImagePath.MESO,
        width:95,
        height:145,
      },
    ]);
    const [selected,setSelected] = useState(0)
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarBackgroundColor_White}
          barStyle={commonStyles.statusBarStyleDark}
        />
        <TopBar onBackPress={() => {}} onHelpPress={() => {}} />
        
          <AuthHeading 
            title={'YOUR BODY TYPE?'}
          />
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginHorizontal: 33,
            }}>
            {data.map((item, index) => (
              <SelectionItem 
              key={index}
                onPress={() => setSelected(index)}
                index={index}
                image={item.image}
                title={item.name}
                isSelected={selected === index}
                imageStyle={{
                  height:(item.height/100) * 50,
                  width:(item.width/100) * 50,
                }}
              />
            ))}
          </View>
          <ButtonSmall
            onPress={() => {
              navigation.navigate('Activity');
            }}
            style={commonStyles.bottomButton}
            title={'NEXT'}
          />
      
      </View>
    );
}

export default BodyType;
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
      alignSelf: 'center',
      backgroundColor:Colors.white,
      top:180,
      alignItems:'center',
      justifyContent:'center'
    },
})