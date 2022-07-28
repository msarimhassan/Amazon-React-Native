import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../common';

const DisableButton = ({text,style}) => {
    return <View style={{ ...styles.container, ...style }}>
        <Text style={styles.text}>{text}</Text>
</View>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.disable,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    text: {
        fontSize: 16,
        color: Colors.white,
        fontWeight:'bold'
    }
});

export default DisableButton;