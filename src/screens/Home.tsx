import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {MainNavigationProps} from '../../types/allRoute';

const Home = () => {
  const {navigate} = useNavigation<MainNavigationProps>();
  const data = [
    {
      id: 1,
      name: 'Instagram Double Tap Like',
      onPress: () => {
        navigate('InstGramAnimation');
      },
    },
    {
      id: 2,
      name: 'Search Animation',
      onPress: () => {
        navigate('SearchAnimation');
      },
    },
    {
      id: 3,
      name: 'Button Loading Animation',
      onPress: () => {
        navigate('AnimatedButton');
      },
    },

    {
      id: 4,
      name: 'Tab Animation',
      onPress: () => {
        navigate('TabAnimation');
      },
    },
    {
      id: 5,
      name: 'Number Vibrate Animation',
      onPress: () => {
        navigate('NumberVibrateAnimation');
      },
    },
    {
      id: 6,
      name: 'Draggble Animation',
      onPress: () => {
        navigate('Dragble');
      },
    },
    {
      id: 7,
      name: 'Skeleton Loader Animation',
      onPress: () => {
        navigate('Sekeleton');
      },
    },
    {
      id: 8,
      name: 'Animated Toast',
      onPress: () => {
        navigate('AnimatedToastScreen');
      },
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 25,
          color: '#000',
          fontWeight: 'bold',
        }}>
        Animation Using
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 25,
          color: '#000',
          fontWeight: 'bold',
        }}>
        React Native Reanimated
      </Text>
      {data?.map(item => (
        <TouchableOpacity
          onPress={item?.onPress}
          style={styles.buttonWrapper}
          key={item?.id}>
          <Text style={styles.btnText}>
            {item?.id}. {''} {''} {item?.name}
          </Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%',
    marginHorizontal: 20,
  },
  buttonWrapper: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    marginTop: 30,
  },
  btnText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
