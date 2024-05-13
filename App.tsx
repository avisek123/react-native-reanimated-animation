import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const App = () => {
  const animation = useSharedValue(0);
  const [clicked, setClicked] = React.useState(false);
  const animationStyle = useAnimatedStyle(() => {
    return {transform: [{translateX: animation.value}]};
  });
  const handleAnimation = () => {
    if (clicked) {
      animation.value = withSpring(100);
    } else {
      animation.value = withSpring(-100);
    }
    setClicked(!clicked);
  };
  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={[
          {
            backgroundColor: 'orange',
            height: 100,
            width: 100,
          },
          animationStyle,
        ]}
      />
      <TouchableOpacity onPress={handleAnimation} style={styles.btnWrapper}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

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
