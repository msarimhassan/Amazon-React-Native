import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Colors, Icons} from '../../common';
import MasterCard from '../../../assets/images/mastercard.png';

const CreditCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardtitle}>
        <Icons.FontAwesome name="bank" color={Colors.white} size={25} />
        <Text style={styles.title}>Sarim Hassan</Text>
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.cardNo}>42424242424242</Text>
        <Text style={styles.date}>12/03</Text>
        <Image source={MasterCard} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 180,
    borderWidth: 1,
    backgroundColor: '#515151',
    borderRadius: 10,
    borderColor: '#515151',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardtitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardDetails: {
    marginLeft: 50,
    marginTop: 20,
  },
  cardNo: {
    color: Colors.white,
    fontSize: 20,
  },
  date: {
    color: Colors.white,
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default CreditCard;
