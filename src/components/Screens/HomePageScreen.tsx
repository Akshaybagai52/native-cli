import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, Modal, TouchableOpacity, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import { ServiceCard } from './ServiceCard';
import ChatPopup from './ChatSection';
import ApplyForm from '../Common/component/ApplyForm';
import Cards from '../Common/component/Card';
import { styles } from '../styles/screen/HomeStyles';
import { ourJobData, ourServiceData } from '../Common/data/variables';
import { useNavigation } from '@react-navigation/native';
import Chatbot from './Chatbot';

const HomePage = () => {
    const navigation = useNavigation() as any;
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [selectedVal, setSelectedVal] = useState("")
    const handleOpenForm = () => {
        setSelectedVal("")
        setIsFormVisible(!isFormVisible);
    };
    const handleInputFunc = (e: any) => {
        setSelectedVal(e ?? "")
    }
    useEffect(() => {
        if (selectedVal !== "") {
            setIsFormVisible(true);
        }
    },
        [selectedVal])

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
                    <Text style={styles.sectionHeading}>About<Text style={styles.redColor}> Us </Text></Text>
                    <Text style={styles.aboutText}>
                        The baseline development group is focused on web services and solution with offices in Mohali and USA. We serve clients all around the world. The inner working of our website have proven vital to our success in online marketing. Connected learning, enhancements and expanding our affiliation with audience members have been our mantras.
                    </Text>
                </View>

                {/* Services Section */}
                <View style={styles.aboutSection}>
                    <Text style={styles.sectionHeading}>Our <Text style={styles.redColor}>Services</Text></Text></View>
                {ourServiceData.map((item, index) =>
                    <View key={index}>
                        <Cards
                            data={item}
                            handleInputFunc={handleInputFunc}
                        />
                    </View>
                )}
                {/* Career Section */}
                <View style={styles.careerSection}>
                    <Text style={styles.title}>Join <Text style={styles.redColor}>Us</Text></Text></View>
                <Text style={styles.description}>
                    Baseline IT Development has a team of professionals with one mission of empowering lives through intense solutions of technology. We invite clients, partners, and employees to join us for business development as well as career development.
                </Text>
                <TouchableOpacity style={styles.button} onPress={handleOpenForm}>
                    <Text style={styles.buttonText}>View Openings</Text>
                </TouchableOpacity>
                <Text style={styles.description1}>
                    Baseline IT Development offers a great working environment with the best resources in IT industry.
                    We need people with great motivation, good communication skills, and result oriented approach.
                </Text>
                {ourJobData.map((item, index) =>
                    <View key={index}><Cards
                        applyType
                        data={item}
                        handleInputFunc={handleInputFunc}
                    /></View>
                )}

                {/* Modal to display the form */}
                <Modal visible={isFormVisible} animationType="slide" presentationStyle='pageSheet'>
                    <View style={styles.modalContainer}>
                        <ApplyForm onClose={handleOpenForm} selectedValue={selectedVal} />
                    </View>
                </Modal>
                {/* Contact Section */}

                <View style={styles.contactUsContainer}>
                    <Text style={styles.sectionHeading}>Contact <Text style={styles.redColor}>Us</Text></Text>
                    <Text style={styles.contactText}>Email: hr@baselineitdevelopment.com</Text>
                    <Text style={styles.contactText}>Phone: (+91) 734-074-0007</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ContactUs")}>
                        <Text style={styles.buttonText}>Contact Us</Text>
                    </TouchableOpacity>
                    {/* Add more contact information as needed */}
                </View>
                <ServiceCard />

            </ScrollView>
        </View>
    );
};
export default HomePage;
