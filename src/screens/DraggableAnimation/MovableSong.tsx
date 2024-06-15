import {useState} from 'react';
import {Dimensions, Platform} from 'react-native';
import Animated, {
  clamp,
  runOnJS,
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {Song} from './Song';
import {objectMove} from './utilies';

const SONG_HEIGHT = 70;
const SONG_MARGIN = 10; // Margin between songs

interface Song {
  id: string;
  title: string;
  artist: string;
  cover: string;
}

enum ScrollDirection {
  None,
  Up,
  Down,
}

export function MovableSong({
  id,
  artist,
  cover,
  title,
  positions,
  containerHeight,
  lowerBound,
  autoScrollDirection,
  songsCount,
}: {
  id: string;
  artist: string;
  cover: string;
  title: string;
  containerHeight: number;
  positions: SharedValue<{[id: string]: number}>;
  lowerBound: SharedValue<number>;
  autoScrollDirection: SharedValue<ScrollDirection>;
  songsCount: number;
}) {
  const [moving, setMoving] = useState(false);
  const positionY = useSharedValue(
    positions.value[id] * (SONG_HEIGHT + SONG_MARGIN),
  );
  const top = useSharedValue(positions.value[id] * (SONG_HEIGHT + SONG_MARGIN));
  const upperBound = useDerivedValue(() => lowerBound.value + containerHeight);
  const targetLowerBound = useSharedValue(lowerBound.value);

  useAnimatedReaction(
    () => positionY.value,
    (positionYValue, previousValue) => {
      if (
        positionYValue !== null &&
        previousValue !== null &&
        positionYValue !== previousValue
      ) {
        if (moving) {
          top.value = positionYValue;
          setPosition(positionYValue, songsCount, positions, id);
          setAutoScroll(
            positionYValue,
            lowerBound.value,
            upperBound.value,
            SONG_HEIGHT,
            autoScrollDirection,
          );
        }
      }
    },
  );

  useAnimatedReaction(
    () => positions.value[id],
    (currentPosition, previousPosition) => {
      if (
        currentPosition !== null &&
        previousPosition !== null &&
        currentPosition !== previousPosition
      ) {
        if (!moving) {
          top.value = withSpring(currentPosition * (SONG_HEIGHT + SONG_MARGIN));
        }
      }
    },
    [moving],
  );

  useAnimatedReaction(
    () => lowerBound.value,
    (currentLowerBound, previousLowerBound) => {
      if (
        currentLowerBound !== null &&
        previousLowerBound !== null &&
        currentLowerBound !== previousLowerBound &&
        moving
      ) {
        const diff = previousLowerBound - currentLowerBound;
        positionY.value -= diff;
      }
    },
    [moving],
  );

  useAnimatedReaction(
    () => autoScrollDirection.value,
    (scrollDirection, previousValue) => {
      if (
        scrollDirection !== null &&
        previousValue !== null &&
        scrollDirection !== previousValue
      ) {
        switch (scrollDirection) {
          case ScrollDirection.Up: {
            targetLowerBound.value = lowerBound.value;
            targetLowerBound.value = withTiming(0, {duration: 1500});
            break;
          }
          case ScrollDirection.Down: {
            const contentHeight = songsCount * (SONG_HEIGHT + SONG_MARGIN);
            const maxScroll = contentHeight - containerHeight;

            targetLowerBound.value = lowerBound.value;
            targetLowerBound.value = withTiming(maxScroll, {duration: 1500});
            break;
          }
          case ScrollDirection.None: {
            targetLowerBound.value = lowerBound.value;
            break;
          }
        }
      }
    },
  );

  useAnimatedReaction(
    () => targetLowerBound.value,
    (targetLowerBoundValue, previousValue) => {
      if (
        targetLowerBoundValue !== null &&
        previousValue !== null &&
        targetLowerBoundValue !== previousValue
      ) {
        if (moving) {
          lowerBound.value = targetLowerBoundValue;
        }
      }
    },
  );

  const gestureHandler = useAnimatedGestureHandler({
    onStart() {
      positionY.value = positions.value[id] * (SONG_HEIGHT + SONG_MARGIN);
      runOnJS(setMoving)(true);
    },
    onActive(event) {
      positionY.value = event.absoluteY + lowerBound.value - SONG_HEIGHT;
    },
    onFinish() {
      const finishPosition = positions.value[id] * (SONG_HEIGHT + SONG_MARGIN);
      top.value = withTiming(finishPosition);
      runOnJS(setMoving)(false);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: 0,
      right: 0,
      top: top.value,
      zIndex: moving ? 1 : 0,
      shadowColor: 'black',
      shadowOffset: {
        height: 0,
        width: 0,
      },
      shadowOpacity: withSpring(moving ? 0.2 : 0),
      shadowRadius: 10,
    };
  }, [moving]);

  return (
    <Animated.View style={animatedStyle}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={{
            maxWidth: '100%',
            marginHorizontal: 20,
          }}>
          <Song artist={artist} cover={cover} title={title} />
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
}

function setPosition(
  positionY: number,
  songsCount: number,
  positions: SharedValue<{[id: string]: number}>,
  id: string,
) {
  'worklet';
  const newPosition = clamp(
    Math.floor(positionY / (SONG_HEIGHT + SONG_MARGIN)),
    0,
    songsCount - 1,
  );

  if (newPosition !== positions.value[id]) {
    positions.value = objectMove(
      positions.value,
      positions.value[id],
      newPosition,
    );
  }
}

function setAutoScroll(
  positionY: number,
  lowerBound: number,
  upperBound: number,
  scrollThreshold: number,
  autoScroll: SharedValue<ScrollDirection>,
) {
  'worklet';
  if (positionY <= lowerBound + scrollThreshold) {
    autoScroll.value = ScrollDirection.Up;
  } else if (positionY >= upperBound - scrollThreshold) {
    autoScroll.value = ScrollDirection.Down;
  } else {
    autoScroll.value = ScrollDirection.None;
  }
}
