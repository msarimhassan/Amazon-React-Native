import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../../common';
import CategoryCard from '../../../components/Cards/CategoryCard.js';
import {config, Network, Urls} from '../../../config';

const HomeScreen = () => {
  const [categoryList, setcategoryList] = useState([]);
  useEffect(() => {
    Getcategories();
  }, []);

  const Getcategories = async () => {
    const response = await Network.get(
      Urls.getCategories('en-US'),
      (
        await config()
      ).headers,
    );
    console.log(response.data);
    if (response.ok) {
      setcategoryList(response.data.categories);
    }
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        {categoryList?.map((category, index) => {
            return <CategoryCard key={index} id={category._id} title={category.name} image={category.imageUrl} />;
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
