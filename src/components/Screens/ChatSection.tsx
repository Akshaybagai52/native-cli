import React, { useState } from 'react';
import { View, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/AntDesign';
import { styles } from '../styles/screen/ChatSectionStyles';
import { ChatScreen } from '../Common/component/Chatbot';

const ChatPopup = () => {
  const [showChatPopup, setShowChatPopup] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setShowChatPopup(true)}>
        <Icon name="rocketchat" size={25} color="white" />
      </TouchableOpacity>

      <Modal visible={showChatPopup} animationType="slide">
        <View>
          <ChatScreen />
        </View>
        <TouchableOpacity
          onPress={() => setShowChatPopup(false)}
          style={styles.closeIcon}>
          <Icons name="close" size={20} color="white" />

        </TouchableOpacity>
      </Modal>
    </View>
  );
};
export default ChatPopup;
