import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { StyleSheet } from 'react-native';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <MaterialCommunityIcons
              name="menu-open"
              size={35}
              color="black"
              onPress={() => navigation.openDrawer()}
            />
          ),

          title: 'Home',
          headerStyle: {
            backgroundColor: '#008080',
            marginHorizontal: 8,
          },
          // headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 25,
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
        headerRight: () => (
            <AntDesign
              name="home"
              size={30}
              color="black"
              onPress={() => navigation.goBack()}
            />
          ),
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#008080',
          },
          
          // headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 25,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
