import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../common';

const OrderCard = () => {
    return <TouchableOpacity style={styles.container}>
        <Text style={styles.orderNo}>Order no 1</Text>
        <View style={styles.pending}>
            <Text style={styles.status}>pending</Text>
            </View>
</TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.amazonColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  orderNo: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  pending: {
    backgroundColor: Colors.warning,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  delivered: {
    backgroundColor: Colors.warning,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  status: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OrderCard;