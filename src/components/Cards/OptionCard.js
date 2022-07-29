import React from 'react';
import {TouchableOpacity, StyleSheet, Text,View} from 'react-native';
import {Colors, Icons} from '../../common';

const OptionCard = ({name,icon,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Icons.AntDesign name={icon} size={30} color={Colors.amazonColor} />
          </View>
          <View style={styles.optionContainer}>
              <Text style={styles.title}>{name}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.amazonColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop: 25,
        paddingVertical: 15,
    paddingHorizontal:30,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.font,
    },
    optionContainer: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
  }
});

export default OptionCard;
