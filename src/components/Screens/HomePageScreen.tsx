import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import ServiceCards from '../Common/component/Service';
import { useNavigation } from '@react-navigation/native';
import { ServiceCard } from './ServiceCard';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { black } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import ChatPopup from './ChatSection';
import ApplyForm from '../Common/component/ApplyForm';
import ApplyCard from '../Common/component/ApplyCard';
const HomePage = () => {
    const navigation = useNavigation();
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [selectedVal, setSelectedVal] = useState("")
    const ourJobData = [{
        icon: "laptop-code",
        title: "Web designer",
        name: "1",
        content: "We need a Web designer who can design, develop and maintain designing-based projects. JavaScript knowledge would be an asset."
    }, {
        icon: "code",
        title: "Front End Developer",
        name: "2",
        content: "We are #hiring for positions of #frontendevelopers for a leading Software Company, a very prestigious client."
    }, {
        icon: "wordpress",
        title: "Wordpress Developer",
        name: "3",
        content: "You're great at handling both the technical and aesthetic complexities of programming? Our WordPress developers are looking for people like you!"
    }, {
        icon: "pencil-alt",
        title: "Graphic Designers",
        name: "4",
        content: "A creative Graphic Designer with expertise in Adobe Photoshop, and Illustrator is needed to interpret our client's needs and design solutions with high visual impact."
    }]

    const ourServiceData = [{
        icon: "laptop-code",
        title: "Web Development",
        name: "WebDesigning",
        content: "We provide top-notch web development services using the latest technologies."
    }, {
        icon: "digital-ocean",
        title: "Digital marketing",
        name: "DigitalMarketing",
        content: "We offer solutions to build and highlight the online business presence and boost sales."
    }, {
        icon: "php",
        title: "Php developer",
        name: "",
        content: "We design innovative, user-friendly, and result-driven websites for our customers."
    }, {
        icon: "react",
        title: "React.js",
        name: "",
        content: "The ReactJS Web and Mobile app development services we provide are best suited for startups and established enterprises."
    }]
    const handleOpenForm = () => {
        setSelectedVal("")
        setIsFormVisible(true);

    };
    const handleCloseForm = () => {
        setSelectedVal("")

        setIsFormVisible(false);
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
                    <View key={index}><ServiceCards
                        icon={item?.icon} 
                        title={item?.title}
                        content={item?.content}
                        name={item?.name}
                    /></View>
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
                    <View key={index}><ApplyCard
                        data={item}
                        handleInputFunc={handleInputFunc}
                    /></View>
                )}

                {/* Modal to display the form */}
                <Modal visible={isFormVisible} animationType="slide" presentationStyle='pageSheet'>
                    <View style={styles.modalContainer}>
                        <ApplyForm onClose={handleCloseForm} selectedValue={selectedVal} />
                    </View>
                </Modal>
                {/* Contact Section */}

                <View style={styles.contactUsContainer}>
                    <Text style={styles.sectionHeading}>Contact <Text style={styles.redColor}>Us</Text></Text>
                    <Text style={styles.contactText}>Email: hr@baselineitdevelopment.com</Text>
                    <Text style={styles.contactText}>Phone: (+91) 734-074-0007</Text>
                    {/* Add more contact information as needed */}
                </View>
                <ServiceCard />

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
        width: "95%",
        objectFit: "contain",
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
        color: "#000"
    },
    aboutSection: {
        marginBottom: 20,
    },
    careerSection: {
        alignItems: 'baseline',
        marginBottom: 20,
    },
    aboutText: {
        fontSize: 16,
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
    defaultText: { color: 'black' },
    description: {
        fontSize: 16,
        marginBottom: 12,
    },
    description1: {
        fontSize: 16,
        marginTop: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 0,
    },
    button: {
        backgroundColor: '#bb372a',
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: "center",
        bottom: 2,
        width: "38%",
        // left: 105
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default HomePage;
