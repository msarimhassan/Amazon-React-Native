import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../../common';
import {AppHeader} from '../../../components';
import CategoryCard from './CategoryCard';
import {config, Network, Urls} from '../../../config';

const HomeScreen = () => {
  const [categoryList, setcategoryList] = useState([]);
  // useEffect(() => {
  //     Getcategories();
  //     console.log(categoryList);
  // }, [])

  // const Getcategories = async() => {
  //     const response = await Network.get(Urls.getCategories('en-US'), (await config()).headers).then((response) => {
  //         console.log(response);
  //     })
  //     if (response.ok) {
  //         setcategoryList(response.data.categories);
  //     }
  // }
  return (
    <View style={{flex: 1}}>
      <AppHeader />
      <ScrollView contentContainerStyle={styles.container}>
        {Array(10)
          .fill(0)
          .map((category, index) => {
            return <CategoryCard key={index} />;
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
