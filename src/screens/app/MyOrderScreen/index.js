import React,{useState,useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'native-base';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Icons} from '../../../common';
import {OrderProductCard} from '../../../components/Cards';
import {config, Network, Urls} from '../../../config';

const MyOrderScreen = ({route}) => {
  const navigation = useNavigation();
  const {orderId} = route.params;
  const [orderedProducts, setOrderedProducts] = useState([]);

  useEffect(() => {
    GetOrderDetails();
  },[])
  const GetOrderDetails = async () => {
    const response = await Network.get(
      Urls.getOrderDetails+orderId,
      (
        await config()
      ).headers,
    );
    setOrderedProducts(response.data.orderedProduct);
  };
  return (
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
      <View style={styles.cardContainer}>
        {orderedProducts?.map(order => {
          return <OrderProductCard key={order._id} image={order.productId.imageUrl} name={order.name} price={order.unitPrice} quantity={order.quantity} />;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  cardContainer: {
    paddingHorizontal: 20,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.font,
  },
  backbtn: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default MyOrderScreen;
