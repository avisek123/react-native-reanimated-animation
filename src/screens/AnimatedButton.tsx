import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedBtnLoader2 = () => {
  const animatedWidth = useSharedValue(250);
  const anmatedRadius = useSharedValue(20);
  const [btnClicked, setBtnClicked] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
      borderRadius: anmatedRadius.value,
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AnimatedBtn
        style={[
          {
            width: 250,
            height: 50,
            backgroundColor: 'purple',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          },
          animatedStyle,
        ]}
        onPress={() => {
          if (animatedWidth.value == 250) {
            animatedWidth.value = withTiming(50, {duration: 500});
            anmatedRadius.value = withTiming(25, {duration: 500});
            setBtnClicked(true);
          } else {
            animatedWidth.value = withTiming(250, {duration: 500});
            anmatedRadius.value = withTiming(20, {duration: 500});
            setBtnClicked(false);
          }
        }}>
        {btnClicked ? (
          <ActivityIndicator size={'large'} color={'white'} />
        ) : (
          <Text style={{color: 'white', fontSize: 20}}>Login</Text>
        )}
      </AnimatedBtn>
    </View>
  );
};

export default AnimatedBtnLoader2;
