import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './js/screens/HomeScreen';
import ProfileScreen from './js/screens/ProfileScreen';
import LoginScreen from './js/screens/LoginScreen';

const AppStack = createStackNavigator();

export default class App extends Component {
    render() {
      return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Home" component={HomeScreen}></AppStack.Screen>
                <AppStack.Screen name="Profile" component={ProfileScreen}></AppStack.Screen>
                <AppStack.Screen name="Login" component={LoginScreen}></AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>
      );
    }
  }