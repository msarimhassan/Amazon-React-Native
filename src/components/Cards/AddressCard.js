
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icons,Colors } from '../../common';

const AddressCard = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Icons.AntDesign
          name="delete"
          color={Colors.warning}
          size={25}
        />
      </TouchableOpacity>
      <View style={styles.heading}>
        <Icons.AntDesign
          name="enviromento"
          color={Colors.amazonColor}
          size={25}
        />
        <Text style={styles.country}>Lahore,Pakistan,Punjab</Text>
      </View>

      <View style={styles.addressDetails}>
        <Text style={styles.detail}>29-b</Text>
        <Text style={styles.detail}>18-b</Text>
        <Text style={styles.detail}>ChohanRoad,Islampura</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 120,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: Colors.white,
    },
    heading: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop:10
    },
    country: {
        color: Colors.amazonColor,
        fontSize: 20,
        fontWeight:'bold'
    },
    detail: {
        color: Colors.font,
        fontSize:16,
    }, addressDetails: {
        paddingHorizontal: 40,
        paddingTop:10,
    },
    btn: {
        position: 'absolute',
        right: 10,
        top:10,
    }
});

export default AddressCard;
