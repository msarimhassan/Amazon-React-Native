import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from '../../components';

const LoginScreen = () => {
    return <View style={styles.container}>
        <Header/>
    <Text>Login</Text>
</View>;
}

const styles = StyleSheet.create({
container:{}
});

export default LoginScreen;