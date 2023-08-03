import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from '../styles/screen/GetStartedStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';


const GetStartedScreen = ({ navigation }: any) => {
    const handleGetStartedPress = async () => {
        await AsyncStorage.setItem('userLoggedIn', 'true');
        navigation.navigate('HomePage');
    };

    return (
        <View style={styles.container}>
            {/* Logo image */}
            <Image source={require('../../../assets/baselinelogo.png')} style={styles.logo} />
            <TouchableOpacity style={styles.button} onPress={handleGetStartedPress}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};
export default GetStartedScreen;
