import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Colors } from '../../common';
import { Button } from '../../components';
const SignupForm = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Creat Account</Text>
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Phone</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={{marginTop: 20}}>
          <Button />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingTop: 10,
        margin: 20,
        paddingBottom: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        }
    },
        label: {
            fontWeight: 'bold',
            fontSize: 18,
            color: '#000',
        },
        input: {
            height: 35,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
        }
    
});

export default SignupForm;