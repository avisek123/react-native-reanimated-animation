import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Spring from './animations/Spring';
import InterPolet from './animations/InterPolet';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Spring /> */}
      <InterPolet />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
