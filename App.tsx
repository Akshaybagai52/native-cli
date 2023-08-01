import React from 'react';
import GetStartedScreen from './src/components/Screens/GetStartedScreen';
import HomePageScreen from './src/components/Screens/HomePageScreen';
import WebDesigning from './src/components/Screens/WebDesigning';
import ContactUs from './src/components/Screens/ContactUsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DigitalMarket from './src/components/ScreenPage/DigitalMarket';
import LoginScreen from './src/components/Screens/LoginScreen';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="WebDesigning" component={WebDesigning} />
        <Stack.Screen name="DigitalMarketing" component={DigitalMarket} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
