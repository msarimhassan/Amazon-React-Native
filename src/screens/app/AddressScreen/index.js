import React from 'react';
import {View, StyleSheet,ScrollView} from 'react-native';
import {Colors,Routes} from '../../../common';
import {Button} from '../../../components';
import { AddressCard } from '../../../components/Cards';
import { useNavigation } from '@react-navigation/native';
const AddressScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Button text="Add Address" style={styles.btn} onPress={()=>navigation.navigate(Routes.addressForm) } />
          <View style={styles.addressContainer}>
        {Array(5).fill(0).map(() => {
          return <AddressCard />;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.white,
  },
  btn: {
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    },
    addressContainer: {
        display: 'flex',
      alignItems: 'center',
        marginBottom:10,
  }
});

export default AddressScreen;
