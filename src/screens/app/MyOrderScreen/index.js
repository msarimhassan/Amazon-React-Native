import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'native-base';
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Icons} from '../../../common';
import {OrderProductCard} from '../../../components/Cards';

const MyOrderScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backbtn}
        onPress={() => navigation.goBack()}>
        <Icons.AntDesign
          name="arrowleft"
          color={Colors.amazonColor}
          size={30}
        />
      </TouchableOpacity>
      <View style={styles.priceContainer}>
        <Text style={styles.label}>Total Price</Text>
        <Text style={styles.label}>Rs1000</Text>
      </View>
      <View style={styles.cardContainer}>
        {Array(3)
          .fill(0)
          .map(index => {
            return <OrderProductCard key={index} />;
          })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  cardContainer: {
    paddingHorizontal: 20,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.font,
  },
  backbtn: {
    marginTop: 10,
    marginLeft:10
  }
});

export default MyOrderScreen;
