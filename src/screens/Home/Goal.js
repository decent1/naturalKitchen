import { ScrollView, StyleSheet, Text, TouchableOpacity, View ,Image,Modal,TouchableWithoutFeedback} from 'react-native';
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
import Ionicons from 'react-native-vector-icons/Ionicons'
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
 const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.statusBarBackgroundColor_White}
        barStyle={commonStyles.statusBarStyleDark}
      />
      <TopBar onBackPress={() => {}} onHelpPress={() => {}} />
      <AuthHeading title={'SELECT YOUR GOAL?'} />
      <ScrollView>
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
                imageStyle={{}}
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
          title={'Update'}
          onPress={() => setModalVisible(true)}
        />
      </ScrollView>

      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: Colors.primary,
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="ios-checkmark" size={24} color={'white'} />
              </View>
              <Text style={styles.modalText}>UPDATE SUCCESSFULL</Text>
              <ButtonSmall
                title={'Ok'}
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  marginTop: 10,
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
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
  //Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText:{
    fontFamily:Fonts.bold,
    fontSize:14,
    color:'#54198A'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    position:'absolute',
    right:14,
    bottom:10,
    borderColor:Colors.primary,
    borderWidth:2
  },
});
