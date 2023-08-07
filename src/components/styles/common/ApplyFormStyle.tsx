import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    parent: {
        width: "100%",
    },
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "grey"
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 15,
        color: "black"
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 6,
        marginBottom: 15,
    },
    picker: {
        height: 60,
    },
    cvUpload: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cvUploadText: {
        color: '#000',
    },
    submitButton: {
        backgroundColor: '#bb372a',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ccc',
        borderRadius: 6,
        alignSelf: 'flex-end',
    },
    closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});