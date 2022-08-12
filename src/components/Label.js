import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Label = ({ text, type ,...restProps}) => {
  // console.log(restProps)
  return (
    <View style={styles.root} {...restProps}>
      <Text style={styles.text}>{text} {type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#028EB9',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default memo(Label);