import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const SearchAnimation = () => {
  const animation = useSharedValue(0);
  const [val, SetVal] = React.useState(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value === 1
          ? withTiming(300, {duration: 500})
          : withTiming(0, {duration: 500}),
    };
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={[
          {
            width: 300,
            height: 70,
            backgroundColor: '#fff',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
          },
          animatedStyle,
        ]}>
        <TextInput
          style={{
            width: '85%',
          }}
          placeholder="Search here"
        />
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => {
            if (animation.value) {
              animation.value = 0;
              SetVal(0);
            } else {
              animation.value = 1;
              SetVal(1);
            }
          }}>
          <Image
            source={
              val === 0
                ? require('../assets/image/search-icon.png')
                : require('../assets/image/close.png')
            }
            style={{
              width: 30,
              height: 30,
              borderRadius: 10,
            }}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SearchAnimation;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    padding: 20,
  },
});
