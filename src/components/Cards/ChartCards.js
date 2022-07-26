import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {Colors} from '../../common';

const ChartCards = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: 'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp'}}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Sarim Hassan</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderWidth: 3,
    paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    borderColor:Colors.amazonColor,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 70,
    width: 50,
    height: 50,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.font,
  },
  nameContainer: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
  },
});

export default ChartCards;
