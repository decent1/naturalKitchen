import React from 'react'
import {
    Text
} from 'react-native'
import { Colors } from '../utils/Colors'
import { Fonts } from '../utils/Fonts'

export default function AuthHeading({title, style}){
    return <Text
        style={{
            fontSize: 20,
            fontFamily:Fonts.bold,
            color:Colors.black,
            marginLeft:23,
            marginTop:30,
            marginBottom:30,
            ...style
        }}
    >
        {title}
    </Text>
}