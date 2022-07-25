import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Bill from './Bill';

const OrderDetailScreen = () => {
    return <View style={styles.container}>
        
    <Bill/>
</View>;
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:20
    }
});

export default OrderDetailScreen;