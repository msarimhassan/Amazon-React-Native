import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {Colors} from '../../../common';
import {Entypo} from '../../../common/Icons';
import {Button,ErrorMessage} from '../../../components';
import {useFormik} from 'formik';
import Logo from '../../../../assets/images/Amazon.png';
import {Network, Urls, config} from '../../../config';
import {useDispatch} from 'react-redux';
import { Login } from '../../../redux/AuthSlice';



const initialValues = {
  email: '',
  password: '',
};

const LoginForm = ({setIsActive, active}) => {
  const dispatch = useDispatch();
  const onSubmit = async values => {
    const response = await Network.post(
      Urls.login,
      values,
      (
        await config()
      ).headers,
    );
    if (!response.ok) {
      return ErrorMessage(response.data.error);
    }
    dispatch(Login(response.data));
  };
  const {values, handleChange, handleSubmit, errors} = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View>
        <Text style={styles.title}>Sign-In</Text>
        <View style={styles.inputBox}>
          <Entypo name="email" size={15} />
          <TextInput
            id="email"
            style={styles.input}
            placeholder="Email"
            name="email"
            placeholderTextColor="#000"
            onChangeText={handleChange('email')}
            value={values.email}
          />
        </View>
        <View style={styles.inputBox}>
          <Entypo name="key" size={15} />
          <TextInput
            id="password"
            style={styles.input}
            placeholder="Password"
            name="password"
            placeholderTextColor="#000"
            onChangeText={handleChange('password')}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button text="Login" onPress={handleSubmit} />
        </View>
        <View style={styles.info}>
          <Text>Dont have an Account?</Text>
          <TouchableWithoutFeedback
            activeOpacity={0}
            onPress={() => setIsActive(!active)}>
            <Text style={{fontSize: 17}}>Signup</Text>
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
    height: 40,
    width: '100%',
    color:Colors.font,
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
    width: 250,
    height: 200,
    resizeMode: 'contain',
  },
});

export default LoginForm;
