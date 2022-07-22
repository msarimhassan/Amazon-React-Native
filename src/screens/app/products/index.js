import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ProductCard from './ProductCard';

const ProductsScreen = () => {
    return <View style={{flex:1}}>
        <ScrollView contentContainerStyle={styles.container}>
            {Array(5).fill(0).map((product,index)=>{
                return <ProductCard key={index} />
            })}
       </ScrollView>
</View>;
}

const styles = StyleSheet.create({
  container: {
   paddingTop:10,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});

export default ProductsScreen;