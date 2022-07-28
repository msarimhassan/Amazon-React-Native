import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import {AppNavigator,AuthNavigator} from '../navigation'
const Root = () => {
    const AcToken = useSelector((state) => state.auth.token);
    return <>
    {AcToken?<AppNavigator/>:<AuthNavigator/>}
</>;
}

const styles = StyleSheet.create({
container:{}
});

export default Root;