import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import GetStartedScreen from './src/components/Screens/GetStartedScreen';
import HomePageScreen from './src/components/Screens/HomePageScreen';
import WebDesigning from './src/components/Screens/WebDesigning';
import ContactUs from './src/components/Screens/ContactUsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { Career } from './src/components/Screens/Career';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePageScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WebDesigning" component={WebDesigning} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        {/* <Stack.Screen name="Career" component={Career} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
