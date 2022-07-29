import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Colors, Icons, Routes} from '../../common';
import Logo from '../../../assets/images/Amazon.png';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ProfileCard = () => {
  const navigation = useNavigation();
  const currentUser = useSelector(state => state.auth.user);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconBox}
        onPress={() => navigation.navigate(Routes.editProfile)}>
        <Icons.Feather name="edit" color={Colors.amazonColor} size={25} />
      </TouchableOpacity>
      <View style={styles.box}>
        <View style={styles.profileContainer}>
          {currentUser.image ? (
            <Image source={{uri: currentUser.image}} style={styles.image} />
          ) : (
            <Icons.AntDesign name="user" color={Colors.font} size={30} />
          )}
          <View>
            <Text style={styles.title}>{currentUser.name}</Text>
            <Text style={styles.email}>{currentUser.email}</Text>
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
    backgroundColor: Colors.white,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
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
  box: {paddingHorizontal: 50},
  iconBox: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
});

export default ProfileCard;
