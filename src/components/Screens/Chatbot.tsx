import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { LinearGradient } from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'; // or any other icon library you prefer


const Chatbot = () => {
    const [messages, setMessages] = useState<any>([]);

    // Function to handle user messages
    const handleUserMessage = (newMessages :any = []) => {
        setMessages((prevMessages:any) => GiftedChat.append(prevMessages, newMessages));
        // You can handle user messages here and send responses from the chatbot service
        // For now, we'll just echo back the user's message
        const botResponse:any = {
            _id: Math.random().toString(),
            text: newMessages[0].text,
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native Chatbot',
                avatar: require('../../../assets/baseLinelogos.png'), // Replace with the path to the bot avatar image
            },
        };
        setTimeout(() => {
            setMessages((prevMessages:any) => GiftedChat.append(prevMessages, [botResponse]));
        }, 1000); // Simulate a delay before the bot responds
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#f7f7f7', '#dcdcdc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.gradient}>
                <GiftedChat
                    messages={messages}
                    onSend={(newMessages) => handleUserMessage(newMessages)}
                    user={{
                        _id: 1,
                    }}
                    renderAvatar={() => <Icon name="user-circle-o" size={40} />}
                    placeholder="Type your message..."
                />
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    },
});

export default Chatbot;