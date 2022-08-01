import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Colors, Routes, Icons} from '../../../common';
import {SelectableCard, PaymentMethodCard} from '../../../components/Cards';
import {Button, WarningMessage} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {Network, Urls, config} from '../../../config';

const paymentMethods = [
  {
    id: 0,
    method: 'Cash on Delivery',
  },
  {
    id: 1,
    method: 'Card',
  },
];

const DetailsScreen = () => {
  const [selectedAddress, setSelectedAddress] = useState({});
  const [paymentMethod, setpaymentMethod] = useState(paymentMethods[0]);
  const [selectedCard, setselectedCard] = useState({});
  const [addressList, setAddressList] = useState([]);
  const [cardList, setcardList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    GetAddress();
    Getcards();
  }, []);
  const GetAddress = async () => {
    const response = await Network.get(
      Urls.getAddressList,
      (
        await config()
      ).headers,
      {},
    );
    setAddressList(response.data.addresses);
    setLoading(false);
  };
  const Getcards = async () => {
    const response = await Network.get(Urls.getCards, (await config()).headers);
    setcardList(response.data.cards);
    setLoading2(false);
  };

  const Next = () => {
    if (Object.entries(selectedAddress).length === 0) {
      return WarningMessage('Please Select the Address');
    }
    navigation.navigate(Routes.Orderdetails, {
      paymentMode: paymentMethod,
      address: selectedAddress,
      cardId: selectedCard && selectedCard._id,
    });
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: Colors.white}}>
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
        <View style={styles.detailbox}>
          <Text style={styles.title}>Select Address:</Text>
          {loading ? (
            <Text style={styles.loadingtext}>Loading Addresses</Text>
          ) : (
            <View style={styles.CardHandler}>
              {addressList?.map((address, index) => {
                return (
                  <TouchableOpacity
                    key={address._id}
                    onPress={() => setSelectedAddress(address)}>
                    <SelectableCard
                      key={index}
                      info={
                        address.country +
                        ',' +
                        address.city +
                        ',' +
                        address.area
                      }
                      selected={selectedAddress?._id === address?._id}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>

        {/* payment method */}
        <View style={styles.detailbox}>
          <Text style={styles.title}>Select Payment Methods:</Text>
          <View style={styles.paymentMethod}>
            {paymentMethods.map((payment, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setpaymentMethod(payment);
                    setselectedCard({});
                  }}>
                  <PaymentMethodCard
                    payment={payment}
                    selected={payment.id === paymentMethod.id}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Card Details */}
        {paymentMethod.method == 'Card' ? (
          <>
            {loading2 ? (
              <Text style={styles.loadingtext}>Loading Cards</Text>
            ) : (
              <View style={styles.carddetailbox}>
                {cardList?.map((card, index) => {
                  return (
                    <TouchableOpacity
                      key={card._id}
                      onPress={() => setselectedCard(card)}>
                      <SelectableCard
                        info={card.cardNumber}
                        selected={selectedCard._id === card._id}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </>
        ) : null}
        <Button style={styles.nextBtn} text="Next" onPress={() => Next()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: Colors.amazonColor,
  },
  CardHandler: {
    display: 'flex',
    flexDirection: 'column',
  },
  detailbox: {
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
  },
  paymentMethod: {
    display: 'flex',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: Colors.white,
  },
  carddetailbox: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  nextBtn: {
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  backbtn: {
    marginTop: 10,
    marginLeft: 10,
  },
  loadingtext: {
    color: Colors.font,
    fontSize: 16,
  },
});

export default DetailsScreen;
