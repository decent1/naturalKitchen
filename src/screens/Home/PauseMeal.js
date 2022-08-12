import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../utils/Colors'
import StatusBar from '../../components/StatusBar'
import { commonStyles } from '../../utils/commonStyles'
import TopBar from '../../components/TopBar/TopBarBackHelp'
import AuthHeading from '../../components/AuthHeading'
import { Fonts } from '../../utils/Fonts'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function PauseMeal(){
    const [pauseData, setPauseData] = useState([
        {
            id:"1",
            day:"Mon",
            date:"24",
        },
        {
            id:"2",
            day:"Tue",
            date:"25",
        },
        {
            id:"3",
            day:"Wed",
            date:"26",
        },
        {
            id:"4",
            day:"Thu",
            date:"27",
        },
        {
            id:"5",
            day:"Fri",
            date:"28",
        }
    ])
    const [selectedDay, setSelectedDay] = useState('1')
    return(
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={Colors.statusBarBackgroundColor_White}
                barStyle={commonStyles.statusBarStyleDark}
            />
            <TopBar 
               onBackPress={() => {
                   console.log('javed')
               }}
               onHelpPress={() => {
                   console.log('javed')
               }} 
            />
            <Text style={styles.title}>
                {'PAUSE YOUR MEAL'}
            </Text>
            <Text style={styles.description}>{'You can pause your meal 48 hrs prior to the deal.'}</Text>

            <FlatList 
                contentContainerStyle={{marginTop:37}}
                data={pauseData}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity 
                            onPress={() => {
                                setSelectedDay(item.id)
                            }}
                        style={styles.itemContainer}>
                           <View style={[styles.dayContainer,{
                               borderColor:selectedDay === item.id ? Colors.primary : '#707070',
                           }]}>
                                 <Text style={[styles.day,{
                                     color:selectedDay === item.id ? Colors.primary : '#707070',
                                 }]}>{item.day}</Text>
                                    <Text style={[styles.date,{
                                        color:selectedDay === item.id ? Colors.primary : '#707070',
                                    }]}>{item.date}</Text>
                           </View>

                           <View style={{flexDirection:'row'}}>
                                <View style={[styles.circle,{
                                    marginRight:10,
                                    backgroundColor:selectedDay === item.id ? '#12A407' : '#707070',
                                }]}>
                                    <Entypo 
                                        name={'controller-play'}
                                        color={'white'}
                                        size={20}
                                    />

                                </View>

                                <View style={[styles.circle,{
                                    backgroundColor:selectedDay === item.id ? '#F90000' : '#707070',
                                }]}>
                                     <FontAwesome 
                                        name={'pause'}
                                        color={'white'}
                                        size={16}
                                    />
                                </View>
                           </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor,
    },
    title:{
        fontFamily:Fonts.bold,
        color:Colors.black,
        fontSize:24,
        marginLeft:28,
        marginTop:2,
    },
    description:{
        fontSize:10,
        fontFamily:Fonts.regular,
        color:'#707070',
        marginLeft:28,
        marginTop:6,
    },
    itemContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:40,
        width:'60%',
        alignSelf:'center'
    },
    dayContainer:{
        height:60,
        width:60,
        borderRadius:5,
        borderWidth:1.5,
        alignItems:'center',
        justifyContent:'center',
    },
    day:{
        fontFamily:Fonts.medium,
        fontSize:15,
    },
    date:{
        fontFamily:Fonts.semiBold,
        fontSize:20,
    },
    circle:{
        height:32,
        width:32,
        borderRadius:16,
        alignItems:'center',
        justifyContent:'center',
    }
})