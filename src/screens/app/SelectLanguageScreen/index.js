import React,{useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../../common';
import { SelectableCard } from '../../../components/Cards';


const languages = [{
    id: 0,
    language: 'en-US',
    title:'English'
}, {
    id: 1,
    language: 'fr',
    title:'French'
}]


const SelectLangaugeScreen = () => {
    const [currentLanguage, setcurrentLanguage] = useState(languages[0]);
    return <View style={styles.container}>
        <Text style={styles.title}>
            Select language
        </Text>
        <View>
          {languages.map((language,index)=>{
                return <TouchableOpacity  key={index} onPress={()=>setcurrentLanguage(language)}>
                    <SelectableCard info={language.title} selected={language.id===currentLanguage.id} />
                </TouchableOpacity>
          })}
        </View>
</View>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        height: '100%',
        paddingHorizontal: 20,
        paddingTop:20,
    } ,title: {
        fontSize: 22,
        color: Colors.amazonColor,
        fontWeight:'bold'
}
});

export default SelectLangaugeScreen;