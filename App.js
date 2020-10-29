import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Contact from './src/components/Contact/Contact';
import Details from './src/components/Contact/Details';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default class App extends Component {
  constructor() {
    super();
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Contact" component={Contact}  options={{ title: 'Contacts' }}/>
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}