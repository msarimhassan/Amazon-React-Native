import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Card from '../../../components/Cards/ProductDetailCard';
import {Colors, Icons, Routes} from '../../../common';
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
  const CreateChat = async () => {
    const obj = {
      productId: productId,
    };
    const response = await Network.post(
      Urls.createChat('en-US'),
      obj,
      (
        await config()
      ).headers,
    );
    navigation.navigate(Routes.createChat, {
      conversationId: response.data.conversation,
      shopId: product.creator._id
    });
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
          <TouchableOpacity style={styles.chatbtn} onPress={() => CreateChat()}>
            <Icons.AntDesign
              name="message1"
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
  chatbtn: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default ProductdetailScreen;
