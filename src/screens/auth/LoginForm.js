import React from 'react';
import { View, StyleSheet, Text,TextInput,TouchableWithoutFeedback } from 'react-native';
import { Colors } from '../../common';
import { Button } from '../../components';
const LoginForm = ({setIsActive,active}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign-In</Text>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={{marginTop: 20}}>
          <Button />
            </View>
            <View style={styles.info}>
        <Text>Dont have an Account?</Text>
        <TouchableWithoutFeedback activeOpacity={0} onPress={()=>setIsActive(!active)}>
          <Text style={{fontSize:17}}>Signup</Text>
                </TouchableWithoutFeedback>
                </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
        backgroundColor: Colors.white,
         borderRadius:5,
        paddingHorizontal: 20,
        paddingTop: 10,
        margin: 20,
        paddingBottom: 30,
        shadowColor: '#000',
       shadowOffset: {
       width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  label: {
    fontWeight: 'bold',
      fontSize: 18,
      color: '#000',
      marginTop:10
  },
  input: {
    height: 35,
    marginVertical:12,
    borderWidth: 1,
    padding: 10,
    borderRadius:5
    },
    title: {
        fontSize: 30,
        fontWeight: 'Bold',
        color: "#000",
    }
    , info:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
        alignItems:'center'
    }
});

export default LoginForm;