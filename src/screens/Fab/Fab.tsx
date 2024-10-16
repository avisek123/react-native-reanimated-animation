import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Fab = () => {
  // NOTE: Initialize shared values for animation state.
  const firstValue = useSharedValue(30); // NOTE: Represents the bottom position of the first icon.
  const secondValue = useSharedValue(30); // NOTE: Represents the bottom position of the second icon.
  const thirdValue = useSharedValue(30); // NOTE: Represents the bottom position of the third icon.
  const isOpen = useSharedValue(false); // NOTE: A boolean flag indicating if the menu or state is open.

  // NOTE: Create a derived value based on the `isOpen` state.
  // NOTE: If `isOpen.value` is true, the progress smoothly transitions to 1 using `withTiming`.
  // NOTE: If `isOpen.value` is false, the progress transitions back to 0 using `withTiming`.
  const progress = useDerivedValue(() =>
    isOpen.value ? withTiming(1) : withTiming(0),
  );

  const handlePress = () => {
    // NOTE: Define the animation configuration using a cubic Bezier curve for easing.
    // NOTE: This creates a bouncy feel in the animation.
    const config = {
      easing: Easing.bezier(0.68, -0.6, 0.32, 1.6), // NOTE: Custom easing curve for smooth motion
      duration: 500, // NOTE: Duration of the animation in milliseconds
    };

    // NOTE: Check if the `isOpen` value is true (i.e., the component is currently open).
    if (isOpen.value) {
      // NOTE: Close the component with a smooth timing animation to 30.
      firstValue.value = withTiming(30, config);

      // NOTE: Close the second value with a small delay (50ms) for a staggered effect.
      secondValue.value = withDelay(50, withTiming(30, config));

      // NOTE: Close the third value with a larger delay (100ms) for a more noticeable stagger.
      thirdValue.value = withDelay(100, withTiming(30, config));
    } else {
      // NOTE: Open the first value with a spring animation, delayed by 200ms for a more dynamic feel.
      firstValue.value = withDelay(200, withSpring(130));

      // NOTE: Open the second value with a spring animation, delayed by 100ms.
      secondValue.value = withDelay(100, withSpring(210));

      // NOTE: Open the third value immediately with a spring animation.
      thirdValue.value = withSpring(290);
    }

    // NOTE: Toggle the `isOpen` state to the opposite of its current value (open or close).
    isOpen.value = !isOpen.value;
  };

  const firstIcon = useAnimatedStyle(() => {
    // NOTE: Interpolate the `firstValue` to calculate the scale for the icon.
    // NOTE: When `firstValue.value` is 30, the scale will be 0 (invisible).
    // NOTE: When `firstValue.value` is 130, the scale will be 1 (fully visible).
    const scale = interpolate(
      firstValue.value, // NOTE: Input value for interpolation
      [30, 130], // NOTE: Range of input values
      [0, 1], // NOTE: Corresponding range of output values
      Extrapolation.CLAMP, // NOTE: Clamps the value to prevent it from exceeding the range
    );

    // NOTE: Return the animated styles for the first icon.
    return {
      bottom: firstValue.value, // NOTE: Position the icon based on `firstValue`
      transform: [{scale: scale}], // NOTE: Apply the scale transformation to the icon
    };
  });

  const secondIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      secondValue.value,
      [30, 210],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {
      bottom: secondValue.value,
      transform: [{scale: scale}],
    };
  });

  const thirdIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      thirdValue.value,
      [30, 290],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {
      bottom: thirdValue.value,
      transform: [{scale: scale}],
    };
  });

  const plusIcon = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${progress.value * 45}deg`}],
    };
  });

  return (
    <View style={styles.container}>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 40,
          fontWeight: 'bold',
          fontSize: 30,
          color: '#000',
        }}>
        FAB BUTTON
      </Text>
      <Animated.View style={[styles.contentContainer, thirdIcon]}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('./assets/PenIcon.png')} style={styles.icon} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.contentContainer, secondIcon]}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require('./assets/FileIcon.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.contentContainer, firstIcon]}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require('./assets/FolderIcon.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </Animated.View>
      <Pressable
        style={styles.contentContainer}
        onPress={() => {
          handlePress();
        }}>
        <Animated.View style={[styles.iconContainer, plusIcon]}>
          <Image
            source={require('./assets/PlusIcon.png')}
            style={styles.icon}
          />
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default Fab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'purple',
    position: 'absolute',
    bottom: 30,
    right: 30,
    borderRadius: 50,
  },
  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 26,
    height: 26,
  },
});
