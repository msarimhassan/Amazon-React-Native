import { ScrollView } from 'native-base';
import React from 'react';
import {View, StyleSheet,TouchableOpacity} from 'react-native';
import {Colors, Routes,Icons} from '../../../common';
import Button from '../../../components/Button';
import { CreditCard } from '../../../components/Cards';
import { useNavigation } from '@react-navigation/native';

const CardScreen = () => {
  const navigation = useNavigation();
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
      <Button
        text={'Add Card'}
        style={styles.btn}
        onPress={() => navigation.navigate(Routes.cardForm)}
      />

      <View style={styles.cardContainer}>
        {Array(2)
          .fill(0)
          .map(() => {
            return <CreditCard />;
          })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  btn: {
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  cardContainer: {
    alignItems: 'center',
  },
  backbtn: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default CardScreen;
