import React, { useRef, useState } from 'react';
import {
    View,
    Image,
    ScrollView,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Button,
    FlatList, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Text } from 'react-native-paper';

const details = [
    {
        text: "10+ Years of experience as a leading digital marketing agency in Mohali.",
    },
    {
        text: 'Driven by technology, innovation, and creativity.',
    },
    {

        text: 'Team of well-trained and knowledgeable digital marketing experts.',
    },
    {

        text: '100% commitment to delivering effective, long-term, and meaningful results.',
    },
    {

        text: 'Quick 24/7 customer help & support.',
    },
];

const IMAGE_DATA = [
    'https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?w=626',
    'https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?w=626',
    'https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?w=626',
    // Add more image URLs here
];
const DigitalMarket = ({ navigation }: any) => {
    const flatListRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState<any>(0); // Add currentIndex state

    return (
        <View style={{ padding: 20 }}>
            <ScrollView>
                <View style={styles.container}>
                    <FlatList
                        data={IMAGE_DATA}
                        renderItem={({ item }) => (
                            <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={true}

                        onLayout={() => {
                            if (currentIndex > 0 && flatListRef.current) {
                                flatListRef.current.scrollToIndex({ index: currentIndex, animated: false });
                            }
                        }}
                    />

                    <View style={styles.arrowsContainer}>
                        <TouchableOpacity style={styles.arrowButton} >
                            {/* Add your left arrow icon here */}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.arrowButton} >
                            {/* Add your right arrow icon here */}
                        </TouchableOpacity>
                    </View>

                </View>

                {/* <ImageBackground
                    source={{
                        uri: 'https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?w=626',
                    }}
                    style={{
                        height: 200,
                        width: '100%',
                        flex: 1,
                        justifyContent: 'center',
                    }}>
                    <View style={{ padding: 30 }}>
                        <Text style={{ color: 'white', fontSize: 21 }}>
                            Best Digital Marketing Company in Mohali, India
                        </Text>
                        <Text style={{ color: 'white' }}>
                            Baseline IT Development - Digital Marketing Services Analyze, Advertise, Optimize - we do it all for your true digital growth!</Text>
                    </View>
                </ImageBackground> */}
                <Text style={{ fontSize: 16, marginTop: 15 }}>
                    <Text style={{ fontSize: 22, fontWeight: '700' }}>
                        Nowadays, no online business can imagine its existence without incorporating digital marketing services into its marketing and growth strategies. Digital marketing is the norm, the future, and the face of this technologically advanced world.{'\n'}
                        {'\n'}
                    </Text>
                    {/* <Text style={{ color: '#bb372a', fontWeight: '700' }}>
                        Baseline IT Development
                    </Text>{' '} */}
                    So, since you're here, we'd like to ask you where you see your company today and in the next 4-5 years. You most likely have no answer to this question!
                    {'\n'}
                    Let us give you a clear answer with the following quote from renowned Czech writer Milan Kundera:

                    {'\n'}
                    {'\n'}
                    <Text style={{ color: '#bb372a', fontWeight: '700', fontStyle: "italic" }}>
                        “Business has only two functions- marketing and innovation.” - Milan Kundera{'\n'}
                    </Text>
                </Text>
                <Image
                    source={{ uri: 'https://baselineitdevelopment.com/assets/images/digital-marketing-image.png' }}
                    style={{ height: 350, width: '100%' }}
                />
                <View>
                    <Text style={styles.headingText}>Our Digital Marketing Services</Text>
                    <Text style={styles.font16} >
                        Name the types of digital marketing services your company provides or specializes in!
                    </Text>
                </View>
                <View>
                    <Text style={styles.headingText}>Why Baseline IT Development For Your Digital Transformation ?</Text>
                    {details.map((item, index) => (
                        <Text style={styles.font16} key={index}>
                            - &nbsp; {item.text}
                        </Text>
                    ))}
                </View>
                <Text style={styles.headingText}>Still Unsure ?</Text>
                <Button
                    title="Contact Us"
                    color="#bb372a"
                    onPress={() => navigation.navigate('ContactUs')}
                />
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: 200, // Adjust the height of the image slider as needed
        marginTop: 20,
    },
    image: {
        width: Dimensions.get('window').width, // Adjust the width of the image as needed
        height: '100%',
    },
    headingText: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    font16: {
        fontSize: 16,
        marginBottom: 5,
    },
    icon: {
        margin: 18,
    },
    button: {
        backgroundColor: '#bb372a',
        padding: 15,
        borderRadius: 5,
        width: '28%',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    arrowsContainer: {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    arrowButton: {
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: '#ccc', // Customize the arrow button styles
        borderRadius: 20,
    },
});
export default DigitalMarket;
