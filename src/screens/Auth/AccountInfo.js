import {
    StyleSheet,
    Text,
    View,
   ScrollView,
    Modal
  } from 'react-native';
  import React, {useState,useRef} from 'react';
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
import Input from '../../components/Input/InputTitle';
import ButtonLarge from '../../components/Button/ButtonLarge';
import PhoneInput from '../../components/Input/PhoneInput'
import CountryCodeModal from '../../components/Modal/CountryCodeModal'

  
  const AccountInfo = ({navigation}) => {
    const [phone, setPhone] = useState('')
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [modalVisible_CountryCode, setModalVisible_CountryCode] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({"name":"Bahrain","topLevelDomain":[".bh"],"alpha2Code":"BH","alpha3Code":"BHR","callingCodes":["973"],"capital":"Manama","altSpellings":["BH","Kingdom of Bahrain","Mamlakat al-Baá¸¥rayn"],"subregion":"Western Asia","region":"Asia","population":1701583,"latlng":[26,50.55],"demonym":"Bahraini","area":765,"timezones":["UTC+03:00"],"nativeName":"â€Ø§Ù„Ø¨Ø­Ø±ÙŠÙ†","numericCode":"048","flags":{"svg":"https://flagcdn.com/bh.svg","png":"https://flagcdn.com/w320/bh.png"},"currencies":[{"code":"BHD","name":"Bahraini dinar","symbol":".Ø¯.Ø¨"}],"languages":[{"iso639_1":"ar","iso639_2":"ara","name":"Arabic","nativeName":"Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"}],"translations":{"br":"Bahrein","pt":"BarÃ©m","nl":"Bahrein","hr":"Bahrein","fa":"Ø¨Ø­Ø±ÛŒÙ†","de":"Bahrain","es":"Bahrein","fr":"BahreÃ¯n","ja":"ãƒãƒ¼ãƒ¬ãƒ¼ãƒ³","it":"Bahrein","hu":"Bahrein"},"flag":"https://flagcdn.com/bh.svg","regionalBlocs":[{"acronym":"AL","name":"Arab League","otherNames":["Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©","JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah","League of Arab States"]}],"cioc":"BRN","independent":true})

  
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarBackgroundColor_White}
          barStyle={commonStyles.statusBarStyleDark}
        />
        <TopBar onBackPress={() => {}} onHelpPress={() => {}} />
        <ScrollView>
        <Modal
          visible={modalVisible_CountryCode}
          transparent={true}
          animationType={'slide'}
          onRequestClose={() => setModalVisible_CountryCode(!modalVisible_CountryCode)}
        >
          <CountryCodeModal 
            onSelect={(country)=>{
                setSelectedCountry(country)
                setModalVisible_CountryCode(!modalVisible_CountryCode)
            }}
            modalVisible={() => setModalVisible_CountryCode(!modalVisible_CountryCode)}
          />
        </Modal>
          <AuthHeading
            title={'YOUR ACCOUNT INFORMATION'}
            style={{
              fontSize: 18,
              fontFamily: Fonts.semiBold,
              color: Colors.black,
              marginTop: 8,
              marginBottom: 20,
              marginLeft: 35,
            }}
          />

          <View
            style={{
              marginHorizontal: 20,
              borderRadius: 5,
              backgroundColor: 'white',
              ...commonStyles.shadow,
            }}>
            <Input style={{marginTop: 27}} title={'Name'} />
            
            <Text
              style={{
                marginTop: 22,
                marginHorizontal: 15,
                fontSize: 16,
                fontFamily: Fonts.medium,
                color: Colors.black,
              }}>
              {'Phone number'}
            </Text>
            <PhoneInput 
                countryIcon={selectedCountry.flags.png}
                countryCode={selectedCountry.callingCodes[0]}
                value={phone}
                onChangeText={(value) => setPhone(value)}
                style={{
                  marginTop: 5,
                }}
                onCountryCodePress={() => {
                  setModalVisible_CountryCode(!modalVisible_CountryCode);
                }}
              />
            <AuthHeading
              title={'Delivery address:'}
              style={{
                fontSize: 18,
                fontFamily: Fonts.semiBold,
                color: Colors.black,
                marginTop: 37,
                marginLeft: 15,
                marginBottom: 0,
              }}
            />

            <Input style={{marginTop: 15}} title={'Area'} />

            <Input half style={{marginTop: 24}} title={'Building number'} />

            <Input half style={{marginTop: 24}} title={'Block  number'} />

            <Text
              style={{
                fontSize: 16,
                fontFamily: Fonts.medium,
                color: Colors.black,
                marginLeft: 15,
                marginTop: 28,
              }}>
              {'Delivery time'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                marginLeft: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    height: 23,
                    width: 23,
                    backgroundColor: Colors.primary,
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    name={'ios-checkmark'}
                    size={15}
                    color={Colors.white}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: Fonts.semiBold,
                    color: Colors.black,
                    marginLeft: 15,
                  }}>
                  {'Morning'}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 20,
                }}>
                <View
                  style={{
                    height: 23,
                    width: 23,
                    backgroundColor: Colors.primary,
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    name={'ios-checkmark'}
                    size={15}
                    color={Colors.white}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: Fonts.semiBold,
                    color: Colors.black,
                    marginLeft: 15,
                  }}>
                  {'Evening'}
                </Text>
              </View>
            </View>

            <Input
              placeholder={'12/07/2022'}
              style={{marginTop: 24, marginBottom: 50}}
              title={'Starting date'}
            />
          </View>

          <ButtonLarge
            onPress={() => {
              navigation.navigate('OrderSummery');
            }}
            style={{
              marginTop: 67,
              marginBottom: 126,
            }}
            title={'COMPLETE'}
          />
        </ScrollView>
      </View>
    );
  };
  
  export default AccountInfo;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.appBackgroundColor,
    },
    
  });
  