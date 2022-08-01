import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../../common';
import {ChartCards} from '../../../components/Cards';
import {Network, Urls, config} from '../../../config';

const ChatScreen = () => {
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    GetConversations();
 },[])
  const GetConversations = async () => {
    const response = await Network.get(
      Urls.getConversations,
      (
        await config()
      ).headers,
    );
    setConversation(response.data.conversations);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.chatContainer}>
        {conversation?.map((conversation) => {
            return (
              <ChartCards
                name={conversation.productName}
                image={conversation.productImage}
                conversationId={conversation.conversation._id}
                shopId={conversation.shop}
              />
            );
          })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  chatContainer: {
    marginHorizontal: 20,
  },
  backbtn: {
    marginLeft: 10,
    marginTop: 10,
  },
});

export default ChatScreen;
