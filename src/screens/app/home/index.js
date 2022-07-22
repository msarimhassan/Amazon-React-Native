import React,{useEffect,useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../../common';
import { AppHeader } from '../../../components';
import CategoryCard from './CategoryCard';
import { config,Network,Urls} from '../../../config';

const HomeScreen = () => {
    const [categoryList, setcategoryList] = useState([]);
    useEffect(() => {
        Getcategories();
    }, [])
    
    const Getcategories = async() => {
        const response = await Network.get(Urls.getCategories('en-US'), (await config()).headers);
        console.log(response.data);
    }
    return <>
        <AppHeader/>
        <View style={styles.container}>
           <CategoryCard/>
        </View>
        </>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        height:'100%'
}
});

export default HomeScreen;