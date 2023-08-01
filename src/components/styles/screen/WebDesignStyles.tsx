import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    container: {
        height: 300, // Adjust the height of the image slider as needed
        marginTop: 20,
    },
    image: {
        width: Dimensions.get('window').width, // Adjust the width of the image as needed
        height: '100%',
    },
});