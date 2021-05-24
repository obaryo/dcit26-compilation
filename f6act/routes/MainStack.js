import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStack from './HomeStack';
//import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const MainStack = () => {
  return(
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={ HomeStack } 
      options={{
          title: 'Home',
         drawerIcon: () => (
        <Icon name="home-outline"  size={32} color="black" />
        ),
        }} 
      /> 
   </Drawer.Navigator>
    </NavigationContainer>
    
  );
}

export default MainStack;