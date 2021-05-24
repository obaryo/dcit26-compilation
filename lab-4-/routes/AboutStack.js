import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

import About from '../screens/About';

const Stack = createStackNavigator();

const AboutStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'About',
          headerStyle: {
            backgroundColor: '#008080',
          },
          headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 25,
          },
          headerRight: () => (
            <AntDesign
              name="home"
              size={30}
              color="black"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
