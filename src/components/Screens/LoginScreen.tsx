import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
    const navigation = useNavigation() as any;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(true);
    const handleLogin = async () => {
        setError('');
        try {
            await auth().signInWithEmailAndPassword(email, password);
            // User is now logged in, navigate to the GetStarted page
            navigation.navigate('GetStarted');
        } catch (error: any) {
            // Handle login errors
            if (error?.code === 'auth/invalid-email' || error?.code === 'auth/wrong-password') {
                setError('Invalid email or password. Please try again.'); // Show an error message to the user
            } else {
                setError('Something went wrong. Please try again later.'); // Show a generic error message for other errors
            }
        }
    };
    const handleInputChange = (text: any, field: string) => {
        if (field === 'email') {
            setEmail(text);
        } else if (field === 'password') {
            setPassword(text);
        }
        setDisabled(!email || !password); // Disable the button if email or password is empty
    };

    return (
        <View style={styles.container}>
            {/* Company Logo */}
            <Image
                source={require('../../../assets/baselinelogo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => handleInputChange(text, 'email')}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => handleInputChange(text, 'password')}
                value={password}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={disabled}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: "grey"
    },
    logo: {
        width: 300,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#bb372a',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
