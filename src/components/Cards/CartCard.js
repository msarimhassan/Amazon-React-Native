import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Icons,Colors } from '../../common';
import { useDispatch } from 'react-redux';
import { Increment,Decrement,DeleteProduct } from '../../redux/CartSlice';
const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.deletebtn} onPress={()=>dispatch(DeleteProduct(product))}>
        <Icons.AntDesign name="delete" color={Colors.warning} size={25} />
      </TouchableOpacity>
      <Image source={{uri: product?.imageUrl}} style={styles.image} />
      <View style={styles.detailedContainer}>
        <Text style={styles.productName}>{product?.name}</Text>
          <Text style={styles.productPrice}>Rs{product?.sellingPrice}</Text>
        <View style={styles.quantity}>
          <TouchableWithoutFeedback
            style={styles.counter}
            onPress={() => dispatch(Decrement(product))}>
            <Icons.AntDesign name="minussquareo" size={25} color="#f5bb5c" />
          </TouchableWithoutFeedback>
          <Text style={styles.counter}>{product?.quantity}</Text>
          <TouchableWithoutFeedback
            onPress={() => dispatch(Increment(product))}>
            <Icons.AntDesign name="plussquareo" size={25} color="#f5bb5c" />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf:'center',
    marginTop: 15,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
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
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor:Colors.white
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop:10,
  },
  productName: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 22,
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
  },
  quantity: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  btntext: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  detailedContainer: {
    width: 150,
    marginTop:10
  },
  deletebtn: {
    position: 'absolute',
    top: 10,
    right:10,
  },
  counter: {
    fontSize: 20,
    color:Colors.font
  }
});

export default CartCard;
