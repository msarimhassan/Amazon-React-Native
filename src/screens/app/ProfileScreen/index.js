import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Colors, Routes} from '../../../common';
import {ProfileCard, OptionCard} from '../../../components/Cards';
import {useNavigation} from '@react-navigation/native';
import LogoutModal from '../../../components/Modals/LogoutModal';
const options = [
  {
    id: 0,
    name: 'Order',
    iconName: 'shoppingcart',
    link: Routes.orderScreen,
  },
  {
    id: 1,
    name: 'Select Language',
    iconName: 'zhihu',
    link: Routes.selectLanguage,
  },
  {
    id: 2,
    name: 'Cards',
    iconName: 'creditcard',
    link: Routes.cardScreen,
  },
  {
    id: 3,
    name: 'Addresses',
    iconName: 'enviromento',
    link: Routes.addressScreen,
  },
];

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isVisible, setisVisible] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileCard />
      <View style={styles.optionContainer}>
        {options.map((option, index) => {
          return (
            <OptionCard
              key={index}
              name={option.name}
              icon={option.iconName}
              onPress={() => navigation.navigate(option.link)}
            />
          );
        })}
        <OptionCard
          name="Logout"
          icon="logout"
          onPress={() => setisVisible(!isVisible)}
        />
        <LogoutModal isVisible={isVisible} setisVisible={setisVisible} />
      </View>
    </ScrollView>
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
    paddingBottom: 20,
  },
});

export default ProfileScreen;
