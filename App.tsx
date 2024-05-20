import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Spring from './animations/Spring';
import InterPolet from './animations/InterPolet';
import Home from './src/screens/Home';
import Router from './src/navigations/Router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Spring /> */}
      {/* <InterPolet /> */}
      {/* <Home /> */}
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
