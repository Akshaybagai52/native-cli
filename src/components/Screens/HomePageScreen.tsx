import React from 'react';
import { View,  StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import ServiceCards from '../Common/component/Service';
import { useNavigation } from '@react-navigation/native';
import { ServiceCard } from './ServiceCard';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { black } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import ChatPopup from './ChatSection';
const HomePage = () => {
    const navigation = useNavigation();

    const ourServiceData = [{
        icon: "laptop-code",
        title: "Web Development",
        content: "We provide top-notch web development services using the latest technologies."
    }, {
        icon: "file-code",
        title: "Php developer",
        content: "We design innovative, user-friendly, and result-driven websites for our customers."
    }, {
        icon: "bullhorn",
        title: "Digital marketing",
        content: "We offer solutions to build and highlight the online business presence and boost sales."
    }]

    return (
        <View style={styles.container}>
            <View style={styles.chatIcon}>
            <ChatPopup />


            </View>

        <ScrollView>
            {/* Header */}
            <View style={styles.header}>
                <Image source={require('../../../assets/baselinelogo.png')} style={styles.logo} />
            </View>

            {/* About Section */}
            <View style={styles.aboutSection}>
                <Text style={styles.sectionHeading}>About<Text style={styles.redColor}>Us </Text></Text>
                <Text style={styles.aboutText}>
                    The baseline development group is focused on web services and solution with offices in Mohali and USA. We serve clients all around the world. The inner working of our website have proven vital to our success in online marketing. Connected learning, enhancements and expanding our affiliation with audience members have been our mantras.
                </Text>
            </View>

            {/* Services Section */}
            <View style={styles.servicesSection}>
                <Text style={styles.sectionHeading}>Our <Text style={styles.redColor}>Services</Text></Text></View>
            {ourServiceData.map((item, index) =>
                <View key={index}><ServiceCards
                    icon={item?.icon} // Replace with your desired icon name from FontAwesome5
                    title={item?.title}
                    content={item?.content}
                /></View>
            )}

            {/* Contact Section */}

            <View style={styles.contactUsContainer}>
            <Icon name="arrow-right" size={30} color="#bb372a" />
                <Text style={styles.sectionHeading}>Contact <Text style={styles.redColor}>Us</Text></Text>
                <Text style={styles.contactText}>Email: hr@baselineitdevelopment.com</Text>
                <Text style={styles.contactText}>Phone: (+91) 734-074-0007</Text>
                {/* Add more contact information as needed */}
            </View>
            <ServiceCard />
            {/* <FontAwesome5 name="arrow-right" size={20} color="#333" style={styles.arrowIcon} />
                <Text style={styles.contactUsTitle}>Contact Us</Text> */}

        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    chatIcon: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#bb372a',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9,
      },
    logo: {
        width: 350,
        height: 105,
        marginRight: 10,
    },
    companyName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    sectionHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color:"#000"
    },
    aboutSection: {
        marginBottom: 30,
    },
    aboutText: {
        fontSize: 16,
    },
    servicesSection: {
        marginBottom: 30,
    },
    serviceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    serviceIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    serviceText: {
        fontSize: 16,
    },
    contactSection: {
        marginTop: 20
    },
    contactText: {
        fontSize: 16,
        marginBottom: 20
    },
    redColor: {
        color: '#bb372a',
    },
    contactUsContainer: {
        alignItems: 'baseline',
        marginBottom: 10,
    },
    arrowIcon: {
        marginRight: 10,
    },
    contactUsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    defaultText: {color: 'black'},
});

export default HomePage;
