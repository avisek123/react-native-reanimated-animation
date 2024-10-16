import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Router from './src/navigations/Router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
