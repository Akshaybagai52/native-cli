import React, { useRef, useState } from 'react';
import {
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Button,
    FlatList,
} from 'react-native';
import { Text } from 'react-native-paper';
import { details, IMAGE_DATA } from '../Common/data/variables';
import { styles } from '../styles/screen/DigitalmarketStyles';
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
                <Text style={{ fontSize: 16, marginTop: 15 }}>
                    <Text style={{ fontSize: 22, fontWeight: '700' }}>
                        Nowadays, no online business can imagine its existence without incorporating digital marketing services into its marketing and growth strategies. Digital marketing is the norm, the future, and the face of this technologically advanced world.{'\n'}
                        {'\n'}
                    </Text>
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
export default DigitalMarket;
