import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import ProductCard from '../../../components/Cards/ProductCard';
import {Icons, Colors} from '../../../common';
import {useNavigation} from '@react-navigation/native';
import {Network, Urls, config} from '../../../config';
import AmazonLoader from '../../../../assets/animations';

const ProductsScreen = ({ route }) => {
  const { categoryId } = route.params;
  const [pageNo, setpageNo] = useState(1);
  const [totalPages, settotalPages] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    getProducts(pageNo);
  }, []);

  const getProducts = async pageNo => {
    const response = await Network.get(
      Urls.getProducts('en-US') +
      `${categoryId}?page=${pageNo}&limit=${totalPages}`,
      (
        await config()
      ).headers,
    );
    setProducts(response.data.products);
    settotalPages(response.data.totalpages);
    console.log({ categoryId });
    setLoading(false);
  };
  return (
  <>
    { loading ? <AmazonLoader/>:
  <ScrollView style={styles.parent}>
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
      {products?.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </View>
  </ScrollView>
      }
      </>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  parent: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  backbtn: {
    marginLeft: 20,
    marginTop: 10,
  },
});

export default ProductsScreen;
