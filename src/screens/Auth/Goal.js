import { ScrollView, StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native';
import React,{useState} from 'react';
import { ImagePath } from '../../utils/imagePath';
import { Colors } from '../../utils/Colors';
import StatusBar from '../../components/StatusBar';
import { commonStyles } from '../../utils/commonStyles';
import TopBar from '../../components/TopBar/TopBarBackHelp';
import { Fonts } from '../../utils/Fonts';
import ButtonSmall from '../../components/Button/ButtonSmall';
import SelectionItem from '../../components/SelectionItem';
import AuthHeading from '../../components/AuthHeading';

const Goal = ({navigation}) => {
const [userOptions, setUserOptions] = useState([
  {
    id: '1',
    image: ImagePath.loss,
    title: 'Weight Loss',
  },
  {
    id: '2',
    image: ImagePath.gain,
    title: 'Weight gain',
  },
  {
    id: '3',
    image: ImagePath.maintenance,
    title: 'maintenance',
  },
  {
    id: '4',
    image: ImagePath.juice,
    title: 'Juice Cleanse',
  },
]);

 const [selected, setSelected] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.statusBarBackgroundColor_White}
        barStyle={commonStyles.statusBarStyleDark}
      />
      <TopBar onBackPress={() => {}} onHelpPress={() => {}} />
      <ScrollView>
        <AuthHeading title={'SELECT YOUR GOAL?'} />

        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            marginHorizontal: 32,
          }}>
          {userOptions.map((item, index) => {
            return (
              <SelectionItem
              key={index}
                onPress={() => setSelected(index)}
                index={index}
                image={item.image}
                title={item.title}
                isSelected={selected === index}
                imageStyle={{
                  height:60,
                  width:60,
                }}
              />
            );
          })}
        </View>
        <ButtonSmall
          style={{
            marginRight: 30,
            alignSelf: 'flex-end',
            marginBottom: 44, 
          }}
          title={'NEXT'}
          onPress={() => {
            navigation.navigate('Weight');
          }}
        />
      </ScrollView>
      {/* <ButtonSmall
          style={{
            marginRight: 30,
            alignSelf: 'flex-end',
            marginBottom: 44, 
          }}
          title={'NEXT'}
          onPress={() => {
            navigation.navigate('Weight');
          }}
        /> */}
    </View>
  );
};

export default Goal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
    
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    marginLeft: 23,
    marginTop: 30,
    color:Colors.black
  },
});
