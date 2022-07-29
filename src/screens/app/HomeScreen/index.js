import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import {Colors} from '../../../common';
import CategoryCard from '../../../components/Cards/CategoryCard.js';
import {config, Network, Urls} from '../../../config';
import AmazonLoader from '../../../../assets/animations';
import GeoLocation from '@react-native-community/geolocation';

const HomeScreen = () => {
  const [categoryList, setcategoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Getcategories();
    GeoLocation.getCurrentPosition(data => console.log(data));
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
    <View style={{flex: 1}} style={styles.container}>
      {loading ? (
        <AmazonLoader />
      ) : (
          <FlatList
          keyExtractor={item => item.id}
          numColumns={2}
          data={categoryList}
          renderItem={({item}) => {
            return (
              <CategoryCard
                id={item._id}
                title={item.name}
                image={item.imageUrl}
              />
            );
          }}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height:'100%',
  }
})



export default HomeScreen;
