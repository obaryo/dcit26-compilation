import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AntDesign } from '@expo/vector-icons';

import { StyleSheet, View } from 'react-native';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{ backgroundColor: '#d3d3d3', width: '70%' }}
        overlayColor="transparent">
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{
            drawerIcon: () => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutStack}
          options={{
            drawerIcon: () => (
              <AntDesign name="infocirlceo" size={24} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};



export default MainNavigator;
