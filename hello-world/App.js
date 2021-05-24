// BSCS 3-4
// BAYABORDA FLORVIN
// ERIDAO JAMES CONRAD
//PASCUA AUBREY

import React from 'react';
import {View, Text, Alert, StyleSheet, Button, TouchableOpacity} from 'react-native';


export default function app() {

  function clk(){
    Alert.alert("HELLO", "I HOPE YOU'RE HAVING A GOOD DAY!", [{text: 'OK'}])
  }  

  

 return (
    <View style={styles.container}>
    <Text style={styles.paragraph}> Hello World </Text>
     
     
      
    
         <TouchableOpacity onPress={clk} style={styles.bg}>
         <Text style={styles.txtbutton}>
             CLICK
         </Text>
      
      </TouchableOpacity>
    </View>
      
  );



}

const styles = StyleSheet.create({

container:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
},

bg:{
  backgroundColor: 'white',

  margin:10,
},

paragraph: {
    
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

txtbutton:{
  color: 'white',
  
  fontSize: 30,
  backgroundColor: 'blue',
  padding: 5
  
},


})

