import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { CustomButton } from '../themes/Buttons/CustomButton ';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add the user message to the chat
    setMessages(prevMessages => [
      ...prevMessages,
      { text: inputMessage, sender: 'user' },
    ]);

    // Clear the input field
    setInputMessage('');

    // Send the user message to Wit.ai API
    fetchWitAiResponse(inputMessage);
  };

  const fetchWitAiResponse = async (userMessage: string) => {
    // Replace 'YOUR_WIT_AI_ACCESS_TOKEN' with your actual Wit.ai access token
    const WIT_AI_ACCESS_TOKEN = 'P5SU3XQTAUZVYDPL6ZJ3C5PKQ5KWSLYI';
    const witAiApiUrl = `https://api.wit.ai/message?v=20230924&q=${encodeURIComponent(
      userMessage,
    )}`;

    try {
      const response = await fetch(witAiApiUrl, {
        headers: {
          Authorization: `Bearer ${WIT_AI_ACCESS_TOKEN}`,
        },
      });

      if (!response.ok) {
        console.error('Failed to fetch Wit.ai response');
        return;
      }

      const data = await response.json();
      console.log('data', data);

      // Add the bot message to the chat
      const botMessage =
        data && data.text ? data.text : 'Sorry, I did not understand that.';
      setMessages(prevMessages => [
        ...prevMessages,
        { text: botMessage, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Error while fetching Wit.ai response:', error);
    }
    console.log('Current Messages:', messages);
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userMessage : styles.botMessage,
      ]}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{ height: '100%', marginLeft: 12, marginRight: 12 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text => setInputMessage(text)}
          value={inputMessage}
          placeholder="Type your message..."
          style={styles.input}
        />
        <CustomButton title="Send" onPress={handleSendMessage} color="#bb372a" />
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginTop: 10
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#E1F5FE',
    borderRadius: 8,
    padding: 10,
    maxWidth: '80%',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFF9C4',
    borderRadius: 8,
    padding: 10,
    maxWidth: '80%',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 50,
    width: '100%',
    position: 'absolute',
    bottom: 8,
    left: 0, // Add left: 0 to ensure it sticks to the left side of the screen
    right: 0,
  },
  input: {
    height: 40,
    width: '85%',
    color: '#333',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: 150,
    alignItems: 'center',
  },
});