import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';

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
  },
  userMessage: {
    backgroundColor: '#E1F5FE',
    borderRadius: 8,
    padding: 10,
    maxWidth: '80%',
  },
  botMessage: {
    backgroundColor: '#FFF9C4',
    borderRadius: 8,
    padding: 10,
    maxWidth: '80%',
  },
  inputContainer: {
    backgroundColor: "#fff",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 50,
    position: 'absolute',
    top: 300,
    width: "70%"
  },
  input: {
    height: 40,
    width: "90%"
  },
});

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
      {text: inputMessage, sender: 'user'},
    ]);

    // Clear the input field
    setInputMessage('');

    // Send the user message to Wit.ai API
    fetchWitAiResponse(inputMessage);
  };

  const fetchWitAiResponse = async (userMessage: string) => {
    // Replace 'YOUR_WIT_AI_ACCESS_TOKEN' with your actual Wit.ai access token
    const WIT_AI_ACCESS_TOKEN = 'WMFQ3T3A2HOZTOCNNY4R7V44CZAZANUD';
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

      // Add the bot message to the chat
      const botMessage =
        data && data.text ? data.text : 'Sorry, I did not understand that.';
      setMessages(prevMessages => [
        ...prevMessages,
        {text: botMessage, sender: 'bot'},
      ]);
    } catch (error) {
      console.error('Error while fetching Wit.ai response:', error);
    }
    console.log('Current Messages:', messages);
  };

  const renderMessage = ({item}: {item: Message}) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userMessage : styles.botMessage,
      ]}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View>
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
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};
