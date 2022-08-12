import React from 'react'
import {
    TouchableOpacity,
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'
import { Colors } from '../utils/Colors'
import { Fonts } from '../utils/Fonts'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function SelectionItem({
    onPress,
    index, 
    image, 
    title,
    isSelected,
    imageStyle,
    style
}){
    return <View 
    key={index.toString()}
    style={{
        width: '50%',
    }}>
        <TouchableOpacity
                onPress={() => onPress()}
                style={[styles.container,{
                    marginRight: index % 2 === 0 ? 12 : 0,
                    marginLeft: index % 2 === 1 ? 12 : 0,
                    borderColor: isSelected ? 'rgb(231,209,250)' : 'rgb(235,235,235)',
                    ...style,
                }]}>
                <Image source={image} style={imageStyle} />
                <Text style={styles.title}>{title}</Text>
                <View style={[ styles.indicator, { 
                    backgroundColor: isSelected ? Colors.primary : Colors.white,
                    borderColor:isSelected ? Colors.primary : 'rgb(235,235,235)',
                }]}>
                    <Ionicons 
                        name="ios-checkmark" 
                        size={20} 
                        color={'white'}
                    />
                </View>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container:{
        height: 167,
        borderWidth: 5,
        borderRadius: 35,
        marginBottom: 32,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        marginTop: 18,
        fontFamily: Fonts.semiBold,
        fontSize: 12,
        color: Colors.black,
    },
    indicator:{
        width: 44,
        height: 44,
        borderWidth: 1,
        borderRadius: 22,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor:Colors.white,
        top:140,
        alignItems:'center',
        justifyContent:'center',
    }
})