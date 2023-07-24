import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export const ServiceCard = () => {
  return (
    <View>
      <Text style={{fontSize:22,marginBottom:20}}><Text style={{fontSize:40, color:"#bb372a"}}>T</Text>echnologies We Use</Text>
      <View style={{flexDirection: "row", justifyContent:"space-between"}}>
        <Image
          source={{
            uri: "https://baselineitdevelopment.com/assets/images/Bigcommerce.png",
          }}
          style={{ height: 120, width: 120 }}
        />

        <Image
          source={{
            uri: "https://baselineitdevelopment.com/assets/images/Angular.png",
          }}
          style={{ height: 120, width: 120 }}
        />
        
      </View>

      <View style={{flexDirection: "row", justifyContent:"center"}}>
        <Image
          source={{
            uri: "https://baselineitdevelopment.com/assets/images/React.png",
          }}
          style={{ height: 120, width: 130 }}
        />
        
      </View>
      <View style={{flexDirection: "row", justifyContent:"space-between"}}>
        <Image
          source={{
            uri: "https://baselineitdevelopment.com/assets/images/wordpress.png",
          }}
          style={{ height: 120, width: 120 }}
        />
        <Image
          source={{
            uri: "https://baselineitdevelopment.com/assets/images/HTML.png",
          }}
          style={{ height: 120, width: 120 }}
        />
        
      </View>
      <View style={{flexDirection: "row", justifyContent:"center"}}>
      <Image
          source={{
            uri: "https://baselineitdevelopment.com/assets/images/PHP.png",
          }}
          style={{ height: 120, width: 130 }}
        />

      </View>

      <View style={{flexDirection: "row", justifyContent:"space-between"}}>
      
        <Image
          source={{
            uri: "https://baselineitdevelopment.com/assets/images/JavaSC.png",
          }}
          style={{ height: 120, width: 120 }}
        />
        
        <Image
          source={{
            uri: "https://baselineitdevelopment.com/assets/images/Flutter.png",
          }}
          style={{ height: 120, width: 120 }}
        />
      </View>
      <View style={{flexDirection: "row", justifyContent:"center"}}>
      <Image
          source={{
            uri: "https://baselineitdevelopment.com/assets/images/SF.png",
          }}
          style={{ height: 120, width: 130 }}
        />

      </View>
    </View>
  );
};
