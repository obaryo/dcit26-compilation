import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.maki}>MAKI BEST GRILL!!!!</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  maki: {
    fontSize: 50,
    color: 'gray',
    textAlign: 'center',
    paddingBottom: 90,
  }
});
