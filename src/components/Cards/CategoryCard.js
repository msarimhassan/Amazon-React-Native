import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Colors, Routes} from '../../common';
import {useNavigation} from '@react-navigation/native';
const CategoryCard = ({id, title, image}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(Routes.Products, {categoryId: id})}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.cardtitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: 170,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: Colors.white,
    alignSelf:'center'
  },
  image: {
    resizeMode: 'cover',
    width: 100,
    height: 100,
  },
  cardtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    fontFamily: 'Poppins-ExtraBold',
  },
});

export default CategoryCard;
