import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  View,
  Button,
  Image,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Profile from '../screens/Profile';
import About from '../screens/About';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cont}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://pbs.twimg.com/media/EyTPG6yU8AMafe9?format=jpg&name=small',
            }}
          />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="face-profile-woman"
            size={50}
            color="#8b0000"
            onPress={() => navigation.navigate('Profile')}
          />
          <Text style={styles.text}>CLICK PROFILE</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  icon: {
    marginTop: 80,
    alignItems: 'center',
  },
  text: {
    padding: 15,
    color: 'white',
    fontSize: 15,
    alignItems: 'center',
  },
  cont: {
    justifyContent: 'center',
    paddingTop: 60,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'stretch',
    alignItems: 'stretch',
  },
});
