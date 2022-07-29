import React,{useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Colors, Routes} from '../../common';
import {AddToCart} from '../../redux/CartSlice';
import DisableButton from '../../components/DisableButton';
import {EmptyCartModal} from '../Modals';

const ProductCard = ({product}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.cartProducts);
  const [isVisible, setisVisible] = useState(false);

  const NewProduct = product => {
    if (products.length == 0) {
      return dispatch(AddToCart(product));
    }
    const result = products.some(item => { 
           return  item.creator.id ==product.creator.id
    })                              
    if (result) {
      return dispatch(AddToCart(product));
    } else {
      setisVisible(true);
    }
  };
  return (
    <>
     <EmptyCartModal isVisible={isVisible} setisVisible={setisVisible} product={product} />
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(Routes.SingleProduct, {productId: product?._id})
      }>
      <Image source={{uri: product?.imageUrl}} style={styles.image} />
      <View style={styles.productDetailContainer}>
        <Text style={styles.productName}>{product?.name}</Text>
        <Text style={styles.productPrice}>Rs{product?.sellingPrice}</Text>
        {products.some(item => item._id == product._id) ? (
          <DisableButton style={styles.disablebtn} text="Added" />
        ) : (
          <TouchableOpacity
            style={styles.cartBtn}
            onPress={() => NewProduct(product)}>
            <Text style={styles.btntext}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
      </TouchableOpacity>
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginVertical: '5%',
    alignSelf: 'center',
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
    backgroundColor: Colors.white,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
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
    width: 150,
  },
  disablebtn: {
    marginTop: 10,
    width: 120,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 30,
  },
});

export default ProductCard;
