// HomePageScreen.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ContactUs from './ContactUsScreen';

const Drawer = createDrawerNavigator();

const HomeDrawerScreen = () => {
    return (
        // <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Contact" component={ContactUs} />
            </Drawer.Navigator>
        // </NavigationContainer>
    );
}

export default HomeDrawerScreen;