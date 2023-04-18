import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ComponentScreen from './src/screens/ComponentScreen';
import Header from './src/Component/core-component/Header/Header';
import Registration from './src/screens/Registration/Registration';

import Scanner from './src/Component/core-component/Scanner/Scanner';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style='auto' />
      </View> */}
        <Stack.Screen name='Home' component={ComponentScreen} />
        <Stack.Screen name='Header' component={Header} />
        <Stack.Screen name='Registration' component={Registration} />
        <Stack.Screen name='Scanner' component={Scanner} />
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
