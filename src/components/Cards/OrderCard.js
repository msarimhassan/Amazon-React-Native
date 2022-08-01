import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, Routes } from '../../common';
import { useNavigation } from '@react-navigation/native';

const OrderCard = ({orderId,status,id}) => {
  const navigation = useNavigation();
  return <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(Routes.myOrder, {
      orderId:id
    })}>
      <Text style={styles.orderNo}>Order#{orderId}</Text>
        <View style={status==='pending'?styles.pending:styles.delivered}>
        <Text style={styles.status}>{status}</Text>
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
    backgroundColor: '#01D648',
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