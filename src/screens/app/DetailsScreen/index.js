import React,{useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Colors, Routes,Icons} from '../../../common';
import { SelectableCard, PaymentMethodCard } from '../../../components/Cards';
import { Button } from '../../../components';
import { useNavigation } from '@react-navigation/native';

const dummyData = [
  {
    id: 0,
    location: 'Lahore',
  },
  {
    id: 1,
    location: 'Islamabad',
  },
  {
    id: 2,
    location: 'Karachi',
  }
];

const paymentMethods = [
  {
    id: 0,
    method:'Cash on Delivery',
  }, {
    id: 1,
    method:'Card'
  }
]

const CardDetails = [
  {
    id: 0,
    cardno: '42424242424',
  },
  {
    id: 1,
    cardno: '42424242424',
  },
];

const DetailsScreen = () => {
  const [selectedAddress, setSelectedAddress] = useState({});
  const [paymentMethod, setpaymentMethod] = useState({});
  const [selectedCard, setselectedCard] = useState({});
  const navigation = useNavigation();
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
          <View style={styles.CardHandler}>
            {dummyData.map((address, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedAddress(address)}>
                  <SelectableCard
                    info={address.location}
                    selected={selectedAddress.id === address.id}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
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
          <View style={styles.carddetailbox}>
            {CardDetails.map((card, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setselectedCard(card)}>
                  <SelectableCard
                    info={card.cardno}
                    selected={selectedCard.id === card.id}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
        <Button
          style={styles.nextBtn}
          text="Next"
          onPress={() => navigation.navigate(Routes.Orderdetails)}
        />
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
    backgroundColor:Colors.white
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
    marginLeft:10,
  }
});

export default DetailsScreen;
