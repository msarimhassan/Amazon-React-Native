import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';

const Button = ({text,style,onPress}) => {
  return <TouchableOpacity style={{ ...styles.container, ...style }} onPress={onPress}>
        <Text style={styles.btntext}>{text}</Text>
</TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: '#f5bb5c',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
   
  },
  btntext: {
    fontSize: 20,
    color: '#000',
  },
});

export default Button;