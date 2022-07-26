import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Select, CheckIcon} from 'native-base';
import {Colors} from '../../../common';
import { useNavigation } from '@react-navigation/native';

const AddressFormScreen = () => {
    const [service, setService] = useState('');
    const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Country</Text>
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose Country"
            placeholder="Choose Country"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="Pakistan" value="ux" />
            <Select.Item label="India" value="web" />
            <Select.Item label="America" value="cross" />
            <Select.Item label="China" value="ui" />
            <Select.Item label="Afghanistan" value="backend" />
          </Select>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>State</Text>
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose State"
            placeholder="Choose State"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="Pakistan" value="ux" />
            <Select.Item label="India" value="web" />
            <Select.Item label="America" value="cross" />
            <Select.Item label="China" value="ui" />
            <Select.Item label="Afghanistan" value="backend" />
          </Select>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>City</Text>
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose City"
            placeholder="Choose City"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="Pakistan" value="ux" />
            <Select.Item label="India" value="web" />
            <Select.Item label="America" value="cross" />
            <Select.Item label="China" value="ui" />
            <Select.Item label="Afghanistan" value="backend" />
          </Select>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Area</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Street No</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>House No</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.savebtn}>
          <Text style={styles.btntext}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Nobtn} onPress={()=>navigation.goBack()}>
          <Text style={styles.btntext}>No</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
        height: '100%',
  },
  label: {
    color: Colors.font,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
  },
  formContainer: {
    marginTop: 10,
  },
  form: {
      paddingHorizontal: 25,
  },
  btnContainer: {
    display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 50,
      marginTop: 20,
    marginBottom:20,
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
        fontSize:18
    },
    
});

export default AddressFormScreen;
