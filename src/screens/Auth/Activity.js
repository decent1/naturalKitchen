import React,{useEffect, useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../utils/Colors'
import StatusBar from '../../components/StatusBar'
import { commonStyles } from '../../utils/commonStyles'
import TopBar from '../../components/TopBar/TopBarBackHelp'
import { Fonts } from '../../utils/Fonts'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ButtonSmall from '../../components/Button/ButtonSmall'

export default function Activity({navigation}){
    let [data, setData] = useState([
        {
            id:"1",
            name:"LITTLE OR NO EXERCISE",
        },
        {
            id:"2",
            name:"1 - 3 WORKOUTS/WEEK",
        },
        {
            id:"3",
            name:"4 - 5 WORKOUTS/WEEK",
        },
        {
            id:"4",
            name:"6 - 7 WORKOUTS/WEEK",
        },
    ])
    
    let [selected, SetSelected] = useState(0)
    return(
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={Colors.statusBarBackgroundColor_White}
                barStyle={commonStyles.statusBarStyleDark}
            />
            <TopBar 
                onBackPress={() => {}}
                onHelpPress={() => {}}
            />
            <View style={[styles.contentContainer,{
                
            }]}>
                <Text
                    style={styles.title}
                >{'HOW ACTIVE ARE YOU?'}</Text>
                 {
                    data.map((item,index) => <TouchableOpacity 
                    onPress={() => {
                        SetSelected(item.id)
                    }}
                    key={index}
                    style={[styles.itemContainer,{
                        borderColor: selected == item.id ? Colors.primary : 'rgb(231,231,231)',
                    }]}>
                        <Text style={[styles.itemName,{
                            color: selected == item.id ? Colors.primary : '#707070',
                        }]}>
                            {item.name}
                        </Text>{
                            selected == item.id && <View>
                                <View style={styles.checkContainer}>
                                    <Ionicons
                                        name="ios-checkmark"
                                        size={12}
                                        color={'white'}
                                    />
                                    </View>
                            </View>
                        }
                    </TouchableOpacity>)
                }
            </View>
            <ButtonSmall 
                onPress={() => {navigation.navigate('BloodType')}}
                style={commonStyles.bottomButton}
                title={"NEXT"}
            />
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor,
    },
    contentContainer:{
        marginHorizontal:11,
        backgroundColor:'white',
        ...commonStyles.shadow,
        borderRadius:5,
        paddingBottom:20,
    },
    title:{
        fontSize:20,
        fontFamily:Fonts.bold,
        color:Colors.black,
        marginLeft:11,
        marginTop:30,
        marginBottom:20,
    },
    itemContainer:{
        height:42,
        marginHorizontal:11,
        borderRadius:6,
        borderWidth:1,
        marginBottom:20,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:13,
        justifyContent:'space-between'
    },
    itemName:{
        fontSize:12,
        fontFamily:Fonts.semiBold,
    },
    checkContainer:{
        height:20,
        width:20,
        borderRadius:10,
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        position:'absolute',
        bottom:44,
        right:30
    }
})