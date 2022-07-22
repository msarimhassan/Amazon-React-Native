import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../../../common';
import { AppHeader } from '../../../components';

const HomeScreen = () => {

    return <>
        <AppHeader/>
        <View style={styles.container}>
        <Text>Home</Text>
        </View>
        </>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        height:'100%'
}
});

export default HomeScreen;