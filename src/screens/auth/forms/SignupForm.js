import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import {Colors} from '../../../common';
import { Button } from '../../../components';
import { Entypo } from '../../../common/Icons';
import Logo from '../../../../assets/images/Amazon.png';
const SignupForm = ({ active, setIsActive }) => {
  
  const Signup = () => {
    console.log('Signup')
  }


  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View>
        <Text style={styles.title}>Sign-Up</Text>
        <View style={styles.inputBox}>
          <Entypo name="user" size={15} />
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.inputBox}>
          <Entypo name="email" size={15} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.inputBox}>
          <Entypo name="key" size={15} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.inputBox}>
          <Entypo name="phone" size={15} />
          <TextInput
            style={styles.input}
            placeholder="Phone-no"
            placeholderTextColor="#000"
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button text="Signup" onPress={()=>Signup()} />
        </View>
        <View style={styles.info}>
          <Text>Already have an Account?</Text>
          <TouchableWithoutFeedback
            activeOpacity={0}
            onPress={() => setIsActive(!active)}>
            <Text style={{fontSize: 17}}>Login</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 30,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    height: 35,
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'Bold',
    color: '#000',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  logo: {
    width:200,
    height: 110,
    resizeMode: 'contain',
  },
});

export default SignupForm;
