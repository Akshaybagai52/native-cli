// CustomDrawerContent.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawerContent = ({ navigation }: any) => {
    const handleLogout = async () => {
        try {
            // Clear AsyncStorage
            await AsyncStorage.removeItem('authUserData');
            // Navigate to the login screen
            navigation.navigate('Login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    const menuItems = [
        { label: 'Home', icon: 'home', screen: 'Home' },
        { label: 'Contact Us', icon: 'phone-alt', screen: 'Contact Us' },
    ];

    return (
        <View style={styles.container}>
            {menuItems.map(item => (
                <TouchableOpacity
                    key={item.screen}
                    style={styles.drawerItem}
                    onPress={() => navigation.navigate(item.screen)}
                >
                    <Icon name={item?.icon} size={24} color="#ffff" />
                    <Text style={styles.drawerItemText}>{item.label}</Text>
                </TouchableOpacity>
            ))}
            <View style={styles.divider} />
            <View style={styles.logoutButtonContainer}>
                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={handleLogout}
                >
                    <Icon name="sign-out-alt" size={24} color="#ffff" style={styles.logoutButtonIcon} />
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#bb372a"
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
        gap: 12
    },
    icon: {
        marginRight: 10,
    },
    drawerItemText: {
        fontSize: 18,
        color: "#ffff"
    },
    divider: {
        height: 1,
        backgroundColor: 'white',
    },
    logoutButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Push the Logout button to the bottom
    },
    logoutButton: {
        flexDirection: 'row', // Align icon and text horizontally
        alignItems: 'center', // Center items vertically
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    logoutButtonIcon: {
        marginRight: 10,
    },
    logoutButtonText: {
        fontSize: 18,
        color: '#ffff',
    },
});

export default CustomDrawerContent;
