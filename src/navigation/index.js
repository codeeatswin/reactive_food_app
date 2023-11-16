import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import WelcomeScreen from '../screen/WelcomeScreen';

const stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <stack.Screen name='Home' component={HomeScreen} />
        <stack.Screen name='Welcome' component={WelcomeScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
