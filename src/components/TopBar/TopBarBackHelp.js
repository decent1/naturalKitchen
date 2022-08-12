import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
useNavigation

export default function TopBar({onBackPress, onHelpPress, light, style}){
    const navigation = useNavigation();

    return <View style={{
        flexDirection:'row',
        
        alignItems:'center',
        justifyContent:'space-between',
        height:50,
        ...style
    }}>
        <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={{
            height:50,
            width:50,
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Ionicons 
                name="arrow-back"
                size={20}
                color={light ? 'white' : Colors.primary}
            />
        </TouchableOpacity>
        <Text
                style={{
                    fontFamily:Fonts.semiBold,
                    color:light ? 'white' : Colors.primary,
                    marginRight:18,
                }}
            onPress={() => navigation.navigate('Help')}
            >{'? Help'}</Text>

    </View>
}