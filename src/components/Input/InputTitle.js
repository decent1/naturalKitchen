import React from 'react'
import {
    View,
    TextInput,
    Text
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'

export default function Input({inputStyle,placeholder,title,style,half}){
    return <View style={{
        ...style,
    }}>
        <Text style={{
            fontSize:16,fontFamily:Fonts.medium,color:Colors.black,marginLeft:15
        }}>{title}</Text>
        <View style={{
        height:40,
        marginTop:10,
        marginLeft:15,
        marginHorizontal:15,
        borderRadius:5,
        borderWidth:1,
        borderColor:'rgb(195,195,195)',
        ...inputStyle,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
    }}>
        <TextInput 
            style={{
                fontFamily:Fonts.regular,
                color:Colors.black,
                flex:1,
            }}
            placeholder={placeholder}
        />
    </View>
    </View>
}