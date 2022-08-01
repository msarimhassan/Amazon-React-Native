import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import ProductCard from '../../../components/Cards/ProductCard';
import {Icons, Colors} from '../../../common';
import {useNavigation} from '@react-navigation/native';
import {Network, Urls, config} from '../../../config';
import AmazonLoader from '../../../../assets/animations';
import NoData from '../../../../assets/images/NoData.png';

const ProductsScreen = ({route}) => {
  const {categoryId} = route.params;
  const [pageNo, setpageNo] = useState(1);
  const [totalPages, settotalPages] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    getProducts(pageNo);
  }, []);

  const getProducts = async pageNo => {
    const obj = {
      latitude: null,
      longitude: null,
    };
    const response = await Network.post(
      Urls.getProducts('en-US') +
        `${categoryId}?page=${pageNo}&limit=${totalPages}`,
      obj,
      (
        await config()
      ).headers,
    );
    setProducts(response.data.products);
    settotalPages(response.data.totalpages);
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <AmazonLoader />
      ) : products.length != 0 ? (
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

          {products?.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </ScrollView>
      ) : (
        <View style={styles.Nodatacontainer}>
          <Image source={NoData} style={styles.NoData} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  backbtn: {
    marginLeft: 20,
    marginTop: 10,
  },
  Nodatacontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: Colors.white,
  },
  NoData: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
});

export default ProductsScreen;
