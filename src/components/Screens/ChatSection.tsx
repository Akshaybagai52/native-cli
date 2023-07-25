import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Modal, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/AntDesign';

const ChatPopup = () => {
  const [showChatPopup, setShowChatPopup] = useState(false);

  const handleSend = (message: string) => {
    // Logic to handle user input and send messages
    // You may need to implement message state and message sending here
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setShowChatPopup(true)}>
        <Icon name="rocketchat" size={25} color="white" />
      </TouchableOpacity>

      <Modal visible={showChatPopup} animationType="slide">
        <View>
          <Text>Chat Messages</Text>
        </View>
        <TouchableOpacity
          onPress={() => setShowChatPopup(false)}
          style={styles.closeIcon}>
          <Icons name="close" size={25} color="white" />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  chatIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#F26D6D',
    borderRadius: 30,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#bb372a',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatPopup;
