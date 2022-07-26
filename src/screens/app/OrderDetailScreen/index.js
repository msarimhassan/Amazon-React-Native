import React from 'react';
import {View, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import Bill from './Bill';
import {OrderProductCard} from '../../../components/Cards';
import {Colors,Icons} from '../../../common';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

const OrderDetailScreen = () => {
  const navigation = useNavigation();
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
  backbtn: {
    marginTop: 10,
    marginLeft:10,
  }
});

export default OrderDetailScreen;
