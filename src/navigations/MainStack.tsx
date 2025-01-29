import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainStackParams} from '../../types/allRoute';
import Home from '../screens/Home';
import Spring from '../../animations/Spring';
import InterPolet from '../screens/InterPolet';
import Dragble from '../screens/DraggableAnimation/Dragble';
import InstaGramAnimation from '../screens/InstagramDoubleTapAnimation/InstaGramAnimation';
import SearchAnimation from '../screens/SearchAnimation/SearchAnimation';
import AnimatedButton from '../screens/AnimatedLoaderButton/AnimatedButton';
import TabAnimation from '../screens/TabAnimation/TabAnimation';
import NumberVibrateAnimation from '../screens/NumberVibrateAnimation/NumberVibrateAnimation';
import Skeleton from '../screens/SkeletonLoader/Skeleton';
import AnimatedToastScreen from '../screens/AnimatedToast/AnimatedToastScreen';
import Fab from '../screens/Fab/Fab';

import ChangeTheme from '../screens/ChangeTheme/ChangeTheme';
import Accordian from '../screens/Accordian/Accordian';
import Fab_One from '../screens/Fab_One/Fab_One';
import Chip from '../screens/Chip/Chip';
import Fab_Two from '../screens/Fab_Two.tsx/Fab_Two';

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
      <Stack.Screen name="Sekeleton" component={Skeleton} />
      <Stack.Screen
        name="NumberVibrateAnimation"
        component={NumberVibrateAnimation}
      />
      <Stack.Screen
        name="AnimatedToastScreen"
        component={AnimatedToastScreen}
      />
      <Stack.Screen name="Fab" component={Fab} />

      <Stack.Screen name="ChangeTheme" component={ChangeTheme} />
      <Stack.Screen name="Accordian" component={Accordian} />
      <Stack.Screen name="Fab_One" component={Fab_One} />
      <Stack.Screen name="Chip" component={Chip} />
      <Stack.Screen name="Fab_Two" component={Fab_Two} />
    </Stack.Navigator>
  );
};

export default MainStack;
