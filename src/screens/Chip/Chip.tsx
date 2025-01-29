import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Cuisines as InitialCuisines, type CuisineType} from './constant';
import ChipBox from './ChipBox';

const Chip = () => {
  const {top: safeTop} = useSafeAreaInsets();
  const [cuisines, setCuisines] = useState(InitialCuisines);

  const toggleCuisine = useCallback((id: number) => {
    setCuisines(prevCuisines =>
      prevCuisines.map(cuisine =>
        cuisine.id === id ? {...cuisine, selected: !cuisine.selected} : cuisine,
      ),
    );
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: safeTop + 24,
          paddingLeft: 18,
        },
      ]}>
      <Text style={styles.title}>{'What are your favourite cuisines?'}</Text>
      <View style={styles.listContainer}>
        {cuisines.map(cuisine => (
          <ChipBox
            key={cuisine.id}
            label={cuisine.name}
            checked={cuisine.selected}
            onPress={() => toggleCuisine(cuisine.id)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontFamily: 'SF-Pro-Rounded-Bold',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    marginTop: 24,
    paddingRight: 12,
  },
});

export default Chip;
