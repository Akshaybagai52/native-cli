import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
export const CustomButton = ({ title, onPress, color }:any) => {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };
  const styles = StyleSheet.create({
    button: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 8, // Adjust this value to change the button's curve
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  