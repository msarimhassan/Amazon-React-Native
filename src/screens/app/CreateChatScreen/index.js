import React, {useEffect, useState, useRef} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {Button} from '../../../components';
import {Colors} from '../../../common';
import {io} from 'socket.io-client';
import {config, Network, Urls} from '../../../config';
import {useSelector} from 'react-redux';
import Messages from './Messages';

const CreateChatScreen = ({route}) => {
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState('');
  const {conversationId, shopId} = route.params;
  const currentUser = useSelector(state => state.auth.user);
  const chatRef = useRef();
  useEffect(() => {
    const socket = io('https://amazon-clone-12345.herokuapp.com');
    socket.on('connection', data => {
      console.log({data});
    });
    socket.on(`conversation-${conversationId}`, data => {
      setConversation(prevstate => {
        let newState = prevstate;
        return [...newState, data];
      });
      chatRef.current.scrollToEnd();
    });
  }, []);

  useEffect(() => {
    GetMessages();
  }, []);

  const GetMessages = async () => {
    const response = await Network.get(
      Urls.getMessages + conversationId,
      (
        await config()
      ).headers,
    );
    setConversation(response.data.messages);
  };

  const SendMessage = async () => {
    if (!message) return;
    const obj = {
      conversation: conversationId,
      message: message,
      user: currentUser._id,
      shop: shopId,
      sender: currentUser._id,
    };
    await Network.post(Urls.sendMessage, obj, (await config()).headers);
    setMessage('');
  };

  return (
    <>
      <ScrollView ref={chatRef} style={styles.container}>
        {conversation && <Messages conversation={conversation} />}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
                  onChangeText={value => setMessage(value)}
                  placeholder='Send Message'
        />
        <Button text="Send" style={styles.btn} onPress={() => SendMessage()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  input: {
    width: '75%',
    borderRadius: 20,
  },
  inputContainer: {
    display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    justifyContent:'center'
  },
  btn: {
    width: '20%',
    
  },
});

export default CreateChatScreen;
