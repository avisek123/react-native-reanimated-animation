import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainStackParams} from '../../types/allRoute';
import Home from '../screens/Home';
import Spring from '../../animations/Spring';
import InterPolet from '../screens/InterPolet';

const Stack = createNativeStackNavigator<MainStackParams>();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Spring" component={Spring} />
      <Stack.Screen name="InterPolet" component={InterPolet} />
    </Stack.Navigator>
  );
};

export default MainStack;
