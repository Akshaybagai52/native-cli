import React from 'react';
import {
  View,
  Image,
  ScrollView,
  ImageBackground,
  Button, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Text } from 'react-native-paper';
import { styles } from '../styles/screen/WebDesignStyles';

const details = [
  {
    iconName: 'users',
    iconColor: 'blue',
    text: "Align your website's design with your customers' needs.",
  },
  {
    iconName: 'chrome',
    iconColor: 'orange',
    text: 'Collect, analyze, and combine user interactions to give your website its final shape.',
  },
  {
    iconName: 'globe',
    iconColor: 'green',
    text: 'Creating a website that is scalable, accessible, and interactive.',
  },
  {
    iconName: 'users',
    iconColor: 'purple',
    text: 'Designing a visually appealing and enticing website.',
  },
  {
    iconName: 'globe',
    iconColor: 'black',
    text: 'Refine concepts dynamically to achieve the best results.',
  },
  {
    iconName: 'chrome',
    iconColor: 'red',
    text: 'Create and maintain prototypes that reflect the best user experience.',
  },
];
const IMAGE_DATA = [
  'https://i.postimg.cc/MX2fChGT/19197357.png',
  'https://i.postimg.cc/MX2fChGT/19197357.png',
  'https://i.postimg.cc/MX2fChGT/19197357.png',
  // Add more image URLs here
];

const WebDesigning = ({ navigation }: any) => {
  const renderItem = ({ item }: any) => (
    <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
  );
  return (
    <View style={{ padding: 20 }}>
      <ScrollView>
        <ImageBackground
          source={{
            uri: 'https://img.freepik.com/free-photo/online-web-design_53876-95309.jpg?size=626&ext=jpg&uid=R80792571&ga=GA1.2.545706177.1659322197&semt=sph',
          }}
          style={{
            height: 200,
            width: '100%',
            flex: 1,
            justifyContent: 'center',
          }}>
          <View style={{ padding: 30 }}>
            <Text style={{ color: 'white', fontSize: 21 }}>
              Best Web Designing Service
            </Text>
            <Text style={{ color: 'white' }}>
              Creating Unique Web Designs, Bringing Your Websites Back To Life!
            </Text>
          </View>
        </ImageBackground>
        <Text style={{ fontSize: 16, marginTop: 15 }}>
          <Text style={{ fontSize: 22, fontWeight: '700' }}>
            We use cutting-edge, interactive, and future-ready web designs to
            propel your business's growth and profits.{'\n'}
            {'\n'}
          </Text>
          <Text style={{ color: '#bb372a', fontWeight: '700' }}>
            Baseline IT Development
          </Text>{' '}
          is a premier web design company in Mohali that strives to assist
          clients in obtaining an immersive, appealing, and result-driven
          website by utilizing the best web design technologies. In order to set
          your website apart from the competition, our creative team of the best
          web designers always puts their best foot forward - ensuring your
          success. Given how important an engaging website can be to your growth
          and success, ignoring the design of your website can be a big mistake.
          {'\n'}
          {'\n'}
          It all goes through your website today, whether it's about increasing
          sales or generating leads. Every website we develop and design will
          thus be finalized after extensive analysis and research. Before
          designing your website, our skilled website designers in Mohali
          consider all performance factors, the latest design trends, search
          factors, and more.{'\n'}
        </Text>
        {/* <Image
          source={{uri: 'https://i.postimg.cc/MX2fChGT/19197357.png'}}
          style={{height: 350, width: '100%'}}
        /> */}
        <View style={styles.container}><FlatList
          data={IMAGE_DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        /></View>

        <View>
          <Text style={styles.headingText}>Why Choose US ?</Text>
          {details.map((item, index) => (
            <Text style={styles.font16} key={index}>
              <Icon name={item.iconName} size={18} color={item.iconColor} />
              &nbsp; {item.text}
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
export default WebDesigning;
