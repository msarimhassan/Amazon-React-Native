import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Colors } from '../../common';

const SelectableCard = ({info,selected}) => {
    return <View style={selected?styles.selected:styles.container}>
        <Text style={selected?styles.selectedAddress:styles.address}>{info}</Text>
</View>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    padding: 15,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor:Colors.white
    },
    address: {
        fontWeight: 'bold',
        fontSize: 18,
        color:Colors.font
  },
  selectedAddress: {
      fontWeight: 'bold',
        fontSize: 18,
        color:Colors.white,
  },
    selected: {
    backgroundColor: Colors.activeTint,
    width: '100%',
    borderRadius: 10,
    padding: 15,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    }
});

export default SelectableCard;