import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../../common';

const PaymentMethodCard = ({selected, payment}) => {
  return (
    <View style={styles.container}>
      <View style={styles.radio}>
       {selected&&<View style={styles.inside}></View>}
      </View>
      <Text style={styles.paymentMethod}>{payment.method}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    marginLeft: 20
    
  },
  radio: {
    borderWidth: 2,
    width: 20,
    height: 20,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
      alignItems: 'center',
    borderColor:Colors.amazonColor
  },
  inside: {
    backgroundColor: Colors.amazonColor,
    height: 10,
    width: 10,
    borderRadius: 20,
    },
    paymentMethod: {
     fontSize: 20,
    color: Colors.font,
    marginLeft:5
        
  }
});

export default PaymentMethodCard;
