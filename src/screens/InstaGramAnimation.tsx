import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const ImageComponent = Animated.createAnimatedComponent(Image);

const InstaGramAnimation = () => {
  const scale = useSharedValue(0);
  const DoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinshed => {
      if (isFinshed) {
        scale.value = withDelay(100, withSpring(0));
      }
    });
  }, []);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: Math.max(scale.value, 0),
        },
      ],
    };
  });
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}>
      <View style={styles.wrapper}>
        <TapGestureHandler
          numberOfTaps={2}
          maxDelayMs={250}
          onActivated={DoubleTap}>
          <Animated.View>
            <ImageBackground
              source={require('../assets/image/img.png')}
              style={styles.ImgBg}>
              <ImageComponent
                source={require('../assets/image/heart-icon-14.png')}
                style={[
                  {
                    width: 80,
                    height: 80,
                  },
                  animatedStyle,
                ]}
              />
            </ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default InstaGramAnimation;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImgBg: {
    width: width,
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
