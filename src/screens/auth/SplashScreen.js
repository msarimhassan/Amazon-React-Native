import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Colors, Routes} from '../../common';
import Logo from '../../../assets/images/Amazon.png';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Routes.LoginScreen);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: Colors.white,
  },
  logo: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
