import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'

export default function ButtonSmall({title,onPress,style, textStyle}){
    return (
      <TouchableOpacity
        onPress={() => onPress()}
        activeOpacity={0.8}
        style={[styles.container, {...style}]}>
        <Text style={[styles.title, {...textStyle}]}>{title}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{ 
        height:41,
        width:112,
        borderRadius:6,
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:12,
        fontFamily:Fonts.semiBold,
        color:Colors.white
    }
})