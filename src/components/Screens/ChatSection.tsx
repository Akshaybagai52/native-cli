import React, { useState } from 'react';
import { View, TouchableOpacity, Modal,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/AntDesign';
import { ChatScreen } from '../Common/component/Chatbot';
import { styles } from '../styles/screen/ChatSectionStyles';
import Chatbot from './Chatbot';

const ChatPopup = () => {
  const [showChatPopup, setShowChatPopup] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setShowChatPopup(true)}>
        <Icon name="rocketchat" size={25} color="white" />
      </TouchableOpacity>

      <Modal visible={showChatPopup} animationType="slide">
      <View style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" />
                <Chatbot />
            </View>
        {/* <View>
          <ChatScreen />
        </View> */}
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
