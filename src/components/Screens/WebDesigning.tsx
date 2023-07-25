import React from "react";
import {
  View,

  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Text } from 'react-native-paper';


const WebDesigning = ({ navigation }: any) => {
  return (
    <View style={{ padding: 20 }}>
      <ScrollView>
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/free-photo/online-web-design_53876-95309.jpg?size=626&ext=jpg&uid=R80792571&ga=GA1.2.545706177.1659322197&semt=sph",
          }}
          style={{
            height: 200,
            width: "100%",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <View style={{ padding: 30 }}>
            <Text style={{ color: "white", fontSize: 21 }}>
              Best Web Designing Service
            </Text>
            <Text style={{ color: "white" }}>
              Creating Unique Web Designs, Bringing Your Websites Back To Life!
            </Text>
          </View>
        </ImageBackground>
        <Text style={{ fontSize: 16, marginTop: 15 }}>
          <Text style={{ fontSize: 22, fontWeight: '700' }}>
            We use cutting-edge, interactive, and future-ready web designs to
            propel your business's growth and profits.{"\n"}
            {"\n"}
          </Text>
          <Text style={{ color: "#bb372a", fontWeight: '700' }}>
            Baseline IT Development
          </Text>{" "}
          is a premier web design company in Mohali that strives to assist
          clients in obtaining an immersive, appealing, and result-driven
          website by utilizing the best web design technologies. In order to set
          your website apart from the competition, our creative team of the best
          web designers always puts their best foot forward - ensuring your
          success. Given how important an engaging website can be to your growth
          and success, ignoring the design of your website can be a big mistake.
          {"\n"}
          {"\n"}
          It all goes through your website today, whether it's about increasing
          sales or generating leads. Every website we develop and design will
          thus be finalized after extensive analysis and research. Before
          designing your website, our skilled website designers in Mohali
          consider all performance factors, the latest design trends, search
          factors, and more.{"\n"}
        </Text>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity> */}

        <Image
          source={{ uri: "https://i.postimg.cc/MX2fChGT/19197357.png" }}
          style={{ height: 350, width: "100%" }}
        />
        <View>
          <Text style={styles.headingText}>Why Choose US ?</Text>
          <Text style={styles.font16}>
            <Icon name="users" size={18} color="blue" />
            &nbsp; Align your website's design with your customers' needs.
          </Text>
          <Text style={styles.font16}>
            <Icon name="chrome" size={18} color="orange" />
            &nbsp; Collect, analyze, and combine user interactions to give your
            website its final shape.
          </Text>
          <Text style={styles.font16}>
            <Icon name="globe" size={18} color="green" />
            &nbsp; Creating a website that is scalable, accessible, and
            interactive.
          </Text>
          <Text style={styles.font16}>
            <Icon name="users" size={18} color="purple" />
            &nbsp; Designing a visually appealing and enticing website.
          </Text>
          <Text style={styles.font16}>
            <Icon name="globe" size={18} color="black" />
            &nbsp; Refine concepts dynamically to achieve the best results.
          </Text>
          <Text style={styles.font16}>
            <Icon name="chrome" size={18} color="red" />
            &nbsp; Create and maintain prototypes that reflect the best user
            experience.
          </Text>
        </View>
        <Text style={styles.headingText}>Still Unsure ?</Text>
        <Button title="Contact Us" color="#bb372a" onPress={() => navigation.navigate('ContactUs')} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
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
    backgroundColor: "#bb372a",
    padding: 15,
    borderRadius: 5,
    width: "28%",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default WebDesigning;
