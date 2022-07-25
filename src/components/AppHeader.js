import React from 'react';
import {View, StyleSheet, Text, Image,StatusBar} from 'react-native';
import Logo from '../../assets/images/Amazon.png';
import { Icons } from '../common';
const AppHeader = () => {
    return (
      <>
        <StatusBar backgroundColor={'#20B2AA'} />
        <View style={styles.container}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.iconbox}>
            <Icons.Feather name="bell" size={25} color="#fff" style={{marginRight:10}} />
            <Icons.Feather name="search" size={25} color="#fff" />
          </View>
        </View>
      </>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#20B2AA',
    display: 'flex',
        height: 60,
    justifyContent:"space-between",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:20
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    },
    iconbox: {
        display: "flex",
        flexDirection: "row",
  }
});

export default AppHeader;
