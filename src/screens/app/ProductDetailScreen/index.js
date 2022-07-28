import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Card from '../../../components/Cards/ProductDetailCard';
import {Colors, Icons} from '../../../common';
import {useNavigation} from '@react-navigation/native';
import AmazonLoader from '../../../../assets/animations';
import {Network, Urls, config} from '../../../config';

const ProductdetailScreen = ({route}) => {
  const navigation = useNavigation();
  const {productId} = route.params;
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetSingleProduct();
  }, []);

  const GetSingleProduct = async () => {
    const response = await Network.get(
      Urls.getSingleProduct('en-US') + productId,
      (
        await config()
      ).headers,
    );
    setProduct(response.data.product);
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <AmazonLoader />
      ) : (
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
          <Card product={product} />
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },
  backbtn: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default ProductdetailScreen;
