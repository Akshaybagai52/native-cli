import React, { useEffect, useState } from 'react';
import GetStartedScreen from './src/components/Screens/GetStartedScreen';
import WebDesigning from './src/components/Screens/WebDesigning';
import ContactUs from './src/components/Screens/ContactUsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DigitalMarket from './src/components/ScreenPage/DigitalMarket';
import LoginScreen from './src/components/Screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from './src/components/Screens/HomePageScreen';
import CustomDrawerContent from './src/components/styles/common/Customization';
export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer: any = createDrawerNavigator();

  const [initialRoute, setInitialRoute] = useState('Login');

  useEffect(() => {
    // Check if the user has previously logged in
    const checkIfUserLoggedIn = async () => {
      const userData = await AsyncStorage.getItem('authUserData');
      if (userData) {
        setInitialRoute('GetStarted');

      } else {
        setInitialRoute('Login');
      }
    };

    checkIfUserLoggedIn();
  }, []);

  const HomeDrawer = () => (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props: any) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
    </Drawer.Navigator>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomeDrawer}
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
