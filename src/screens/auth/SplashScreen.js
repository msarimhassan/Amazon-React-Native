import React from 'react';
import { View, StyleSheet,Image } from 'react-native';

const SplashScreen = () => {
    return <View style={styles.container}>
       <Image style={styles.logo} source={require('../../images/Amazon.png')}/>
</View>;
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor:'#fff'
    },
    logo: {
        width: 250,
        height: 200,
        resizeMode:'contain'
    }
});

export default SplashScreen;