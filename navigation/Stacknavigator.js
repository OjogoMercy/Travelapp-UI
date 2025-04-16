// navigation/StackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import IntroScreen from '../screens/IntroScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
   
  );
};

export default StackNavigator;
