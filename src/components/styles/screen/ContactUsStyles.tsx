import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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