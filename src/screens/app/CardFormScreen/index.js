import React from 'react';
import { View, StyleSheet, Text, TextInput,TouchableOpacity } from 'react-native';
import { Colors } from '../../../common';
import { useNavigation } from '@react-navigation/native';

const CardFormScreen = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.formContainer}>
            <Text style={styles.label}>FirstName</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.label}>LastName</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.label}>CardNo</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.label}>ExpirationDate</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Security Code</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.savebtn}>
            <Text style={styles.btntext}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Nobtn}
            onPress={() => navigation.goBack()}>
            <Text style={styles.btntext}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: '100%',
    },
    form: {
        paddingHorizontal:30
    },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
  },
  label: {
    color: Colors.font,
    fontSize: 18,
    fontWeight: 'bold',
  },
  formContainer: {
    marginTop: 10,
  },
  savebtn: {
    backgroundColor: Colors.amazonColor,
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  Nobtn: {
    backgroundColor: Colors.warning,
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  btntext: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default CardFormScreen;