import {StyleSheet, useColorScheme} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import BottomSheet, {BottomSheetMethods} from './components/BottomSheet';
import Button from './components/Button';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const ChangeTheme = () => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetMethods>(null);

  const [theme, setTheme] = useState<string | null | undefined>(colorScheme);
  const [themeSwitch, setThemeSwitch] = useState<string>('system');

  useEffect(() => {
    if (themeSwitch === 'system') {
      setTheme(colorScheme);
    }
  }, [colorScheme, themeSwitch]);

  const backgroundColorAnimation = useAnimatedStyle(() => {
    return {
      backgroundColor:
        theme === 'dark' ? withTiming('black') : withTiming('white'),
    };
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Animated.View
        style={[
          styles.container,
          {paddingTop: insets.top},
          backgroundColorAnimation,
        ]}>
        <Button bottomSheetRef={bottomSheetRef} theme={theme} />
        <BottomSheet
          ref={bottomSheetRef}
          setTheme={setTheme}
          theme={theme}
          setThemeSwitch={setThemeSwitch}
          themeSwitch={themeSwitch}
        />
      </Animated.View>
    </GestureHandlerRootView>
  );
};

export default ChangeTheme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
