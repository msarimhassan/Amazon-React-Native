import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Headphones from '../../../assets/images/Headphones.png';
import { Colors } from '../../common';

const OrderProductCard = ({product}) => {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri:product.imageUrl}} style={styles.image} />
          <Text style={styles.title}>{product.name}</Text>
        </View>
        <View style={styles.Details}>
          <Text style={styles.label}>Quantity</Text>
          <Text style={styles.value}>{product.quantity}</Text>
        </View>
        <View style={styles.Details}>
          <Text style={styles.label}>Price</Text>
          <Text style={styles.value}>{product.sellingPrice * product.quantity}</Text>
        </View>
      </View>
    );
}

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
    marginTop:10
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: Colors.font,
    fontSize: 20,
  },
  Details: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  label: {
    color: Colors.font,
    fontSize: 18,
  },
  value: {
    color: Colors.font,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default OrderProductCard;