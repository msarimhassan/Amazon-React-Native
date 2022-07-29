import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {Colors} from '../../common';
import {useDispatch} from 'react-redux';
import {EmptyCart, AddToCart} from '../../redux/CartSlice';

const EmptyCartModal = ({isVisible, setisVisible, product}) => {
  const dispatch = useDispatch();

  const HandleCart = () => {
    dispatch(EmptyCart());
    dispatch(AddToCart(product));
    setisVisible(!isVisible);
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.warningContainer}>
          <Text style={styles.warning}>WARNING</Text>
          <Text style={styles.logout}>
            Do you want to empty the cart and add this product?
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.NotLogout}
            onPress={() => {
              HandleCart();
            }}>
            <Text style={styles.btntext}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Logoutbtn}
            onPress={() => setisVisible(!isVisible)}>
            <Text style={styles.btntext}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  centeredView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    height: 100,
  },
  NotLogout: {
    borderWidth: 1,
    borderColor: Colors.amazonColor,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: Colors.amazonColor,
    paddingVertical: 20,
    paddingHorizontal: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  warning: {
    fontSize: 30,
    color: Colors.warning,
  },
  logout: {
    color: Colors.font,
    fontSize: 20,
  },
  Logoutbtn: {
    borderWidth: 1,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderColor: Colors.warning,
    backgroundColor: Colors.warning,
    paddingVertical: 20,
    paddingHorizontal: 50,
    margin: 10,
  },

  btntext: {
    color: Colors.white,
    fontSize: 20,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
  },
  warningContainer: {
    paddingHorizontal: 30,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default EmptyCartModal;
