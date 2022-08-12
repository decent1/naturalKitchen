import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Platform
} from 'react-native'
import {Colors} from '../../utils/Colors'
import {Fonts} from '../../utils/Fonts'
import { ImagePath } from '../../utils/imagePath'
import ButtonSmall from '../../components/Button/ButtonSmall'
import StatusBar from '../../components/StatusBar'
import {commonStyles} from '../../utils/commonStyles'
export default function OnBoarding({navigation}) {
    return(
        <View style={styles.container}>
            <StatusBar 
                barStyle={commonStyles.statusBarStyleLight}
                backgroundColor={Colors.statusBarBackgroundColor_Primary}
            />
            <ImageBackground
                style={{
                    width:'100%',
                    height:'100%',
                    flexDirection:'row'
                }}
                source={ImagePath.onboarding}
            >
                 <Image 
                    style={{
                        position:'absolute',
                        height:99,
                        width:99,
                        left:30,
                        top:30,
                    }}
                    source={ImagePath.logo}
                />
                <View style={{
                    paddingTop:15,
                    width:'100%',
                    backgroundColor:'rgba(164, 94, 229,0.8)',
                    alignSelf:'flex-end',
                    borderRadius:30,
                    flexDirection:'row'
                }}>
                    <View style={{
                        width:'100%',
                        backgroundColor:'white',
                        alignSelf:'flex-end',
                        borderTopRightRadius:30,
                        borderTopLeftRadius:30,
                    }}>
                        <Text style={styles.title}>{'Eat better, Live better'}</Text>
                    <Text style={styles.des}>{'Our meal plans are cooked with love & portioned to suit your body, fitness goal and taste buds.'}</Text>

                    <View style={styles.buttonContainer}>
                        <ButtonSmall onPress={() => {navigation.navigate('Login')}} title={'LOGIN'} style={{backgroundColor:'rgb(244,240,248)'}} textStyle={{color:Colors.black}}/>
                        <ButtonSmall onPress={() => {navigation.navigate('SignUp')}} title={'GET STARTED'} />
                    </View>

                    </View>

                </View>
            </ImageBackground>

           

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    },
    onBoardingBackground:{
        width:'100%',
        height:'100%',
        flexDirection:'row'
    },
    logo:{
        position:'absolute',
        height:99,
        width:99,
        left:30,
        top:30,
    },
    indicatorContainer:{
        height:10,
        width:10,
        borderRadius:5,
        backgroundColor:"#707070"
    },
    indicatorParent:{
        flexDirection:'row',
        alignSelf:'center',
    },
    title:{
        fontSize:18,
        fontFamily:Fonts.semiBold,
        color:Colors.black,
        alignSelf:'center',
        marginTop:'10%'
    },
    des:{
        fontSize:12,
        fontFamily:Fonts.regular,
        color:'#707070',
        marginHorizontal:50,
        textAlign:'center',
        marginTop:'10%'
    },
    buttonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:'10%',
        // position:'absolute',
        width:'90%',
        alignSelf:'center',
        marginBottom:50,
        
    },
    imageBackground:{
        width: '100.5%',
        aspectRatio: 1,
        position:'absolute',
        bottom:'10%',
    },
    contentView:{
        flex:1,
        height:'70%',
        width:'90%',
        bottom:'-15%',
        alignSelf:'center',
        position:'absolute',
    }
})