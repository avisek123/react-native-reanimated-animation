import {
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const buttons = [
  {
    id: 1,
    title: 'Tab 1',
  },
  {
    id: 2,
    title: 'Tab 2',
  },
];
const TabAnimation = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [dimensions, setDimensions] = React.useState({
    height: 200,
    width: 100,
  });
  const buttonWidth = dimensions.width / buttons.length;
  const tabPositionXVal = useSharedValue(0);

  const onTabBarLayOut = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const handlePress = (index: number) => {
    setSelectedTab(index);
  };

  const onTabPress = (index: number) => {
    tabPositionXVal.value = withTiming(buttonWidth * index, {}, () => {
      runOnJS(handlePress)(index);
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: tabPositionXVal.value,
        },
      ],
    };
  });

  return (
    <View style={styles.btnWrapper}>
      <Animated.View
        style={[
          animatedStyle,
          {
            position: 'absolute',
            backgroundColor: '#fff',
            borderRadius: 15,
            marginHorizontal: 5,
            height: dimensions.height - 8,
            width: buttonWidth - 10,
          },
        ]}
      />
      <View
        onLayout={onTabBarLayOut}
        style={{
          flexDirection: 'row',
        }}>
        {buttons?.map((btn, index) => {
          const color = selectedTab === index ? 'purple' : 'white';
          return (
            <Pressable
              style={styles.btnContainer}
              key={index}
              onPress={() => {
                onTabPress(index);
              }}>
              <Text
                style={{
                  color: color,
                  alignSelf: 'center',
                  fontWeight: '600',
                }}>
                {btn?.title}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default TabAnimation;

const styles = StyleSheet.create({
  btnWrapper: {
    backgroundColor: 'purple',
    borderRadius: 20,
    justifyContent: 'center',
    margin: 20,
  },
  btnContainer: {
    flex: 1,
    paddingVertical: 20,
  },
});
