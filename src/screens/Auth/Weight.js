import {StyleSheet, Text, View , ScrollView, TextInput } from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import StatusBar from '../../components/StatusBar';
import ButtonSmall from '../../components/Button/ButtonSmall';
import {Colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import {Margin} from '../../utils/margin';
import TopBar from '../../components/TopBar/TopBarBackHelp';
import {commonStyles} from '../../utils/commonStyles';
import AuthHeading from '../../components/AuthHeading';
import DropDownPicker from 'react-native-dropdown-picker';
const Weight = props => {
  //Weight
  const [open, setOpen] = useState(false);
  const [weight, setWeight] = useState();
  const [items, setItems] = useState([
    {label: '40 KG', value: 40 +'KG'},
    {label: '50 KG', value: 50 +'KG'},
    {label: '60 KG', value: 60 +'KG'},
    {label: '70 KG', value: 70 +'KG'},
    {label: '80 KG', value: 80 +'KG'},
    {label: '90 KG', value: 90 +'KG'},
    {label: '100 KG', value: 100 +'KG'},
  ]);


  //Height
  const [open2, setOpen2] = useState(false);
  const [Height, setHeight] = useState(null);
  const [items2, setItems2] = useState([
    {label: '40 CM', value: 40 +'CM'},
    {label: '50 CM', value: 50 +'CM'},
    {label: '60 CM', value: 60 +'CM'},
    {label: '70 CM', value: 70 +'CM'},
    {label: '80 CM', value: 80 +'CM'},
    {label: '90 CM', value: 90 +'CM'},
    {label: '100 CM', value: 100 +'CM'},
  ]);

  //Age
  const [open3, setOpen3] = useState(false);
  const [Age, setAge] = useState(null);
  const [items3, setItems3] = useState([
    {label: '40 YO', value: 40 +'YO'},
    {label: '50 YO', value: 50 +'YO'},
    {label: '60 YO', value: 60 +'YO'},
    {label: '70 YO', value: 70 +'YO'},
    {label: '80 YO', value: 80 +'YO'},
    {label: '90 YO', value: 90 +'YO'},
    {label: '100 YO', value: 100 +'YO'},
  ]);
//Target Weight
const [open4, setOpen4] = useState(false);
const [targetweight, setTargetWeight] = useState(null);
const [items4, setItems4] = useState([
  {label: '40 CM', value: 40},
  {label: '50 CM', value: 50},
  {label: '60 CM', value: 60},
  {label: '70 CM', value: 70},
  {label: '80 CM', value: 80},
  {label: '90 CM', value: 90},
  {label: '100 CM', value: 100},
]);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.statusBarBackgroundColor_White}
        barStyle={commonStyles.statusBarStyleDark}
      />
      <TopBar onBackPress={() => {}} onHelpPress={() => {}} />
      <ScrollView > 
      <AuthHeading title={'YOUR CURRENT WEIGHT?'} />
      <Text
        style={{
          borderWidth: 1,
          width: 320,
          alignSelf: 'center',
          borderRadius: 6,
          marginBottom: 20,
          height: 52,
          paddingTop:17,
          paddingLeft:16,
          fontFamily:Fonts.semiBold,
          fontSize:15,
          borderColor:'#E1E0E2'
        }}>
        {weight} 
      </Text>
      <DropDownPicker
        open={open}
        value={weight}
        items={items}
        setOpen={setOpen}
        setValue={setWeight}
        setItems={setItems}
        zIndex={3000}
        zIndexInverse={1000}
        containerStyle={{
          width: 320,
          alignSelf: 'center',
       
        
        }}
        placeholder={'65 KG'}
        style={{
          borderColor:Colors.primary,
        ...commonStyles.shadow,

        }}
        textStyle={
          {
            paddingLeft:10,
            fontFamily:Fonts.semiBold,
            fontSize:15
          }
        }
      />

      <AuthHeading title={'HOW TALL ARE YOU?'} />
      <Text
        style={{
          borderWidth: 1,
          width: 320,
          alignSelf: 'center',
          borderRadius: 6,
          marginBottom: 20,
          height: 52,
          paddingTop:17,
          paddingLeft:16,
          fontFamily:Fonts.semiBold,
          fontSize:15,
          borderColor:'#E1E0E2'
        }}>
        {Height} 
      </Text>
      <DropDownPicker
        open={open2}
        value={Height}
        items={items2}
        setOpen={setOpen2}
        setValue={setHeight}
        setItems={setItems2}
        zIndex={2000}
        containerStyle={{
          width: 320,
          alignSelf: 'center',
       
        
        }}
        placeholder={'65 KG'}
        style={{
          borderColor:Colors.primary,
        ...commonStyles.shadow,

        }}
        textStyle={
          {
            paddingLeft:10,
            fontFamily:Fonts.semiBold,
            fontSize:15
          }
        }
      />

      <AuthHeading title={'HOW OLD ARE YOU?'} />
      <Text
        style={{
          borderWidth: 1,
          width: 320,
          alignSelf: 'center',
          borderRadius: 6,
          marginBottom: 20,
          height: 52,
          paddingTop:17,
          paddingLeft:16,
          fontFamily:Fonts.semiBold,
          fontSize:15,
          borderColor:'#E1E0E2'
        }}>
        {Age} 
      </Text>
      <DropDownPicker
        open={open3}
        value={Age}
        items={items}
        setOpen={setOpen3}
        setValue={setAge}
        setItems={setItems3}
        zIndex={1000}
        containerStyle={{
          width: 320,
          alignSelf: 'center',
       
        
        }}
        placeholder={'65 KG'}
        style={{
          borderColor:Colors.primary,
        ...commonStyles.shadow,

        }}
        textStyle={
          {
            paddingLeft:10,
            fontFamily:Fonts.semiBold,
            fontSize:15
          }
        }
      />

      <AuthHeading title={'YOUR TARGET WEIGHT?'} />
      <Text
        style={{
          borderWidth: 1,
          width: 320,
          alignSelf: 'center',
          borderRadius: 6,
          marginBottom: 20,
          height: 52,
          paddingTop:17,
          paddingLeft:16,
          fontFamily:Fonts.semiBold,
          fontSize:15,
          borderColor:'#E1E0E2'
        }}>
        {targetweight} 
      </Text>
      <DropDownPicker
        open={open4}
        value={targetweight}
        items={items}
        setOpen={setOpen4}
        setValue={setTargetWeight}
        setItems={setItems4}
        zIndex={500}
        containerStyle={{
          width: 320,
          alignSelf: 'center',
       
        
        }}
        placeholder={'65 KG'}
        style={{
          borderColor:Colors.primary,
        ...commonStyles.shadow,

        }}
        textStyle={
          {
            paddingLeft:10,
            fontFamily:Fonts.semiBold,
            fontSize:15
          }
        }
      />

      <ButtonSmall
        onPress={() => props.navigation.navigate('Gender')}
        title={'Next'}
        style={styles.btn}
      />
      </ScrollView>
    </View>
  );
};

export default Weight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  title: {
    marginTop: Margin.headingTop,
    marginLeft: Margin.headingLeft,
    fontFamily: Fonts.regular,
    fontWeight: 'bold',
    fontSize: Margin.headingFont,
    color: Margin.headingColor,
  },
  btn: {
    alignSelf: 'flex-end',
    marginRight: 23,
    marginBottom: 23, 
    marginTop:'30%'
  },
  txt:{
    fontFamily:Fonts.semiBold,
    fontSize:14,
    color:Colors.black,
    marginBottom:14,
  },
  rangeSlider:{
    marginHorizontal:24
  }
});
