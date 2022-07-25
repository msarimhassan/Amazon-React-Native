import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../../../common';
import {ProfileCard, OptionCard} from '../../../components/Cards';

const options = [
  {
    id: 0,
    name: 'Order',
    iconName: 'shoppingcart',
  },
  {
    id: 1,
    name: 'Cards',
    iconName: 'creditcard',
  },
  {
    id: 2,
    name: 'Addresses',
    iconName: 'enviromento',
    },
    {
        id: 3,
        name: 'Logout',
        iconName:'logout'
  }
];

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileCard />
      <View style={styles.optionContainer}>
        {options.map((option, index) => {
            return <OptionCard key={index} name={option.name} icon={option.iconName} />;
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: '100%',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  optionContainer: {
    paddingHorizontal: 30,
  },
});

export default ProfileScreen;
