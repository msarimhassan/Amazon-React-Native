import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import CartCard from '../../../components/Cards/CartCard';
import {useNavigation} from '@react-navigation/native';
import {Colors, Routes} from '../../../common';
import {useSelector, useDispatch} from 'react-redux';
import {Calculate} from '../../../redux/CartSlice';
import {WarningMessage} from '../../../components';
import EmptyCart from '../../../../assets/images/Emptycart.png';
const CartScreen = () => {
  const products = useSelector(state => state.cart.cartProducts);
  useEffect(() => {
    dispatch(Calculate(products));
  }, [products]);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const Proceed = () => {
    if (products.length != 0) {
      return navigation.navigate(Routes.Details);
    }
    WarningMessage('No items in the cart');
  };
  return (
    <>
      {products.length != 0 ? (
        <ScrollView style={styles.container}>
          <View style={styles.subtotal}>
            <Text style={styles.price}>SubTotal</Text>
            <Text style={styles.price}>Rs{totalPrice}</Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => Proceed()}>
            <Text style={styles.btntxt}>Proceed to Checkout</Text>
          </TouchableOpacity>
          {products.map((product, index) => {
            return <CartCard key={index} product={product} />;
          })}
        </ScrollView>
      ) : (
        <View style={styles.EmptyContainer}>
          <Image style={styles.EmptyCart} source={EmptyCart} />
        </View>
      )}
    </>
  );
};

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
    marginTop: 10,
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#f5bb5c',
    paddingVertical: 10,
    marginTop: 10,
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
  EmptyCart: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    backgroundColor: Colors.white,
    height: '100%',
    width:'100%'
  },
  EmptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
  },
});

export default CartScreen;
