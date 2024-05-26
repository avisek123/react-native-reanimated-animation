import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainStackParams} from '../../types/allRoute';
import Home from '../screens/Home';
import Spring from '../../animations/Spring';
import InterPolet from '../screens/InterPolet';
import Dragble from '../screens/Dragble';
import InstaGramAnimation from '../screens/InstaGramAnimation';
import SearchAnimation from '../screens/SearchAnimation';
import AnimatedButton from '../screens/AnimatedButton';
import TabAnimation from '../screens/TabAnimation';
import NumberVibrateAnimation from '../screens/NumberVibrateAnimation';

const Stack = createNativeStackNavigator<MainStackParams>();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Spring" component={Spring} />
      <Stack.Screen name="InterPolet" component={InterPolet} />
      <Stack.Screen name="Dragble" component={Dragble} />
      <Stack.Screen name="InstGramAnimation" component={InstaGramAnimation} />
      <Stack.Screen name="SearchAnimation" component={SearchAnimation} />
      <Stack.Screen name="AnimatedButton" component={AnimatedButton} />
      <Stack.Screen name="TabAnimation" component={TabAnimation} />
      <Stack.Screen
        name="NumberVibrateAnimation"
        component={NumberVibrateAnimation}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
