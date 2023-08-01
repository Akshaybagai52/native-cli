import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from '../styles/screen/GetStartedStyles';


const GetStartedScreen = ({ navigation }: any) => {
    const handleGetStartedPress = () => {
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
