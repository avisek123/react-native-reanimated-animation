import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {MainNavigationProps} from '../../types/allRoute';

const Home = () => {
  const {navigate} = useNavigation<MainNavigationProps>();
  const data = [
    {
      id: 1,
      name: 'Spring Animation',
      onPress: () => {
        navigate('Spring');
      },
    },
    {
      id: 2,
      name: 'Interpolate Animation',
      onPress: () => {
        navigate('InterPolet');
      },
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
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
