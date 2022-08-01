import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { Colors,Routes } from '../../common';
import { useNavigation } from '@react-navigation/native';

const ChartCards = ({ name, image,conversationId,shopId }) => {
  const navigation = useNavigation();
  const OpenChat = () => {
    navigation.navigate(Routes.createChat, {
      shopId:shopId,
      conversationId:conversationId,
    });
  }
  return (
    <TouchableOpacity style={styles.container} onPress={()=>OpenChat()}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: image}}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
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
    borderColor: Colors.amazonColor,
    backgroundColor:Colors.white,
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
