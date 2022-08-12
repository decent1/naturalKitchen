import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../utils/Colors';

const Rail = () => {
  return (
    <View style={styles.root}/>
  );
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.white,
    borderWidth:3,
    borderColor:'#54198A'
  },
});