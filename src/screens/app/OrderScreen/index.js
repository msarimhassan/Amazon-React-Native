import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Colors } from '../../../common';
import {OrderCard,OrderHistoryCard} from '../../../components/Cards';

const OrderScreen = () => {
  const [isSelected, setisSelected] = useState(true);
  return (
    <View style={styles.container}>
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
              {isSelected ? <>
                  {Array(3).fill(0).map((index) => {
                 return <OrderCard key={index}/>;
             })}</> :<OrderHistoryCard/>
              }
              
              </View>
    </View>
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
  }
});

export default OrderScreen;
