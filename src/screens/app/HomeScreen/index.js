import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../../common';
import CategoryCard from '../../../components/Cards/CategoryCard.js';
import {config, Network, Urls} from '../../../config';
import AmazonLoader from '../../../../assets/animations';

const HomeScreen = () => {
  const [categoryList, setcategoryList] = useState([]);
  const [loading, setLoading] = useState(true);
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
    setcategoryList(response.data.categories);

    if (!response.ok) {
      console.log(response.data.error);
    }
    setLoading(false);
  };
  return (
    <View style={{flex: 1}}>
      {loading ? (
        <AmazonLoader />
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          {categoryList?.map((category, index) => {
            return (
              <CategoryCard
                key={index}
                id={category._id}
                title={category.name}
                image={category.imageUrl}
              />
            );
          })}
        </ScrollView>
      )}
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
