import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import { ImagePath } from '../../utils/imagePath'

export default function PhoneInput({
    countryIcon=ImagePath.bahrain,
    style,
    countryCode='+973',
    onCountryCodePress=()=>{},
    placeholder='876 886 555',
    value='',
    onChangeText=()=>{},

}){
    return(
        <View style={[styles.container,{
            ...style
        }]}>
            <TouchableOpacity 
            onPress={() => onCountryCodePress()}
            style={styles.countryCodeContainer}>
                <Image 
                    style={styles.image}
                    source={{uri: countryIcon}}
                />
                <Text style={styles.countryCode}>{countryCode}</Text>
            </TouchableOpacity>
            <TextInput 
                onChangeText={(text)=>onChangeText(text)}
                value={value}
                keyboardType={'phone-pad'}
                style={styles.input}
                placeholder={placeholder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:40,
        marginHorizontal:15,
        borderRadius:5,
        borderWidth:1,
        borderColor:'rgb(195,195,195)',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        flexDirection:'row'
    },
    image:{
        width:27,
        height:16
    },
    countryCode:{
        fontSize:14,
        fontFamily:Fonts.regular,
        color:'#707070',
        marginLeft:12,
    },
    countryCodeContainer:{
        flexDirection:'row',
    },
    input:{
        flex:1,
        marginLeft:20,
        fontFamily:Fonts.regular,
        color:Colors.black,
    }
})