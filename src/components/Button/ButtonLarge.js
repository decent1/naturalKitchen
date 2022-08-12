import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'

export default function ButtonLarge({title,onPress,style, textStyle}){
    return <TouchableOpacity onPress={() => onPress()}
        style={[styles.container,{...style}]}>
        <Text style={[styles.title,{...textStyle}]}>{title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container:{ 
        height:41,
        marginHorizontal:15,
        borderRadius:6,
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:16,
        fontFamily:Fonts.semiBold,
        color:Colors.white
    }
})