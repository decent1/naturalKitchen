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
  import Entypo from 'react-native-vector-icons/Entypo';
import Input from '../../components/Input/InputTitle';
import ButtonLarge from '../../components/Button/ButtonLarge';
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
  
  const OrderSummery = ({navigation}) => {
  
  
    return (
      <View style={styles.container}>
         <StatusBar
            backgroundColor={Colors.statusBarBackgroundColor_White}
            barStyle={commonStyles.statusBarStyleDark}
          />
        <TopBar onBackPress={() => {}} onHelpPress={() => {}} />
        <ScrollView>
          <View style={{
              marginHorizontal:20,
            //   height:20,
                marginTop:1,
              borderRadius:5,
              backgroundColor:'white',
              ...commonStyles.shadow,
            //   height:223
          }}>
            <AuthHeading 
                title="Delivery  address:"
                style={{
                    fontSize:18,
                    fontFamily:Fonts.semiBold,
                    marginTop:33,
                    marginLeft:15,
                    marginBottom:12,
                }}
            />
            <Image 
                style={{
                    width:(1220/100)*26,
                    height:(375/100)*26,
                    alignSelf:'center'
                }}
                source={require('../../images/map.png')}
            />
            <View style={{
              flexDirection:'row', 
              marginHorizontal:10,
              marginTop:10,
          }}>
                <View style={{}}>
                    {/* Pin icon */}
                    <Entypo 
                        name="location-pin"
                        size={24}
                        color={'rgb(195,195,195)'}
                    />

                </View>
                <View>
                  <Text style={{
                    fontFamily:Fonts.medium,
                    color:Colors.black,
                  }}>{'Area'}</Text>
                  <Text style={{
                    fontFamily:Fonts.medium,
                    color:Colors.black,
                  }}>{'Building number'}</Text>
                  <Text style={{
                    fontFamily:Fonts.medium,
                    color:Colors.black,
                  }}>{'Block  number'}</Text>
                </View>

            </View>

            <ButtonLarge 
              onPress={() => {}}
              style={{
                backgroundColor:Colors.white,
                borderWidth:1.5,
                borderColor:Colors.primary,
                marginTop:20
              }}
              textStyle={{
                color:Colors.primary
              }}
              title="EDIT LOCATION"
            />

            <AuthHeading 
                title="Payment method:"
                style={{
                    fontSize:18,
                    fontFamily:Fonts.semiBold,
                    marginTop:20,
                    marginLeft:15,
                    marginBottom:12,
                }}
            />

<View 
            style={{
                flexDirection:'row',
                marginLeft:15,
            }}
            >
           <View style={{height:23,width:23,backgroundColor:Colors.primary, borderRadius:12, 
            alignItems:'center',
            justifyContent:'center',
            }}>
                <Ionicons name={'ios-checkmark'} size={15} color={Colors.white} />
            </View>
            <Text style={{
                fontSize:16,
                fontFamily:Fonts.regular,
                color:Colors.black,
                marginLeft:15,
            }}>{'Credimax'}</Text>
           </View>

           <AuthHeading 
                title="Order summary:"
                style={{
                    fontSize:18,
                    fontFamily:Fonts.semiBold,
                    marginTop:15,
                    marginLeft:15,
                    marginBottom:12,
                }}
            />

            <Text style={{
              fontSize:12,
              color:'#707070',
              fontFamily:Fonts.regular,
              marginLeft:15,
              marginRight:'35%',
              marginBottom:15
            }}>
              {
                `Your first day will be from Mon with Breakfast & Dinner, 5 days/week on evening.`
              }
            </Text>

            <View style={{
                flexDirection:'row',
                marginHorizontal:15,
                marginBottom:5,
                alignItems:'center',
                justifyContent:'space-between'
            }}>
              <Text style={{
                fontFamily:Fonts.medium,
                color:Colors.black,
              }}>{'Plan Price:'}</Text>

            <Text style={{
                fontFamily:Fonts.medium,
                color:Colors.black,
              }}>{'120.75 BHD'}</Text>

            </View>
            <View style={{
                flexDirection:'row',
                marginHorizontal:15,
                marginBottom:5,
                alignItems:'center',
                justifyContent:'space-between'
            }}>
              <Text style={{
                fontFamily:Fonts.medium,
                color:Colors.black,
              }}>{'Delivery:'}</Text>

            <Text style={{
                fontFamily:Fonts.medium,
                color:Colors.black,
              }}>{'FREE'}</Text>

            </View>

            <View style={{
                flexDirection:'row',
                marginHorizontal:15,
                marginBottom:5,
                alignItems:'center',
                justifyContent:'space-between',
                borderBottomWidth:1,
                paddingBottom:10,
                borderColor:'#707070'
            }}>
              <Text style={{
                fontFamily:Fonts.medium,
                color:Colors.black,
              }}>{'VAT(10%):'}</Text>

            <Text style={{
                fontFamily:Fonts.medium,
                color:Colors.black,
              }}>{'INCLUDED'}</Text>

            </View>

            <View style={{
                flexDirection:'row',
                marginHorizontal:15,
                marginBottom:5,
                alignItems:'center',
                justifyContent:'space-between'
            }}>
              <Text style={{
                fontFamily:Fonts.medium,
                color:Colors.primary,
                fontSize:12,

              }}>{'Total Amount:'}</Text>

            <Text style={{
                fontFamily:Fonts.medium,
                color:Colors.primary,
              }}>{'120.75 BHD'}</Text>

            </View>

            <Text style={{
              fontFamily:Fonts.regular,
              color:'#707070',
              fontSize:10,
              marginHorizontal:50,
              alignSelf:'center',
              marginTop:20,
              marginBottom:30
            }}>{'By clicking "Proceed to checkout", you agree you are purchasing a continuous subscription.'}</Text>



          </View>

          

         
          <ButtonLarge 
              onPress={() => {
                navigation.navigate('HomeStack')
              }}
                    style={{
                        marginTop:115,
                        marginBottom:38,
                        
                    }}
                    title={'PROCEED TO PAYMENT'}
                />
         </ScrollView>
      </View>
      
    );
  };
  
  export default OrderSummery;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.appBackgroundColor,
    },
    
  });
  