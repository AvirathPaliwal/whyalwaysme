import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DrawerNavigator from './navigation/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
   <NavigationContainer>
      <DrawerNavigator/>
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
