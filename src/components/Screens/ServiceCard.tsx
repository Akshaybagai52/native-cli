import React from "react";
import { View, Image } from "react-native";
import { Text } from 'react-native-paper';
import { styles } from "../styles/screen/ServiceCardStyles";
const technologies = [
  "https://i.ibb.co/BtsNCrM/javascript.png",
  "https://i.ibb.co/r3nsgcp/react.png",
  "https://i.ibb.co/GMhG3yT/php.png",
  "https://i.ibb.co/9ZCrGvq/wordpress.png",
  "https://i.ibb.co/Gv96yTY/flutter.png",
  "https://i.ibb.co/Dr6W9kX/html.png",
  "https://i.ibb.co/LSPwKFj/angularjs.png",
  "https://i.ibb.co/RNTVJ6h/typescript.png",
];

export const ServiceCard = () => {
  return (
    <View>
      <Text style={styles.title}><Text style={styles.titleLetter}>T</Text>echnologies We Use</Text>
      <View>

      </View>
      <View style={styles.imageRow}>
        {technologies.map((url, index) => (
          <Image key={index} source={{ uri: url }} style={styles.image} />
        ))}
      </View>
    </View>
  );
};

