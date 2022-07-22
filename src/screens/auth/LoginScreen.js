import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {Header} from '../../components';
import LoginForm from './forms/LoginForm';
import SignupForm from './forms/SignupForm';
const LoginScreen = () => {
  const [isactive, setIsActive] = useState(true);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <View style={styles.container}>
        {isactive ? (
          <LoginForm setIsActive={setIsActive} active={isactive} />
        ) : (
          <SignupForm setIsActive={setIsActive} active={isactive} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor:'#fff'
  },
});

export default LoginScreen;
