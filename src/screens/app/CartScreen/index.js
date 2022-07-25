import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import CartCard from '../../../components/Cards/CartCard';

const CartScreen = () => {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.subtotal}>
          <Text style={styles.price}>SubTotal</Text>
          <Text style={styles.price}>Rs1000</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntxt}>Proceed to Checkout</Text>
        </TouchableOpacity>
        {Array(10)
          .fill(0)
          .map((cartItem, index) => {
            return <CartCard key={index} />;
          })}
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  subtotal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:10,
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#f5bb5c',
    paddingVertical: 10,
    marginTop:10,
    width: '100%',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  btntxt: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default CartScreen;