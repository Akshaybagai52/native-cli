import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
      fontSize: 22,
      marginBottom: 20,
    },
    titleLetter: {
      fontSize: 40,
      color: "#bb372a",
    },
    imageRow: {
      flexDirection: "row",
      marginBottom: 10,
      flexWrap: "wrap"
    },
    image: {
      height: 120,
      width: "48%",
      objectFit: "contain",
      marginBottom: 20
    },
  });