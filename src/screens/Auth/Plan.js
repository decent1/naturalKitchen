import React,{useEffect, useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Image,
    FlatList
} from 'react-native'
import { Colors } from '../../utils/Colors'
import StatusBar from '../../components/StatusBar'
import { commonStyles } from '../../utils/commonStyles'
import TopBar from '../../components/TopBar/TopBarBackHelp'
import { Fonts } from '../../utils/Fonts'
import AuthHeading from '../../components/AuthHeading'
import ButtonLarge from '../../components/Button/ButtonLarge'
import { ImagePath } from '../../utils/imagePath'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Plan({navigation}){
    const [plan, setPlan] = useState([
        {
            id:"1",
            name:"Regular",
            image:ImagePath.onboarding,
            isSelected:false
        },
        {
            id:"2",
            name:"Vegan",
            image:ImagePath.onboarding,
            isSelected:true
        },
        {
            id:"3",
            name:"No-Veg",
            image:ImagePath.onboarding,
            isSelected:false
        }
    ])
    let [activity, setActiviy] = useState([
        {
            id:"1",
            name:"1000 - 1199 KCAL",
            isSelected:true
        },
        {
            id:"2",
            name:"1200 - 1399 KCAL",
            isSelected:false
        },
        {
            id:"3",
            name:"1400 - 1800 KCAL",
            isSelected:false
        },  
    ])
    const [days, setDays] = useState([
        {id:"1", name:"MON"},
        {id:"2", name:"TUE"},
        {id:"3", name:"WED"},
        {id:"4", name:"THU"},
        {id:"5", name:"FRI"},
        {id:"6", name:"SAT"},
        {id:"7", name:"SUN"}
    ])
    return(
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={'#F7F7F7'}
                barStyle={commonStyles.statusBarStyleDark}
            />
            
            <TopBar 
                onBackPress={() => {}}
                onHelpPress={() => {}}
            />
            <ScrollView>
            <Text style={{
                marginTop:30,
                alignSelf:'center',
                fontSize:20,
                fontFamily:Fonts.bold,
                color:Colors.black
            }}>{'CHOOSE YOUR MENU'}</Text>
            <Text style={{
                marginTop:6,
                alignSelf:'center',
                fontSize:12,
                fontFamily:Fonts.regular,
                color:Colors.black
            }}>{'Your recommended plan is'}</Text>
            <Text style={{
                marginTop:10,
                alignSelf:'center',
                fontSize:20,
                fontFamily:Fonts.bold,
                color:Colors.primary
            }}>{plan.filter(el => el.isSelected == true)[0].name}</Text>

            
            <FlatList 
                contentContainerStyle={{marginTop:47,}}
                horizontal
                data={plan}
                renderItem={({item}) => {
                    return <TouchableOpacity

                    onPress={() => {
                        setPlan(plan.map(el => el.id == item.id ? {...el, isSelected:true} : {...el, isSelected:false}))
                    }}
                    style={{
                        height: 250,
                        width:196,
                        borderWidth: 5,
                        borderRadius: 35,
                        marginBottom: 32,
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal:24,
                        borderColor: item.isSelected ? Colors.primary : 'rgb(235,235,235)',
                    }}
                >
                    <Image 
                        style={{
                            height:'100%',
                            width:'100%',
                            borderRadius:30,
                        }}
                        source={item.image}
                    />
                    <View style={[ styles.indicator, { 
                    backgroundColor: item.isSelected ? Colors.primary : Colors.white,
                    borderColor:item.isSelected ? Colors.primary : 'rgb(235,235,235)',
                }]}>
                    <Ionicons 
                        name="ios-checkmark" 
                        size={20} 
                        color={'white'}
                    />
                </View>
                <Text style={{
                    position:'absolute',
                    top:180,
                    fontFamily: Fonts.semiBold,
                    fontSize: 24,
                    color: Colors.white,
                }}>
                    {item.name}
                </Text>

               
                </TouchableOpacity>

                
                }}
            />

            <View style={{
                width:'100%',
                marginTop:60,
                backgroundColor:'white',
                padding:20
            }}>
                <Text style={{
                fontSize:20,
                fontFamily:Fonts.bold,
                color:Colors.black
            }}>{`Week's favourites:`}</Text>
            <Text style={{
                marginTop:6,
                fontSize:12,
                fontFamily:Fonts.regular,
                color:Colors.black
            }}>{'Here is a sneak peak of our popular weekly menu:'}</Text>

                <FlatList 
                    contentContainerStyle={{marginTop:16,}}
                    horizontal
                    data={days}
                    renderItem={({item}) => {
                        return <View style={{
                            borderWidth:1,
                            borderColor:'gray',
                            height:50,
                            width:50,
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius:5,
                            marginRight:10,
                        }}>
                            <Text style={{
                                fontSize:12,
                                color:'gray',
                                fontFamily:Fonts.regular,
                            }}>{item.name}</Text>
                        </View>
                    }}
                />

<FlatList 
                contentContainerStyle={{marginTop:20,}}
                horizontal
                data={[{id:"1",name:"Lunch",image:ImagePath.onboarding},{id:"2",name:"Dinner",image:ImagePath.onboarding}]}
                renderItem={({item}) => {
                    return <View>
                        <Text style={{
                fontFamily:Fonts.bold,
                marginBottom:5,
                color:Colors.black
            }}>{item.name}</Text>
                        <TouchableOpacity

style={{
    height: 111,
    width:211,
    borderWidth: 1,
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:10,
    borderColor:'rgb(235,235,235)'
}}
>
<Image 
    style={{
        height:'100%',
        width:'100%',
        borderRadius:10,
    }}
    source={item.image}
/>

</TouchableOpacity>
                        </View>

                
                }}
            />


            </View>

            <Text style={{textAlign:'center', fontSize:12, marginHorizontal:30,marginTop:20, color:Colors.black, fontFamily:Fonts.medium,alignSelf:'center'}}>{`Your recommended calorie requirement is`}</Text>
            <Text style={{textAlign:'center', fontSize:14, marginHorizontal:30,marginVertical:10, marginBottom:20, color:Colors.primary, fontFamily:Fonts.bold,alignSelf:'center'}}>{`1000 Kcal`}</Text>

            <View style={{
                backgroundColor:'white',
                paddingTop:20,
                marginHorizontal:10,
                borderRadius:10,
                ...commonStyles.shadow,

            }}>
            {
                    activity.map((item,index) => <TouchableOpacity 
                    
                    key={index}
                    style={[styles.itemContainer,{
                        borderColor: item.isSelected == item.id ? Colors.primary : 'rgb(231,231,231)',
                    }]}>
                        <Text style={[styles.itemName,{
                            color: item.isSelected == item.id ? Colors.primary : '#707070',
                        }]}>
                            {item.name}
                        </Text>{
                            item.isSelected == item.id && <View>
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
                <ButtonLarge 
                    onPress={() => {
                        navigation.navigate('Subscription')
                    }}
                    style={{
                        marginVertical:40
                    }}
                    title={'NEXT'}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F7F7F7',
    },
    indicator:{
        width: 44,
        height: 44,
        borderWidth: 1,
        borderRadius: 22,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor:Colors.white,
        top:220,
        alignItems:'center',
        justifyContent:'center',
    },
    itemContainer:{
        height:42,
        marginHorizontal:11,
        borderRadius:6,
        borderWidth:1,
        marginBottom:20,
        backgroundColor:'white',
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
})