import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Colors} from '../../../common';
import CategoryCard from '../../../components/Cards/CategoryCard.js';
import {config, Network, Urls} from '../../../config';
import AmazonLoader from '../../../../assets/animations';
import GeoLocation from '@react-native-community/geolocation';
import OneSignal from 'react-native-onesignal';
import {useSelector} from 'react-redux'



const HomeScreen = () => {
  const currentUser = useSelector(state => state.auth.user);

    
  useEffect(() => {
    // One Signal Configuration
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('ea38e390-cd6e-43a9-8d5b-1cfc79a91491');
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
      console.log('Prompt response:', response);
    });
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });
    OneSignal.setExternalUserId(currentUser?._id);
  })


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
