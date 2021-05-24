import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "../screens/Home";
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} 
        options={{
        headerLeft: () => (
            <Icon name="menu" size={30} color="black" 
            onPress={() => navigation.openDrawer()} />
          ),
            headerStyle: {
             // backgroundColor: 'white',
             
            },
            
            headerTitleStyle: {
              //fontWeight: 'bold',
              //fontfamily:'',
              
            },
          }} />
      <Stack.Screen name="Profile" component={ Profile }/>
    </Stack.Navigator>
  );
};

export default HomeStack;