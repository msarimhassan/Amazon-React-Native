import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-native-uuid';

import Bill from './Bill';
import {OrderProductCard} from '../../../components/Cards';
import {Colors, Icons, Routes} from '../../../common';
import Button from '../../../components/Button';
import { config, Network, Urls } from '../../../config';
import {EmptyCart} from '../../../redux/CartSlice';

const OrderDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const { paymentMode, address, cardId } = route.params;
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.cartProducts);
   
  const PlaceOrder =async () => {
    let orderId = uuid.v4();
    orderId = orderId.substring(0, 7);
      const newarray = products.map(product => {
        return {
          _id: product._id,
          quantity: product.quantity,
        };
      });
      const obj = {
        paymentMethod:paymentMode.mode,
        products: newarray,
        ...(cardId && {cardId: cardId}),
        orderId,
    };
    const response = await Network.post(Urls.AddOrder('en-US'), obj, (await config()).headers);
    if(!response.ok)
    {
     return console.log(response.data.error);
    }
    dispatch(EmptyCart());
    navigation.navigate(Routes.confirmOrder);
    
  }

  return (
    <ScrollView style={styles.box} showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        style={styles.backbtn}
        onPress={() => navigation.goBack()}>
        <Icons.AntDesign
          name="arrowleft"
          color={Colors.amazonColor}
          size={30}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <View>
          {products.map((product) => {
            return (
              <OrderProductCard
                key={product._id}
                image={product.imageUrl}
                price={product.sellingPrice}
                quantity={product.quantity}
                name={product.name}
              />
            );
          })}
        </View>
        <Bill paymentMode={paymentMode} address={address} cardId={cardId} />
        <Button text="Place Order" style={styles.btn} onPress={()=>PlaceOrder()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  box: {
    flexGrow: 1,
    backgroundColor: Colors.white,
  },
  btn: {
    marginHorizontal: 20,
    borderRadius: 20,
  },
  backbtn: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default OrderDetailScreen;
