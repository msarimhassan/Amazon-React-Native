import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Bill from './Bill';
import {OrderProductCard} from '../../../components/Cards';
import {Colors} from '../../../common';
import Button from '../../../components/Button';

const OrderDetailScreen = () => {
  return (
    <ScrollView style={styles.box} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          {Array(2)
            .fill(0)
            .map((product, index) => {
              return <OrderProductCard key={index} />;
            })}
        </View>
        <Bill />
        <Button text="Place Order" style={styles.btn} />
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
});

export default OrderDetailScreen;
