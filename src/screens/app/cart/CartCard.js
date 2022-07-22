import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Headphones from '../../../images/Headphones.png';
import {Icons} from '../../../common';
const CartCard = () => {
  const [counter, setCounetr] = useState(1);
  return (
    <View style={styles.container}>
      <Image source={Headphones} style={styles.image} />
      <View>
        <Text style={styles.productName}>Headphones</Text>
        <Text style={{fontSize: 17, marginTop: 5}}>
          Price:
          <Text style={styles.productPrice}>Rs1000</Text>
        </Text>
        <View style={styles.quantity}>
          <TouchableWithoutFeedback
            style={styles.counter}
            onPress={() => setCounetr(counter - 1)}>
            <Icons.AntDesign name="minussquareo" size={25} color="#f5bb5c" />
          </TouchableWithoutFeedback>
          <Text style={{fontSize: 25}}>{counter}</Text>
          <TouchableWithoutFeedback onPress={() => setCounetr(counter + 1)}>
            <Icons.AntDesign name="plussquareo" size={25} color="#f5bb5c" />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
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
    marginBottom: 10,
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
});

export default CartCard;
