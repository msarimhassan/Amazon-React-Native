import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Bill from './Bill';

const OrderDetailScreen = () => {
    return <View style={styles.container}>
        <Text>Sairm</Text>
    <Bill/>
</View>;
}

const styles = StyleSheet.create({
    container: {}
});

export default OrderDetailScreen;