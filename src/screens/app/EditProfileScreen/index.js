import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {Colors, Icons} from '../../../common';
import ImagePicker from 'react-native-image-crop-picker';
import {ScrollView} from 'native-base';
import { Button, } from '../../../components';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [encodedBase64, setencodedBase64] = useState();
  const [imageMime, setImageMime] = useState();
  const PickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      console.log(image.data);
      setencodedBase64(image.data);
      setImageMime(image.mime);
    });
  };
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backbtn}
        onPress={() => navigation.goBack()}>
        <Icons.AntDesign
          name="arrowleft"
          color={Colors.amazonColor}
          size={30}
        />
      </TouchableOpacity>
      <View>
        <View style={styles.ImageContainer}>
          <TouchableOpacity style={styles.Picker} onPress={() => PickImage()}>
            {encodedBase64 ? (
              <Image
                source={{uri: `data:${imageMime};base64,${encodedBase64}`}}
                style={styles.image}
              />
            ) : (
              <Icons.AntDesign name="camera" color={Colors.white} size={40} />
            )}
          </TouchableOpacity>
        </View>
        {/* Form */}
        <View style={styles.Form}>
          <View style={styles.FormContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.FormContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.FormContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.FormContainer}>
            <Text style={styles.label}>PhoneNo</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
        <Button text="Update" style={styles.btn} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  Picker: {
    borderRadius: 50,
    height: 100,
    width: 100,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: '#AAA7A6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    resizeMode: 'cover',
    width: 100,
    height: 100,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    color: Colors.font,
    marginTop: 5,
  },
  Form: {
    paddingHorizontal: 20,
  },
  btn: {
    marginVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  FormContainer: {
    marginTop: 5,
  },
  label: {
    color: Colors.font,
      fontWeight: 'bold',
    fontSize:16
  },
  backbtn: {
    marginTop: 10,
    marginLeft:10
  }
});

export default EditProfileScreen;
