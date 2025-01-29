import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CircleCheck} from 'lucide-react-native';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import {ACTIVE_COLOR, INACTIVE_COLOR} from './constant';
const TimingConfig = {duration: 150};
const ChipBox = ({label, checked, onPress}: any) => {
  const rContainerStyle = useAnimatedStyle(
    () => ({
      backgroundColor: withTiming(
        checked ? 'black' : 'transparent',
        TimingConfig,
      ),
      borderColor: withTiming(
        checked ? ACTIVE_COLOR : INACTIVE_COLOR,
        TimingConfig,
      ),
      paddingHorizontal: checked ? 12 : 20,
    }),
    [checked],
  );
  const rTextStyle = useAnimatedStyle(
    () => ({
      color: withTiming(checked ? ACTIVE_COLOR : INACTIVE_COLOR, TimingConfig),
    }),
    [checked],
  );

  return (
    <Animated.View
      layout={LinearTransition}
      style={[styles.container, rContainerStyle]}
      exiting={FadeOut}
      onTouchEnd={onPress}>
      <Animated.Text style={[styles.label, rTextStyle]}>{label}</Animated.Text>
      {checked && (
        <Animated.View
          entering={FadeIn.duration(350)}
          exiting={FadeOut}
          style={styles.iconContainer}>
          <CircleCheck color={ACTIVE_COLOR} size={20} />
        </Animated.View>
      )}
    </Animated.View>
  );
};

export default ChipBox;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontFamily: 'SF-Pro-Rounded-Bold',
    color: '#fff',
  },
  iconContainer: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 18,
    width: 18,
  },
});
