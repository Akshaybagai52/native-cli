import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
interface Iprops {
    icon: string
    title: string
    name: string
    content: string
}
interface IDataprops {
    data: Iprops,
    handleInputFunc: any | void
}
const ApplyCard = ({ data, handleInputFunc }: IDataprops) => {
    return (

        <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
                <Icon name={data?.icon} size={24} color="#bb372a" />
                <Title style={styles.cardTitle}>{data?.title}</Title>
                <Paragraph style={styles.cardContentText}>{data?.content}</Paragraph>
                {/* Apply Now Button */}
                <TouchableOpacity style={styles.applyButton} onPress={() => handleInputFunc(data?.name)}>
                    <Text style={styles.applyButtonText}>Apply Now</Text>
                </TouchableOpacity>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        padding: 16,
        borderRadius: 8,
        elevation: 3, // For Android shadow
    },
    cardContent: {
        alignItems: 'center',
    },
    cardTitle: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        // flex: 1,
    },
    cardContentText: {
        marginTop: 10,
    },
    arrowIcon: {
        marginLeft: 'auto',
        color: '#bb372a'
    },
    applyButton: {
        backgroundColor: '#',
        padding: 8,
        borderRadius: 6,
        alignSelf:'baseline',
        top: 12
    },
    applyButtonText: {
        color: '#bb372a',
        fontSize: 14,
    },
});

export default ApplyCard;
