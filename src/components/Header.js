import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Colors,Fontsize } from '../common';

const Header = () => {
    return <View style={styles.container}>
    <Text style={styles.title}>Amazon.com</Text>
</View>;
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: Colors.header,
    },
    title: {
        fontSize: Fontsize.heading,
        color: Colors.font,
        fontWeight:'bold'
    }
});

export default Header;