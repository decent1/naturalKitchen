import React, { memo } from 'react';
import { View, StyleSheet , Text} from 'react-native';
import { Colors } from '../utils/Colors';

const THUMB_RADIUS = 19;

const Thumb = ({ text, type , ...restProps }) => {
  console.log({...restProps})
  return (
    <View>
      {/* <View style={{
        height:40,
        width:50,
        backgroundColor: '#028EB9',
    borderRadius: 10,
        position:'absolute',
        
        top:-50
      }} >
      <Text style={styles.text}>{text} {type}</Text>
      <View style={{
         width: 8,
         height: 20,
         borderLeftColor: 'transparent',
         borderRightColor: 'transparent',
         borderTopColor: '#028EB9',
         borderLeftWidth: 4,
         borderRightWidth: 4,
         borderTopWidth: 8,
         alignSelf:'center',
         position:'absolute',
         bottom:-20
      }}>

      </View>
      </View> */}

      <View style={styles.root}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 7,
    borderColor: Colors.checked,
    backgroundColor: Colors.primary,
  },
  text:{
    fontSize: 16,
    color: '#fff'
  }
});

export default memo(Thumb);