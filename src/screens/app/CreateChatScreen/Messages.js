import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from '../../../common';


const MyMessage = ({message}) => {
    return <View style={styles.mymessage}>
        <Text style={styles.text}>{message}</Text>
    </View>
}

const NotMyMessage = ({message}) => {
    return (
        <View style={styles.notmymessage}>
           
                <Text style={styles.text}>{message}</Text>
      </View>
    );
}




const Messages = ({ conversation }) => {
    const currentUser = useSelector(state => state.auth.user);
    return <>
        {conversation.map((message) => {
            if (message.sender === currentUser._id)
            {
                return <MyMessage message={message.message} />
            }
            else {
                return <NotMyMessage message={message.message} />
            }
        })}
    </>
}

const styles = StyleSheet.create({
  notmymessage: {
    backgroundColor: '#CCCFCD',
    padding: 15,
    margin: 5,
    display: 'flex',
    alignSelf: 'flex-start',
    borderRadius: 20,
  },
  mymessage: {
    backgroundColor: '#04EF32',
    padding: 15,
    margin: 5,
    display: 'flex',
    alignSelf: 'flex-end',
    borderRadius: 20,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
  },
});

export default Messages;