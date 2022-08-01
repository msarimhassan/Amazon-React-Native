import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Button } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../../common';
const ConfirmOrderScreen = () => {
    const navigation = useNavigation();
    return <View style={styles.container}>
        <Text style={styles.text}>Your Order has been placed</Text>
        <Button text='Order Again' onPress={()=>navigation.navigate('Home')} />
</View>;
}

const styles = StyleSheet.create({
    container: {},
    text: {
        color:"#000"
    }
});

export default ConfirmOrderScreen;