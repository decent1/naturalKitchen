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

  import FontAwesome from 'react-native-vector-icons/FontAwesome' 
  //phone 
  //envelope 
  //whatsapp 
  //facebook-f


  const Help = props => {
  
  
    return (
      <View style={styles.container}>
         <StatusBar
            backgroundColor={Colors.statusBarBackgroundColor_White}
            barStyle={commonStyles.statusBarStyleDark}
          />
        <TopBar onBackPress={() => {}} onHelpPress={() => {}} />
  
          <AuthHeading  
            title={'CONTACT US'}
            style={{
                fontSize:18,
                fontFamily:Fonts.semiBold,
                color:Colors.black,
                marginTop:8,
                marginBottom:20,
                marginLeft:35,
            }}
          />

          <View style={{
              marginHorizontal:20,
              flexDirection:'row',
              justifyContent:'space-between',
            //   height:20,
            paddingHorizontal:36,
            paddingVertical:33,
              borderRadius:5,
              backgroundColor:'white',
              ...commonStyles.shadow,
          }}>
              
              <View style={{
                  height:45,
                  width:45,
                  borderWidth:1,
                    borderColor:'rgb(195,195,195)',
                    borderRadius:5,
                    alignItems:'center',
                    justifyContent:'center'
              }}>
                    <FontAwesome 
                      name="phone"
                      size={20}
                      color={Colors.primary}
                    />
                    
              </View>

              <View style={{
                  height:45,
                  width:45,
                  borderWidth:1,
                    borderColor:'rgb(195,195,195)',
                    borderRadius:5,
                    alignItems:'center',
                    justifyContent:'center'
              }}>
                    <FontAwesome 
                      name="envelope"
                      size={20}
                      color={'#1D8415'}
                    />
                    
              </View>
              <View style={{
                  height:45,
                  width:45,
                  borderWidth:1,
                    borderColor:'rgb(195,195,195)',
                    borderRadius:5,
                    alignItems:'center',
                    justifyContent:'center'
              }}>
                    <FontAwesome 
                      name="whatsapp"
                      size={20}
                      color={'#12A407'}
                    />
                    
              </View>
              <View style={{
                  height:45,
                  width:45,
                  borderWidth:1,
                    borderColor:'rgb(195,195,195)',
                    borderRadius:5,
                    alignItems:'center',
                    justifyContent:'center'
              }}>
                    <FontAwesome 
                      name="facebook-f"
                      size={20}
                      color={'#1800EE'}
                    />
                    
              </View>                
          </View>
         
         
      </View>
      
    );
  };
  
  export default Help;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.appBackgroundColor,
    },
    
  });
  