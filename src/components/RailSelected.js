import React, { memo } from 'react';
import {StyleSheet, View} from 'react-native';
import { Colors } from '../utils/Colors';

const RailSelected = () => {
  return (
    <View style={styles.root}/>
  );
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 14,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    marginLeft:2
  },
});