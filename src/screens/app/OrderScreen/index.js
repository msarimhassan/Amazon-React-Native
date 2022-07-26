import { useNavigation } from '@react-navigation/native';

import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity,ScrollView} from 'react-native';
import { Colors,Icons } from '../../../common';
import {OrderCard,OrderHistoryCard} from '../../../components/Cards';

const OrderScreen = () => {
  const [isSelected, setisSelected] = useState(true);
  const navigation = useNavigation();
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
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={isSelected ? styles.selectedContainer : null}
          onPress={() => setisSelected(!isSelected)}>
          <Text style={isSelected ? styles.selectedOption : styles.option}>
            My Orders
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isSelected ? null : styles.selectedContainer}
          onPress={() => setisSelected(!isSelected)}>
          <Text style={isSelected ? styles.option : styles.selectedOption}>
            Order History
          </Text>
        </TouchableOpacity>
      </View>
      {/* Content */}
      <View style={styles.contentContainer}>
        {isSelected ? (
          <>
            {Array(3)
              .fill(0)
              .map(index => {
                return <OrderCard key={index} />;
              })}
          </>
        ) : (
          <OrderHistoryCard />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  optionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    marginTop:30,
  },
  option: {
    color: Colors.font,
    fontWeight: 'bold',
    fontSize: 20,
  },
  selectedOption: {
    color: Colors.amazonColor,
    fontWeight: 'bold',
    fontSize: 20,
  },
  selectedContainer: {
    borderBottomWidth: 3,
    borderColor: Colors.amazonColor,
    },
    contentContainer: {
        marginHorizontal: 35,
  },
  backbtn: {
    marginTop: 10,
    marginLeft:10
    }
});

export default OrderScreen;
