import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import ProductCard from '../../../components/Cards/ProductCard';
import { Icons, Colors } from '../../../common';
import { useNavigation } from '@react-navigation/native';

const ProductsScreen = ({ route }) => {
  const { categoryId } = route.params;
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.parent}>
      <TouchableOpacity style={styles.backbtn} onPress={()=>navigation.goBack()}>
        <Icons.AntDesign
          name="arrowleft"
          color={Colors.amazonColor}
          size={30}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        {Array(5)
          .fill(0)
          .map((product, index) => {
            return <ProductCard key={index} />;
          })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginBottom:20
  
  },
  parent: {
    backgroundColor: Colors.white,
    height:'100%'
  },
  backbtn: {
    marginLeft: 20,
    marginTop:10
  }
});

export default ProductsScreen;
