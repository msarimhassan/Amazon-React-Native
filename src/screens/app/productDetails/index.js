import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Card from './Card';

const ProductdetailScreen = () => {
    return <ScrollView style={styles.container}>
    <Card/>
</ScrollView>;
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor:'#fff'
}
});

export default ProductdetailScreen;