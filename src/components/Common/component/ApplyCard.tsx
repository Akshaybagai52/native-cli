import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ApplyCard = () => {
    return (
        <View style={styles.cardContainer}>
            {/* Logo */}
            {/* <Image
                source={require('./path/to/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            /> */}

            {/* Description */}
            <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in elit
                nec urna malesuada luctus.
            </Text>

            {/* Apply Now Button */}
            <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    description: {
        fontSize: 16,
        marginVertical: 12,
        textAlign: 'center',
    },
    applyButton: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 4,
        alignSelf: 'center',
    },
    applyButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ApplyCard;
