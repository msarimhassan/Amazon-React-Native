import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Divider} from 'native-base';
import {Colors} from '../../../common';
import {useSelector} from 'react-redux';

const Bill = ({paymentMode, address, cardId}) => {
  const totalPrice = useSelector(state => state.cart.totalPrice);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      <Divider />
      <View style={styles.orderDetails}>
        <Text style={styles.label}>Cart Subtotal</Text>
        <Text style={styles.value}>{totalPrice}</Text>
      </View>
      <View style={styles.orderDetails}>
        <Text style={styles.label}>Delivery Charges</Text>
        <Text style={styles.value}>Rs.100</Text>
      </View>
      <View style={styles.orderDetails}>
        <Text style={styles.title}>Total Order</Text>
        <Text style={styles.value}>Rs{totalPrice + 100}</Text>
      </View>
      <Divider />
      <View style={styles.orderDetails}>
        <Text style={styles.label}>Payment Method</Text>
        <Text style={styles.value}>{paymentMode.method}</Text>
      </View>
      <View style={styles.orderDetails}>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.value}>{address.city}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop: 10,
    marginBottom: 10,
  },
  orderDetails: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.font,
  },
  label: {
    fontSize: 16,
    color: Colors.font,
  },
  value: {
    fontSize: 16,
    color: Colors.font,
    fontWeight: 'bold',
  },
});

export default Bill;
