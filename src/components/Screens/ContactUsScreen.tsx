import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView, Linking } from 'react-native';
import { Text } from 'react-native-paper';

import { Card } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const contactDetails = ['1st FLOOR, F33', 'Phase-8, Industrial Area, Sector 73', 'Sahibzada Ajit Singh Nagar, Punjab 160071']
    const emailArry = ['hr@baselineitdevelopment.com', 'sales@baselineitdevelopment.com']
    const companyLatitude = 30.711352;
    const companyLongitude = 76.710983;

    const handleInputChange = (fieldName: any, value: any) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [fieldName]: value,
        }));
    };

    const handleEmailLink = (item: any) => {
        // console.log('result ==>',item)
        const email = item // Replace this with the actual email ID you want to link
        const subject = ''; // You can set a default subject if you want
        const url = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        // Set the loader state to true while the email link is being opened
        setIsLoading(true);

        // Open the email link with the default email app
        Linking.openURL(url)
            .then(() => setIsLoading(false))
            .catch((err) => {
                console.error('Error opening email link:', err);
                setIsLoading(false); // Set the loader state to false in case of an error
            });
    };

    const handleContactFormSubmit = () => {
        // Replace 'http://your-backend-url/contact' with your actual backend API endpoint
        const backendUrl = 'https://baseline-backend1.onrender.com/contact_us';
        // Make a POST request to send the form data to the backend
        axios
            .post(backendUrl, formData)
            .then((response: { data: any; }) => {
                // Handle the response from the backend (if needed)
                console.log('Form data sent successfully:', response.data);
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                })
                setIsSuccess(true);
            })
            .catch((error: any) => {
                console.error('Error sending form data:', error);
            });
    };
    // Render the success screen if isSuccess is true
    if (isSuccess) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Form submitted successfully!</Text>
                {/* You can add more UI elements for the success screen */}
            </View>
        );
    }
    const isDisabled = !formData.name || !formData.email || !formData.message;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="blue" />
            ) : (<View><Card style={styles.card}>

                <Card.Content>
                    <Text style={styles.cardTitle}>Contact Us</Text>
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Your Name"
                            value={formData.name}
                            onChangeText={(text) => handleInputChange('name', text)}
                            placeholderTextColor="#888"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Your Email"
                            value={formData.email}
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholderTextColor="#888"
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={[styles.input, { height: 120 }]}
                            placeholder="Your Message"
                            value={formData.message}
                            onChangeText={(text) => handleInputChange('message', text)}
                            placeholderTextColor="#888"
                            multiline
                        />
                        <TouchableOpacity style={isDisabled ? styles.buttonDisable : styles.submitButton} onPress={handleContactFormSubmit} disabled={isDisabled}>
                            <Text style={styles.buttonText} >Send</Text>
                        </TouchableOpacity>
                    </View>
                </Card.Content>
            </Card>

                <View style={styles.contactDetailsContainer}>
                    <Text style={styles.contactDetailsTitle}><Text style={{
                        color: "#bb372a"
                    }}>Contact </Text>Details</Text>
                    {contactDetails?.map((item, index) => <Text style={styles.contactDetailItem} key={index}>{item}</Text>)}
                    {emailArry?.map((item, index) => <Text style={styles.contactDetailItem} key={index}>E-Mail: <Text style={styles.redColor} onPress={() => handleEmailLink(item)}>{item}</Text></Text>)
                    }
                </View>
                <View style={styles.chatContainer}>
                    <Text style={styles.chatTitle}>Chat With Us</Text>
                    <View style={styles.chatOptionsContainer}>
                        <TouchableOpacity style={styles.chatOption}>
                            <FontAwesome5 name="whatsapp" size={24} color="#25D366" />
                            <Text style={styles.chatOptionText}>7340740007</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chatOption}>
                            <FontAwesome5 name="skype" size={24} color="#00AFF0" />
                            <Text style={styles.chatOptionText2}>Start Chat</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mapContainer}>
                    <Text style={styles.mapTitle}>Company's Location</Text>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: companyLatitude,
                            longitude: companyLongitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: companyLatitude,
                                longitude: companyLongitude,
                            }}
                            title="Baseline IT Development"
                            description="1st Floor, F-33, Phase-8, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 160071"
                        />
                    </MapView>
                </View>
                <View style={styles.connectContainer}>
                    <Text style={styles.connectTitle}>Connect with us</Text>
                    <View style={styles.connectIconsContainer}>
                        <TouchableOpacity style={styles.connectIcon}>
                            <FontAwesome5 name="instagram" size={24} color="#C13584" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.connectIcon}>
                            <FontAwesome5 name="linkedin" size={24} color="#0077B5" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.connectIcon}>
                            <FontAwesome5 name="facebook" size={24} color="#3B5998" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.connectIcon}>
                            <FontAwesome5 name="twitter" size={24} color="#1DA1F2" />
                        </TouchableOpacity>
                    </View>
                </View></View>)}


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    card: {
        marginBottom: 20,
        elevation: 4,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    formContainer: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
        fontSize: 16,
        color: '#333',
    },
    submitButton: {
        backgroundColor: '#bb372a',
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: 'center',
    },
    buttonDisable: {
        backgroundColor: '#bb372a',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        opacity: 0.5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    contactDetailsContainer: {
        borderTopWidth: 1,
        borderColor: '#eee',
        paddingTop: 20,
    },
    contactDetailsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#444345'
    },
    contactDetailItem: {
        fontSize: 16,
        marginBottom: 8,
    },
    redColor: {
        color: '#bb372a',
        textDecorationLine: 'underline'
    },
    chatContainer: {
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    chatTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    chatOptionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chatOption: {
        alignItems: 'center',
    },
    chatOptionText: {
        marginTop: 5,
        fontSize: 16,
        color: '#25D366'
    },
    chatOptionText2: {
        marginTop: 5,
        fontSize: 16,
        color: '#00AFF0'
    },
    mapContainer: {
        marginVertical: 20,
        height: 300,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        overflow: 'hidden',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    mapTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    connectContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#f0f0f0', // Set your desired background color
    },
    connectTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    connectIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // Align icons at the center horizontally
    },
    connectIcon: {
        alignItems: 'center',
        marginHorizontal: 10, // Add some horizontal spacing between icons
    },
    phoneNumberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    countryCodeInput: {
        flex: 1,
        marginRight: 10,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingLeft: 10,
    },
    phoneNumberInput: {
        flex: 2,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingLeft: 10,
    },
    selectBoxContainer: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingLeft: 10,
    },
});

export default ContactUs;
