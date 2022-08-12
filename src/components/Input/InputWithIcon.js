import React from 'react'
import {
    View,
    TextInput
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'

export default function Input({
    style,
    placeholder,
    rightComponent,
    value,
    onChangeText,
    keyboardType,
    secureTextEntry,
}){
    return <View style={{
        height:40,
        marginHorizontal:15,
        borderRadius:5,
        borderWidth:1,
        borderColor:'rgb(195,195,195)',
        ...style,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
    }}>
        <TextInput 
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={(value) => onChangeText(value)}
            keyboardType={keyboardType}
            style={{
                fontFamily:Fonts.regular,
                color:Colors.black,
                flex:1,
            }}
            placeholder={placeholder}
        />
        {rightComponent}
    </View>
}