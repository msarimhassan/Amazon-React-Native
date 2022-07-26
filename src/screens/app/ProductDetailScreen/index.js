import React from 'react';
import {StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import Card from '../../../components/Cards/ProductDetailCard';
import { Colors,Icons } from '../../../common'
import { useNavigation } from '@react-navigation/native';

const ProductdetailScreen = () => {
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
        <Card />
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor:'#fff'
    }
    , backbtn: {
        marginTop: 10,
        marginLeft:10
}
});

export default ProductdetailScreen;