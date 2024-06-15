import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonLoader from './SkeletonLoader';

const Skeleton = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 10,
        }}>
        <SkeletonLoader
          gradientStyle={{
            width: 300,
            height: 300,
          }}
          wrapperStyle={{
            width: 130,
            height: 130,
            borderRadius: 100,
          }}
        />
        <View
          style={{
            marginTop: 20,
            marginLeft: 10,
          }}>
          <SkeletonLoader
            gradientStyle={{
              width: 300,
              height: 300,
            }}
            wrapperStyle={{
              width: 350,
              height: 50,
              borderRadius: 5,
            }}
          />
          <SkeletonLoader
            gradientStyle={{
              width: 300,
              height: 300,
            }}
            wrapperStyle={{
              width: 350,
              height: 50,
              borderRadius: 5,
              marginTop: 10,
            }}
          />
          <SkeletonLoader
            gradientStyle={{
              width: 300,
              height: 300,
            }}
            wrapperStyle={{
              width: 350,
              height: 50,
              borderRadius: 5,
              marginTop: 20,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Skeleton;

const styles = StyleSheet.create({});
