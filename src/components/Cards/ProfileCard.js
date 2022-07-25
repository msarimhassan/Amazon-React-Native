import React from 'react';
import {View, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {Colors,Icons} from '../../common';
import Logo from '../../../assets/images/Amazon.png';

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBox}>
        <Icons.Feather name="edit" color={Colors.amazonColor} size={25} />
      </TouchableOpacity>
      <View style={styles.box}>
        <View style={styles.profileContainer}>
          <Image source={Logo} style={styles.image} />
          <View>
            <Text style={styles.title}>Sarim Hassan</Text>
            <Text style={styles.email}>msarimdev@gmail.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.font,
  },
  email: {
    color: Colors.font,
    fontSize: 16,
  },
    box: { paddingHorizontal: 50 },
    iconBox: {
        position: 'absolute',
        right: 15,
        top:10
  }
});

export default ProfileCard;
