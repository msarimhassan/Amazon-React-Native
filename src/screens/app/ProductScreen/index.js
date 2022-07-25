import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import ProductCard from '../../../components/Cards/ProductCard';

const ProductsScreen = ({ route }) => {
  const { categoryId } = route.params;
  console.log(categoryId);
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        {Array(5)
          .fill(0)
          .map((product, index) => {
            return <ProductCard key={index} />;
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
});

export default ProductsScreen;
