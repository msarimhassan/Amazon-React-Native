import React from 'react';
import { View, StyleSheet,ScrollView} from 'react-native';
import { Colors } from '../../../common';
import { ChartCards} from '../../../components/Cards';

const ChatScreen = () => {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.chatContainer}>
          {Array(10)
            .fill(0)
            .map(() => {
              return <ChartCards />;
            })}
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        height:'100%'
    },
    chatContainer: {
        marginHorizontal: 20,
        
    }
    , backbtn: {
        marginLeft: 10,
        marginTop:10,
    }
});

export default ChatScreen;