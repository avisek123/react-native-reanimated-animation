import React, {ReactNode, useRef, useState} from 'react';

import {
  Animated,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

type HomeWrapperType = {
  children?: ReactNode;
};
export default function BottomTabWrapper({children}: HomeWrapperType) {
  const [currentTab, setCurrentTab] = useState('Home');
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...
  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const menu = [
    {
      id: 1,
      title: 'Home',
      icon: 'home-outline',
      onPress: () => {},
    },

    {
      id: 2,
      title: 'Leads',
      icon: 'grid-outline',
      onPress: () => {
        // navigate('Modules', {
        //   type: 'Leads',
        // });
      },
    },
    {
      id: 3,
      title: 'Contacts',
      icon: 'ios-person-circle-outline',
      onPress: () => {},
    },
    {
      id: 144,
      title: 'Accounts',
      icon: 'person-outline',
      onPress: () => {},
    },

    {
      id: 5,
      title: 'Deals',
      icon: 'pricetag-outline',
      onPress: () => {},
    },
    {
      id: 6,
      title: 'Tasks',
      icon: 'document-outline',
      onPress: () => {},
    },
    {
      id: 7,
      title: 'Meetings',
      icon: 'people-outline',
      onPress: () => {},
    },
    {
      id: 8,
      title: 'Calls',
      icon: 'call-outline',
      onPress: () => {},
    },
    {
      id: 9,
      title: 'Campaign',
      icon: 'basketball-outline',
      onPress: () => {},
    },

    {
      id: 11,
      title: 'Products',
      icon: 'basket-outline',
      onPress: () => {},
    },
    {
      id: 12,
      title: 'Vendors',
      icon: 'business-outline',
      onPress: () => {},
    },

    {
      id: 14,
      title: 'Cases',
      icon: 'compass-outline',
      onPress: () => {},
    },
    {
      id: 15,
      title: 'Solutions',
      icon: 'cog-outline',
      onPress: () => {},
    },
    {
      id: 16,
      title: 'Analytics',
      icon: 'cube-outline',
      onPress: () => {},
    },
    {
      id: 17,
      title: 'Service',
      icon: 'construct-outline',
      onPress: () => {},
    },
    {
      id: 18,
      title: 'Purchase Order',
      icon: 'file-tray-outline',
      onPress: () => {},
    },
    {
      id: 19,
      title: 'Sales Order',
      icon: 'layers-outline',
      onPress: () => {},
    },
  ];
  return (
    <View
      // bg={{
      //   linearGradient: {
      //     colors: [COLORS.PRIMARY, COLORS.SECONDARY],
      //     start: [0, 0],
      //     end: [1.3, 0],
      //   },
      // }}
      style={styles.container}>
      <View style={{justifyContent: 'flex-start', padding: 15}}>
        <Image
          resizeMode="contain"
          alt=""
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
          style={{
            width: 70,
            height: 70,
            borderRadius: 10,
            marginTop: 8,
          }}></Image>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 20,
          }}>
          Demo User
        </Text>
        <TouchableOpacity
          onPress={() => {
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true,
            }).start();

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true,
            }).start();

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true,
            }).start();
            setShowMenu(!showMenu);
          }}>
          <Text
            style={{
              marginTop: 6,
              color: 'white',
            }}>
            View Profile
          </Text>
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexGrow: 1, marginTop: 45}}>
            {
              // Tab Bar Buttons....
            }
            {menu?.map((item, ind) => (
              <TouchableOpacity
                style={{
                  marginBottom: item?.id === 25 ? 30 : 0,
                }}
                key={ind}
                onPress={() => {
                  if (item?.title == 'Logout') {
                    // Do your Stuff...
                  } else {
                    setCurrentTab(item?.title);
                    // Do Actions Here....
                    // Scaling the view...
                    Animated.timing(scaleValue, {
                      toValue: showMenu ? 1 : 0.88,
                      duration: 300,
                      useNativeDriver: true,
                    }).start();

                    Animated.timing(offsetValue, {
                      // YOur Random Value...
                      toValue: showMenu ? 0 : 230,
                      duration: 300,
                      useNativeDriver: true,
                    }).start();

                    Animated.timing(closeButtonOffset, {
                      // YOur Random Value...
                      toValue: !showMenu ? -30 : 0,
                      duration: 300,
                      useNativeDriver: true,
                    }).start();

                    setShowMenu(!showMenu);
                    // setShowMenu(!showMenu);
                    item?.onPress();
                  }
                }}>
                <View
                  style={{
                    width: '80%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 8,
                    backgroundColor:
                      currentTab == item?.title ? 'white' : 'transparent',
                    paddingLeft: 13,
                    paddingRight: 35,
                    borderRadius: 8,
                    marginTop: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,

                      paddingLeft: 15,
                      color: currentTab == item?.title ? 'blue' : 'white',
                    }}>
                    {item?.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: showMenu ? 15 : 0,
          paddingVertical: showMenu ? 30 : 0,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        <Animated.View
          style={{
            flex: 1,
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}>
          {/* <Box bgColor={'#fff'} shadow={showMenu ? 4 : 0}> */}
          <View
            style={{
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => {
                // Do Actions Here....
                // Scaling the view...
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.88,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(offsetValue, {
                  // YOur Random Value...
                  toValue: showMenu ? 0 : 230,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(closeButtonOffset, {
                  // YOur Random Value...
                  toValue: !showMenu ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                setShowMenu(!showMenu);
              }}></TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

// For multiple Buttons...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
