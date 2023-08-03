import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
            const user = auth().currentUser;
            if (user) {
                await AsyncStorage.setItem('authUserData', JSON.stringify({ userId: user.uid, email: user.email }));
            }

            // Cheack if the user hs logged in before
            const userLoggedInBefore = await AsyncStorage.getItem('userLoggedIn');
            if (userLoggedInBefore) {
                // If the user has logged in before, navigate to the "Get Started" screen
                navigation.navigate('HomePage');
            } else {
                // If it's the user's first login, navigate to the "Home" screen
                navigation.navigate('GetStarted');
            }
        } catch (error: any) {
            if (error?.code === 'auth/invalid-email' || error?.code === 'auth/wrong-password' || error?.code === 'auth/user-not-found') {
                setError('Invalid email or password. Please try again.');
                setError('Something went wrong. Please try again later.');
            }
        }
    };
    const handleInputChange = (text: any, field: string) => {
        if (field === 'email') {
            setEmail(text);
        } else if (field === 'password') {
            setPassword(text);
        }
        setDisabled(!email || !password);
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
        height: 35,
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
