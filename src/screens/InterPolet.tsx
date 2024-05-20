import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const InterPolet = () => {
  const [isClick, setIsClick] = React.useState(false);
  const animation = useSharedValue(1);
  const animationStyle = useAnimatedStyle(() => {
    const width = interpolate(animation.value, [1, 0], [100, 200]);
    const bgColor = interpolateColor(
      animation.value,
      [1, 0],
      ['orange', 'purple'],
    );
    const borderRadius = interpolate(animation.value, [1, 0], [0, 100]);
    return {
      width: width,
      height: width,
      backgroundColor: bgColor,
      borderRadius: borderRadius,
    };
  });
  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'orange',
          },
          animationStyle,
        ]}
      />
      <TouchableOpacity
        onPress={() => {
          if (isClick) {
            animation.value = withTiming(1, {duration: 1000});
          } else {
            animation.value = withTiming(0, {duration: 1000});
          }
          setIsClick(!isClick);
        }}
        style={styles.btnWrapper}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InterPolet;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnWrapper: {
    width: 300,
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
