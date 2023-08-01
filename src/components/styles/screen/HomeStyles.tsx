import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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