import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import Colors from './src/constants/Colors';
import './global.css';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar backgroundColor={Colors.background} barStyle="light-content" />
    </SafeAreaProvider>
  );
};

export default App;
