import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Headphones from '../../../assets/images/Headphones.png';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../common';

const ProductCard = ({product}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(Routes.SingleProduct)}>
      <Image source={{uri: product?.imageUrl}} style={styles.image} />
      <View style={styles.productDetailContainer}>
        <Text style={styles.productName}>{product?.name}</Text>
        <Text style={{fontSize: 17, marginTop: 5}}>
          Price:
          <Text style={styles.productPrice}>Rs{product?.sellingPrice}</Text>
        </Text>
        <TouchableOpacity style={styles.cartBtn}>
          <Text style={styles.btntext}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 380,
    marginTop: 15,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    borderRadius: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  productName: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 30,
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
  },
  cartBtn: {
    display: 'flex',
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#f5bb5c',
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    marginTop: 30,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  btntext: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  productDetailContainer: {
    width:200,
  }
});

export default ProductCard;
