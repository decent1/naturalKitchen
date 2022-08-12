import React ,{useState ,useRef} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Platform,
    Modal
} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import {Colors} from '../../utils/Colors'
import {Fonts} from '../../utils/Fonts'
import { ImagePath } from '../../utils/imagePath'
import ButtonSmall from '../../components/Button/ButtonSmall'
import {commonStyles} from '../../utils/commonStyles'
import Input from '../../components/Input/InputWithIcon'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ButtonLarge from '../../components/Button/ButtonLarge'
import StatusBar from '../../components/StatusBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PhoneInput from '../../components/Input/PhoneInput'
import CountryCodeModal from '../../components/Modal/CountryCodeModal'
export default function Login({navigation}){
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [modalVisible_CountryCode, setModalVisible_CountryCode] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({"name":"Bahrain","topLevelDomain":[".bh"],"alpha2Code":"BH","alpha3Code":"BHR","callingCodes":["973"],"capital":"Manama","altSpellings":["BH","Kingdom of Bahrain","Mamlakat al-Baá¸¥rayn"],"subregion":"Western Asia","region":"Asia","population":1701583,"latlng":[26,50.55],"demonym":"Bahraini","area":765,"timezones":["UTC+03:00"],"nativeName":"â€Ø§Ù„Ø¨Ø­Ø±ÙŠÙ†","numericCode":"048","flags":{"svg":"https://flagcdn.com/bh.svg","png":"https://flagcdn.com/w320/bh.png"},"currencies":[{"code":"BHD","name":"Bahraini dinar","symbol":".Ø¯.Ø¨"}],"languages":[{"iso639_1":"ar","iso639_2":"ara","name":"Arabic","nativeName":"Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"}],"translations":{"br":"Bahrein","pt":"BarÃ©m","nl":"Bahrein","hr":"Bahrein","fa":"Ø¨Ø­Ø±ÛŒÙ†","de":"Bahrain","es":"Bahrein","fr":"BahreÃ¯n","ja":"ãƒãƒ¼ãƒ¬ãƒ¼ãƒ³","it":"Bahrein","hu":"Bahrein"},"flag":"https://flagcdn.com/bh.svg","regionalBlocs":[{"acronym":"AL","name":"Arab League","otherNames":["Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©","JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah","League of Arab States"]}],"cioc":"BRN","independent":true})
    return (
      <View style={styles.container}>
        
        <StatusBar 
            barStyle={commonStyles.statusBarStyleLight}
            backgroundColor={Colors.statusBarBackgroundColor_Primary}
        />
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
        <TouchableOpacity 
         onPress={() => navigation.goBack()}
        style={{
          height:50,
          width:50,
          position:'absolute',
          zIndex:100000,
          marginTop:Platform.OS == 'ios' ? 45  : 0,
          alignItems:'center',
          justifyContent:'center'
        }}>
           <Ionicons 
                name="arrow-back"
                size={20}
                color={Colors.primary}
            />
        </TouchableOpacity>
        
          <ImageBackground
                style={{
                    width:'100%',
                    height:'100%',
                    flexDirection:'row'
                }}
                source={ImagePath.onboarding}
            >
                
                    <View style={{
                        width:'100%',
                        backgroundColor:'white',
                        alignSelf:'flex-end',
                        borderTopRightRadius:30,
                        borderTopLeftRadius:30,
                        ...commonStyles.shadow,
                    }}>
                        <View style={styles.contentView}>
            <Text
              style={{
                fontSize: 38,
                color: '#54198A',
                fontFamily: Fonts.medium,
                marginHorizontal: 23,
                marginTop:48,
              }}>
              LOGIN
            </Text>
            <View
              style={{
                marginHorizontal: 20,
                marginTop: 26,
                backgroundColor: Colors.white,
                ...commonStyles.shadow,
              }}>
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
             

              <Text
                style={{
                  marginHorizontal: 15,
                  fontSize: 16,
                  fontFamily: Fonts.medium,
                  color: Colors.black,
                  marginTop:22,
                }}>
                {'Password'}
              </Text>
              <Input
                secureTextEntry={secureTextEntry}
                value={password}
                onChangeText={(value) => setPassword(value)}
                keyboardType={'default'}
                placeholder={'Password'}
                style={{
                  marginTop: 9,
                }}
                rightComponent={
                  <Entypo 
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                  size={18} name={secureTextEntry ? 'eye-with-line' : 'eye'} color={'gray'} />
                }
              />
              <Text
                style={{
                  fontFamily: Fonts.semiBold,
                  color: Colors.primary,
                  fontSize: 10,
                  alignSelf: 'flex-end',
                  marginHorizontal: 15,
                  marginTop: 5,
                }}>
                {'forgot password?'}
              </Text>

                  <ButtonLarge 
                      onPress={() => {navigation.navigate('HomeStack')}}
                      style={{marginTop:36,}}
                      title={"LOGIN"}
                  />

              <Text
                style={{
                  fontSize: 10,
                  fontFamily: Fonts.regular,
                  color: '#707070',
                  marginTop: '3%',
                  alignSelf: 'center',
                  marginBottom: '10%',
                }}>
                {'By continuing, you agree to our Terms and Privacy Policy'}
              </Text>
            </View>
          </View>

                    </View>

            </ImageBackground>
       
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    },
    onBoardingBackground:{
        width:'100%',
        height:'30%'
    },
    imageBackground:{
        width: '100.5%',
        aspectRatio: 1,
        position:'absolute',
        bottom:'47%',
    },
    contentView:{
      marginBottom:50,
    }
})