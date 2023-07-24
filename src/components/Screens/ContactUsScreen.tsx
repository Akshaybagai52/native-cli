import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
// import { FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

const ContactUs = () => {
    const contactDetails = ['1st FLOOR, F33', 'Phase-8, Industrial Area, Sector 73', 'Sahibzada Ajit Singh Nagar, Punjab 160071']
    const emailArry = ['hr@baselineitdevelopment.com', 'sales@baselineitdevelopment.com']
    const companyLatitude = 30.711352;
    const companyLongitude = 76.710983;


    // Options for the select box
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Text style={styles.cardTitle}>Contact Us</Text>
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Your Name"
                            placeholderTextColor="#888"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Your Email"
                            placeholderTextColor="#888"
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={[styles.input, { height: 120 }]}
                            placeholder="Your Message"
                            placeholderTextColor="#888"
                            multiline
                        />
                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.buttonText}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </Card.Content>
            </Card>

            <View style={styles.contactDetailsContainer}>
                <Text style={styles.contactDetailsTitle}><Text style={styles.redColor}>Contact </Text>Details</Text>
                {contactDetails?.map((item, index) => <Text style={styles.contactDetailItem} key={index}>{item}</Text>)}
                {emailArry?.map((item, index) => <Text style={styles.contactDetailItem} key={index}>E-Mail: <Text style={styles.redColor}>{item}</Text></Text>)
                }
            </View>
            <View style={styles.chatContainer}>
                <Text style={styles.chatTitle}>Chat With Us</Text>
                <View style={styles.chatOptionsContainer}>
                    <TouchableOpacity style={styles.chatOption}>
                        {/* <FontAwesome5 name="whatsapp" size={24} color="#25D366" /> */}
                        <Text style={styles.chatOptionText}>7340740007</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chatOption}>
                        {/* <FontAwesome name="skype" size={24} color="#00AFF0" /> */}
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
                        {/* <FontAwesome5 name="instagram" size={24} color="#C13584" /> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.connectIcon}>
                        {/* <FontAwesome5 name="linkedin" size={24} color="#0077B5" /> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.connectIcon}>
                        {/* <FontAwesome5 name="facebook" size={24} color="#3B5998" /> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.connectIcon}>
                        {/* <FontAwesome5 name="twitter" size={24} color="#1DA1F2" /> */}
                    </TouchableOpacity>
                </View>
            </View>

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
        backgroundColor: '#f0f0f0',
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
