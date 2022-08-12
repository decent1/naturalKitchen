  import { ScrollView, StyleSheet, Text, TouchableOpacity, View ,Image, Modal} from 'react-native';
  import React,{useState} from 'react';
  import { ImagePath } from '../../utils/imagePath';
  import { Colors } from '../../utils/Colors';
  import StatusBar from '../../components/StatusBar';
  import { commonStyles } from '../../utils/commonStyles';
  import TopBar from '../../components/TopBar/TopBarBackHelp';
  import { Fonts } from '../../utils/Fonts';
  import ButtonSmall from '../../components/Button/ButtonSmall';
  import Ionicons from 'react-native-vector-icons/Ionicons'
  import AuthHeading from '../../components/AuthHeading';
  import SelectionItem from '../../components/SelectionItem';
  import ProgressCircle from 'react-native-progress-circle'
  const Prefrences = ({navigation}) => {
  const [data, setData] = useState([
    {
      id: '1',
      image: ImagePath.egg,
      title: 'EGG FREE',
      isSelected: false,
    },
    {
      id: '2',
      image: ImagePath.dairy,
      title: 'DAIRY FREE',
      isSelected: false,
    },
    {
      id: '3',
      image: ImagePath.gluten,
      title: 'GLUTEN FREE',
      isSelected: false,
    },
    {
      id: '4',
      image: ImagePath.fish,
      title: 'FISH FREE',
      isSelected: false,
    },
    {
      id: '5',
      image: ImagePath.seaFood,
      title: 'SEAFOOD FREE',
      isSelected: false,
    },
    {
      id: '6',
      image: ImagePath.nutSeed,
      title: 'NUTS & SEEDS',
      isSelected: false,
    },
    {
      id: '7',
      image: ImagePath.vegan,
      title: 'VEGAN',
      isSelected: false,
    },
    {
      id: '8',
      image: ImagePath.spicy,
      title: 'NOT SPICY',
      isSelected: false,
    },
    {
      id: 9,
      image: ImagePath.legume,
      title: 'LEGUME FREE',
      isSelected: false,
    },
  ]);
  const widthAndHeight = 100
  const series = [23]
  const sliceColor = [Colors.primary]

  const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarBackgroundColor_White}
          barStyle={commonStyles.statusBarStyleDark}
        />
        <TopBar onBackPress={() => {}} onHelpPress={() => {}} />

        <ScrollView>
          <AuthHeading title={'SELECT YOUR PREFRENCES?'} />

          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginHorizontal: 32,
            }}>
            {data.map((item, index) => {
              return (
                <SelectionItem
                  key={index}
                  onPress={() => {
                    setData(
                      data.map(i =>
                        i.id == item.id ? {...i, isSelected: !i.isSelected} : i,
                      ),
                    );
                  }}
                  index={index}
                  image={item.image}
                  title={item.title}
                  isSelected={item.isSelected}
                  imageStyle={{
                    height:50,
                    width:50,
                  }}
                  style={{}}
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
            title={'UPDATE'}
            // onPress={() => {
            //   navigation.navigate('Result')
            // }}
            onPress={() => setModalVisible(true)}
          />
        </ScrollView>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>CALCULATING RESULTS</Text>
                <ProgressCircle
                  percent={50}
                  radius={50}
                  borderWidth={5}
                  color="#3399FF"
                  shadowColor="#999"
                  bgColor="#fff"
                  outerCircleStyle={{
                    marginTop: 5,
                  }}>
                  <Text style={{fontSize: 18}}>{'50%'}</Text>
                </ProgressCircle>
                <ButtonSmall
                  title={'Ok'}
                  // onPress={() => }
                  onPress={() => {
                    setModalVisible(!modalVisible)
                    navigation.navigate('Result')
                  }}
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

  export default Prefrences;

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
      color: Colors.black,
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
      backgroundColor: Colors.white,
      top: 140,
      alignItems: 'center',
      justifyContent: 'center',
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
