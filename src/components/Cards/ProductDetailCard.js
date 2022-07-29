import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Card = ({product}) => {
  
  return (
    <View style={styles.container}>
      <Image source={{uri: product?.imageUrl}} style={styles.image} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product?.name}</Text>
        <View style={styles.info}>
          <Text style={{fontSize: 16}}>
            Price:
            <Text style={styles.price}>Rs1000</Text>
          </Text>
          <Text style={styles.status}>In Stock</Text>
        </View>
        <Text style={styles.details}>
          {product?.description}
        </Text>
      </View>
      <TouchableOpacity style={styles.cartBtn}>
        <Text style={styles.btnText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingHorizontal: 5,
    height: '100%',
    paddingBottom: 10,
  },
  image: {
    resizeMode: 'contain',
    width: 250,
    height: 250,
  },
  productInfo: {
    width: '100%',
    padding: 20,
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  cartBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#f5bb5c',
    paddingVertical: 10,
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
  btnText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  status: {
    backgroundColor: 'green',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 15,
    borderRadius: 20,
    fontWeight: 'bold',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000',
  },
  price: {
    fontSize: 20,
    color: '#000',
  },
  details: {
    marginTop: 10,
    fontSize: 17,
    color: '#000',
  },
});

export default Card;
